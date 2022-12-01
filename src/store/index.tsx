import create from "zustand";

export const useBearStore = create((set) => ({
  page: 0,
  setPage: (currentPage: number) => set(() => ({ page: currentPage })),
  NextPage: () =>
    set((state: any) => state.page < 4 && { page: state.page + 1 }),
}));