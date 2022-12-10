import { atom } from 'recoil';

export type Filter = "all" | "checked" | "unchecked" | "removed";
export const stateFilter = atom<Filter>({
    key: "filterState",
    default: "all"
})