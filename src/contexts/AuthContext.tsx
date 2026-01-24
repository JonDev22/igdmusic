import { createContext } from "react";

import type { IUser } from "../interfaces/IUser";
import type { ISong } from "../interfaces/ISong";
import type { Sunday } from "../interfaces/ISundays";
import type { IMusician } from "../interfaces/IMusician";

export interface AuthContextType {
    user: IUser | null;
    songs: ISong[];
    addSong: (song: ISong) => void;
    updateSong: (song: ISong) => void;
    deleteSong: (songId: string) => void;

    sundays: Sunday[];
    addSunday: (sunday: Sunday) => void;
    updateSunday: (sunday: Sunday) => void;
    deleteSunday: (sundayId: string) => void;

    musicians: IMusician[];
    addMusician: (musician: IMusician) => void;
    updateMusician: (musician: IMusician) => void;
    removeMusician: (musicianId: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
