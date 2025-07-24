import { Element, Link } from "react-scroll"
import { styled } from "styled-components"
import ProfilePicture from "../../assets/perfil.jpeg"
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
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   align-items: center;

   @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
   }
`

export const Resume = styled.div`
   margin-top: 3rem;
   
   p {
      max-width: 600px;
      font-size: 1rem;
      line-height: 1.5;
      color: ${theme.colors.dark};

      &:first-of-type {
         margin-top: 1.5rem;
      }
   } 
`

export const A = styled(Link)`
   font-size: 1rem;
   line-height: 1.5;
   color: ${theme.colors.primary};
   cursor: pointer;
   transition: 200ms;

   &:hover {
      text-decoration: underline;
   }
`

export const Picture = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   div {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-image: url(${ProfilePicture});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border: 2px solid ${theme.colors.gray};
      animation: boxShadow 7s linear infinite;

      @media screen and (max-width: 900px) {
         width: 150px;
         height: 150px;
      }

      @keyframes boxShadow {
         0%, 100% {
            box-shadow: 0;
         }
         50% {
            box-shadow: 0 0 40px 3px ${theme.colors.primary};
         }
      }
   }
`
