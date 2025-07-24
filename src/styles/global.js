import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
      font-weight: normal;
   }

   body {
      background-color: ${theme.colors.white};
   }

   ::-webkit-scrollbar {
      width: 10px;
      background-color: ${theme.colors.white};
   }

   ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.primary};
   }
`
