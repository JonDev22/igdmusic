import { createContext, useCallback, useEffect, useState } from "react";

// Firebase
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../lib/firebase/firebase";

// Hooks
import { useQueryClient, useSuspenseQueries } from "@tanstack/react-query";

// Types
import type { ReactNode } from "react";
import type { IUser } from "../interfaces/IUser";
import type { ISong } from "../interfaces/ISong";
import { onAuthStateChanged, type User } from "firebase/auth";

export const AuthContext = createContext<{
    user: IUser | null;
    songs: ISong[];
    addSong: (song: ISong) => void;
    updateSong: (song: ISong) => void;
    deleteSong: (songId: string) => void;
} | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<IUser | null>(null);
    const queryClient = useQueryClient();

    const result = useSuspenseQueries({
        queries: [
            {
                queryKey: ["songs"],
                queryFn: async () => {
                    try {
                        const songCollection = collection(db, "songs");
                        const snapshot = await getDocs(songCollection);
                        return snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        })) as ISong[];
                    } catch {
                        return [];
                    }
                },
            },
        ],
    });

    const songs = result[0].data ?? [];

    const addSong = (song: ISong) => {
        queryClient.setQueryData<ISong[]>(["songs"], (old = []) => [
            ...old,
            song,
        ]);
    };

    const updateSong = (updatedSong: ISong) => {
        queryClient.setQueryData<ISong[]>(["songs"], (old = []) =>
            old.map((s) => (s.id === updatedSong.id ? updatedSong : s)),
        );
    };

    const deleteSong = (songId: string) => {
        queryClient.setQueryData<ISong[]>(["songs"], (old = []) =>
            old.filter((s) => s.id !== songId),
        );
    };

    const fetchUser = useCallback(async (user: User) => {
        // Get user from database
        const usersCollectionRef = collection(db, "users");
        const userDoc = doc(usersCollectionRef, user.uid);
        const querySnapshot = await getDoc(userDoc);

        if (!querySnapshot.exists()) {
            return null;
        }

        return { id: querySnapshot.id, ...querySnapshot.data() } as IUser;
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const res = await fetchUser(user);
                setUser(res);
                await queryClient.invalidateQueries({ queryKey: ["songs"] });
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [fetchUser, queryClient]);

    const authProviderValues = {
        user,
        songs,
        addSong,
        updateSong,
        deleteSong,
    };

    return (
        <AuthContext.Provider value={authProviderValues}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
