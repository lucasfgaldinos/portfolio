import { Element } from "react-scroll"
import { styled } from "styled-components"
import { theme } from "../../styles/theme"

export const Main = styled(Element)`
   width: 100%;
   min-height: 100vh;
   position: relative;
`

export const Content = styled.section`
   max-width: 1200px;
   min-height: 100vh;
   margin: 0 auto;
   padding: 8rem 2rem;

   @media screen and (max-width: 450px) {
      padding: 8rem 1rem;
   }

   .cv-div {
      width: 100%;
      padding: 4rem 0 0;
      display: flex;
      align-items: end;
      justify-content: center;

      @media screen and (max-width: 450px) {
         padding: 3rem 0 0;
      }

      a {
         display: flex;
         align-items: center;
         gap: 3px;
         transition: 200ms;
         color: ${theme.colors.primary};
         text-decoration: none;

         svg:last-child {
            transform: translateY(-10px);
            transition: 200ms;
            opacity: 0;
         }

         &:hover {
            svg:last-child {
               opacity: 1;
               transform: translate(0);
            }
            text-decoration: underline;
         }
      }
   }
`

export const Links = styled.div`
   width: 100%;
   max-width: 1200px;
   margin: 2rem auto;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

   @media screen and (max-width: 450px) {
      display: flex;
      flex-direction: column;
   }

   .e-mail {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 1rem;

      @media screen and (max-width: 450px) {
         padding: 0;
      }

      a {
         display: flex;
         align-items: center;
         transition: 200ms;
         color: ${theme.colors.primary};
         text-decoration: none;

         svg:first-child {
            margin-right: 4px;
         }

         svg:last-child {
            transition: 200ms;
            opacity: 0;
         }

         &:hover {
            svg:last-child {
               opacity: 1;
               transform: translateX(6px);
            }
            text-decoration: underline;
         }
      }
   }

   .social-media {
      display: flex;
      justify-content: center;
      padding: 2rem 1rem;

      @media screen and (max-width: 450px) {
         padding: 3rem 0 1rem;
      }

      ul {
         list-style: none;
         display: flex;
         gap: 1rem;

         li {
            width: 40px;
            height: 40px;

            a {
               display: inline-block;
               font-size: 40px;
               width: 100%;
               height: 100%;
               color: ${theme.colors.primary};

               svg {
                  transition: 200ms;
               }

               &:hover {
                  svg {
                     transform: scale(1.2);
                  }
               }
            }
         }
      }
   }
`

export const Div = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   p {
      color: ${theme.colors.primary};
      text-align: center;
   }
`
