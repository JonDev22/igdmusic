import { useCallback, useEffect, useState } from "react";

// Firebase
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../lib/firebase/firebase";

// Hooks
import { useQueryClient, useSuspenseQueries } from "@tanstack/react-query";

// Types
import type { ReactNode } from "react";
import type { IUser } from "../interfaces/IUser";
import type { ISong } from "../interfaces/ISong";
import type { Sunday } from "../interfaces/ISundays";
import type { IMusician } from "../interfaces/IMusician";
import { onAuthStateChanged, type User } from "firebase/auth";

import { AuthContext } from "./AuthContext";

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
            {
                queryKey: ["sundays"],
                queryFn: async () => {
                    try {
                        const sundaysCollection = collection(db, "sundays");
                        const snapshot = await getDocs(sundaysCollection);
                        return snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        })) as Sunday[];
                    } catch {
                        return [];
                    }
                },
            },
            {
                queryKey: ["musicians"],
                queryFn: async () => {
                    try {
                        const musiciansCollection = collection(db, "musicians");
                        const snapshot = await getDocs(musiciansCollection);
                        return snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        })) as IMusician[];
                    } catch {
                        return [];
                    }
                },
            },
        ],
    });

    const songs = result[0].data ?? [];
    const sundays = result[1].data ?? [];
    const musicians = result[2].data ?? [];

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

    const addSunday = (sunday: Sunday) => {
        queryClient.setQueryData<Sunday[]>(["sundays"], (old = []) => [
            ...old,
            sunday,
        ]);
    };

    const updateSunday = (updatedSunday: Sunday) => {
        queryClient.setQueryData<Sunday[]>(["sundays"], (old = []) =>
            old.map((s) => (s.id === updatedSunday.id ? updatedSunday : s)),
        );
    };

    const deleteSunday = (sundayId: string) => {
        queryClient.setQueryData<Sunday[]>(["sundays"], (old = []) =>
            old.filter((s) => s.id !== sundayId),
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
                await queryClient.invalidateQueries({
                    queryKey: ["songs", "sundays"],
                });
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [fetchUser, queryClient]);

    const addMusician = (musician: IMusician) => {
        queryClient.setQueryData<IMusician[]>(["musicians"], (old = []) => [
            ...old,
            musician,
        ]);
    };

    const updateMusician = (updatedMusician: IMusician) => {
        queryClient.setQueryData<IMusician[]>(["musicians"], (old = []) =>
            old.map((m) => (m.id === updatedMusician.id ? updatedMusician : m)),
        );
    };

    const removeMusician = (musicianId: string) => {
        queryClient.setQueryData<IMusician[]>(["musicians"], (old = []) =>
            old.filter((m) => m.id !== musicianId),
        );
    };

    const authProviderValues = {
        user,
        songs,
        addSong,
        updateSong,
        deleteSong,
        sundays,
        addSunday,
        updateSunday,
        deleteSunday,
        musicians,
        addMusician,
        updateMusician,
        removeMusician,
    };

    return (
        <AuthContext.Provider value={authProviderValues}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
