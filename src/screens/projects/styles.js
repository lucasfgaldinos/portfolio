import { Element } from "react-scroll"
import { styled } from "styled-components"

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
   display: flex;
   flex-direction: column;
   gap: 3rem;

   @media screen and (max-width: 450px) {
      padding: 8rem 1rem;
   }
`
