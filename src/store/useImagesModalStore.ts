import { create } from "zustand";

type ImagesModalState = {
  modalIsOpen: boolean;
  imgs: string[] | undefined;
  title: string;
  openModal: (images: string[], title?: string) => void;
  closeModal: () => void;
};

export const useImagesModalStore = create<ImagesModalState>((set) => ({
  modalIsOpen: false,
  imgs: [],
  title: "Imagens do projeto",

  openModal: (imgs, title = "Imagens do projeto") =>
    set({
      modalIsOpen: true,
      imgs: imgs,
      title,
    }),

  closeModal: () =>
    set({
      modalIsOpen: false,
      imgs: [],
      title: "Imagens do projeto",
    }),
}));
