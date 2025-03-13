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
`

export const CardContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 4rem;
   padding: 3rem 0;
`
