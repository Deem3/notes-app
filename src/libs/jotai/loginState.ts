import { atom } from "jotai";
import { ResponseGetUserData } from "../api/api";

export const userInfoAtom = atom<ResponseGetUserData>({email: "", firstName: "", lastName: "", id: ""});