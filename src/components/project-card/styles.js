import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.div`
   width: 100%;
   height: 100%;
   padding: 2rem 1rem;
   background-color: ${theme.colors.gray};
   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

   @media screen and (max-width: 450px) {
      padding: 1.5rem 1rem;
   }

   h2 {
      font-weight: bold;
      text-align: center;
      color: ${theme.colors.primary};

      @media screen and (max-width: 450px) {
         font-size: 1.2rem;
      }
   }

   .description {
      text-align: center;
      margin: 1rem auto;
      color: ${theme.colors.dark};
      max-width: 800px;

      @media screen and (max-width: 450px) {
         font-size: 0.9rem;
      }
   }

   .skills-div {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin: 1rem 0 2rem;

      img {
         width: 30px;
         height: fit-content;
      }
   }

   .link {
      font-size: 0.8rem;
      color: ${theme.colors.dark};
      text-align: center;
      margin-top: 1rem;
   }

   .mySwiper {
      .swiper-wrapper {
         .swiper-slide {
            width: 100%;
            height: 60vh;
            overflow: hidden;
            padding: 2rem 0;

            @media screen and (max-width: 900px) {
               height: 40vh;
            }

            img {
               width: 100%;
               height: 100%;
               object-fit: contain;
            }
         }
      }

      .swiper-button-next, .swiper-button-prev {
         transition: 200ms ease-out;
         user-select: none;

         @media screen and (max-width: 500px) {
            display: none;
         }

         &:hover {
            transform: scale(1.3);
         }
      }

      .swiper-button-next::after, .swiper-button-prev::after {
         color: ${theme.colors.primary};
      }

      .swiper-pagination-bullet-active {
         background-color: ${theme.colors.primary};
      }
   }
`
