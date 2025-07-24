import { Link } from "react-scroll"
import { styled } from "styled-components"
import { theme } from "../../styles/theme"

export const Header = styled.header`
   width: 100%;
   height: 4.5rem;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 10;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3rem;
   background-color: ${theme.colors.gray};
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

   @media screen and (max-width: 900px) {
      height: 3.5rem;

      .header-link-desktop {
         display: none;
      }
   }
`

export const HeaderLink = styled(Link)`
   color: ${theme.colors.dark};
   text-decoration: none;
   font-size: 1.1rem;
   font-weight: bold;
   position: relative;
   padding: 5px 0;
   cursor: pointer;
   transition: 200ms ease;
   
   &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
      transition: 200ms;
   }

   &:hover::after {
      width: 100%;
   }
`

export const MenuButton = styled.div`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 20%;
   height: 2rem;
   width: 2rem;
   display: none;
   cursor: pointer;
   z-index: 10;

   @media screen and (max-width: 900px) {
      display: inline-block;
   }

   svg {
      width: 100%;
      height: 100%;
      transition: 300ms;

      &:hover {
         transform: scale(1.2);
      }
   }
`

export const Menu = styled.div`
   width: 100%;
   height: fit-content;
   padding: 4rem 1rem 2rem;
   display: none;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 1.5rem;
   background-color: ${theme.colors.gray};
   position: fixed;
   top: -347px;
   left: 0;
   box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px;
   transition: 500ms ease;

   @media screen and (max-width: 900px) {
      display: flex;
   }

   ${(props) => props.$showMenu && "transform: translateY(347px);"}
`
