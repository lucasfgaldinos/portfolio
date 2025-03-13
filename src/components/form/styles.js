import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Container = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1.2rem;
   align-items: center;
   margin-top: 4rem;
   margin: 2rem auto 0;
   background-color: ${theme.colors.gray};
   border-radius: 10px;
   max-width: 600px;
   padding: 2rem;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   @media screen and (max-width: 450px) {
      padding: 1rem;
   }

   label {
      display: flex;
      flex-direction: column;
      width: 100%;
      color: ${theme.colors.primary};
      font-weight: bold;

      @media screen and (max-width: 450px) {
         font-size: 0.8rem;
      }
   }

   input, textarea {
      width: 100%;
      height: 3rem;
      background-color: ${theme.colors.glass};
      font-size: 1rem;
      color: ${theme.colors.dark};
      padding: 0 1rem;
      outline: none;
      border-radius: 10px;
      border: 1px solid transparent;
      margin-top: 2px;

      @media screen and (max-width: 450px) {
         font-size: 0.9rem;
         padding: 0 0.5rem;
         height: 2.5rem;
      }

      &:focus {
         border-color: ${theme.colors.primary};
         box-shadow: ${theme.colors.primary} 0px 0px 5px;
      }
   }

   textarea {
      height: 8rem;
      padding: 1rem;

      @media screen and (max-width: 450px) {
         padding: 0.5rem;
         height: 6rem;
      }
   }

   input[type="submit"] {
      background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
      cursor: pointer;
      color: ${theme.colors.white};
      border: none;
      transition: 200ms;

      &:hover {
         box-shadow: 0 0 10px ${theme.colors.primary};
      }

      &:focus {
         box-shadow: none;
      }
   }
`
