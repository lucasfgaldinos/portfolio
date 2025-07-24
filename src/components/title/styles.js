import { styled } from "styled-components"
import { theme } from "../../styles/theme"

export const H1 = styled.h1`
   font-size: 2rem;
   font-weight: bold;
   color: ${theme.colors.dark};
   ${(props) => props.$alignCenter && "text-align: center;"}

   @media screen and (max-width: 900px) {
      text-align: center;
   }
`
