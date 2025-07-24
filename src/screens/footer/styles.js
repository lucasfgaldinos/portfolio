import { styled } from "styled-components"
import { theme } from "../../styles/theme"

export const FooterContainer = styled.footer`
   width: 100%;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   border-top: 1px solid ${theme.colors.dark};
   position: relative;
`

export const Texts = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   p, a {
      font-size: 0.8rem;
      text-align: center;
      margin: 1rem 0;
   }

   span {
      text-align: center;
      color: ${theme.colors.primary};
      font-size: 0.9rem;
      margin: 2.5rem 0 1rem;

      b {
         font-weight: 900;
      }
   }
`
