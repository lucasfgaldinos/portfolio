import { XIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useImagesModalStore } from "@/store/useImagesModalStore";
import { Button } from "./ui/button";

export function ModalImageViewer() {
  const { modalIsOpen, imgs, title, closeModal } = useImagesModalStore();

  // trava scroll sem "pulo"
  useEffect(() => {
    if (!modalIsOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [modalIsOpen]);

  if (!modalIsOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-secondary/80 p-2 backdrop-blur-sm sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-secondary shadow-lg"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-my-light-gray px-4 py-4">
          <div className="min-w-0">
            <h2 className="truncate text-xs font-medium text-my-primary-text md:text-base">
              {title}
            </h2>
          </div>

          <Button variant="destructive" size="sm" onClick={closeModal}>
            <XIcon /> Fechar
          </Button>
        </div>

        {/* Conteúdo / Carrossel */}
        <div className="flex-1 p-4">
          <div className="h-full w-full rounded-xl">
            <Swiper
              slidesPerView={1}
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              className="mySwiper select-none pb-8!"
            >
              {imgs?.map((item) => (
                <SwiperSlide
                  key={item}
                  className="flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                  <div className="flex h-[70dvh] w-full items-center justify-center mt-2">
                    <img
                      src={item}
                      alt={`Visualização: ${title}`}
                      className="max-h-full max-w-full object-contain"
                      draggable={false}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
