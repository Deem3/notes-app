import { atom } from 'jotai';
import { UserModel } from 'model';
export const userState = atom<UserModel | null>(null);
