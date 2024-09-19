import {create} from "zustand";

interface UIState {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (category: string) => void;
  setHeaderImageSrc: (src: string) => void;
}

export const useUIState = create<UIState>(
  (set) => ({
    homeCategory: "",
    headerImageSrc: "https://images.unsplash.com/photo-1487956382158-bb926046304a",
    setHomeCategory: (category: string) => set({homeCategory: category}),
    setHeaderImageSrc: (src: string) => set({headerImageSrc: src}),
  })
);
