import { Element } from "react-scroll"
import { styled } from "styled-components"
import { theme } from "../../styles/theme"

export const Main = styled(Element)`
   width: 100%;
   min-height: 100vh;
`

export const Content = styled.section`
   max-width: 1200px;
   min-height: 100vh;
   margin: 0 auto;
   padding: 8rem 2rem;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

   @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
   }
`

export const Info = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media screen and (max-width: 900px) {
      align-items: center;
   }

   strong {
      font-size: 5.5rem;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 2rem;
      color: ${theme.colors.primary};
      animation: showName 1.2s ease-out;

      @media screen and (max-width: 900px) {
         text-align: center;
         font-size: 4rem;
      }

      @keyframes showName {
         0% {
            transform: translateY(-8rem);
            opacity: 0;
         }
         100% {
            transform: translateY(0);
            opacity: 1;
         }
      }
   }

   span {
      font-size: 2rem;
      font-weight: 600;
      color: ${theme.colors.dark};
      line-height: 1.2;

      @media screen and (max-width: 900px) {
         text-align: center;
      }
   }

   p {
      font-size: 1rem;
      color: ${theme.colors.secondary};
      margin-top: 1rem;
      margin-bottom: 4rem;
      animation: showP 1.2s ease-out;

      @media screen and (max-width: 900px) {
         text-align: center;
      }

      @keyframes showP {
         0% {
            transform: translateY(8rem);
            opacity: 0;
         }
         100% {
            transform: translateY(0);
            opacity: 1;
         }
      }
   }
`

export const Picture = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: showImg 1.2s ease-out;

   img {
      width: 90%;
      height: fit-content;

      @media screen and (max-width: 900px) {
         width: 40vh;
      }

      @keyframes showImg {
         0% {
            transform: translateY(-8rem);
            opacity: 0;
         }
         100% {
            transform: translateY(0);
            opacity: 1;
         }
      }
   }
`
