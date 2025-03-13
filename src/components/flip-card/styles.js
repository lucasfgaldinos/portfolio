import { styled } from "styled-components"
import { theme } from "../../styles/theme"

export const FlipContainer = styled.div`
   width: 190px;
   height: 254px;
   perspective: 1000px;

   &:hover .flipper {
      transform: rotateY(180deg);
   }
`

export const Flipper = styled.div`
   width: 100%;
	height: 100%;
	transform-style: preserve-3d;
   background-color: antiquewhite;
   transition: transform 0.8s;
   position: relative;
   background-color: transparent;
`

export const Front = styled.div`
   background-color: ${theme.colors.gray};
   position: absolute;
   width: 100%;
   height: 100%;
   backface-visibility: hidden;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 2rem;
   box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

   h2 {
      color: ${theme.colors.dark};
      font-size: 1.5rem;
      text-align: center;
      font-weight: bold;
   }

   img {
      width: 64px;
      height: fit-content;
   }
`

export const Back = styled.div`
   background-color: ${theme.colors.gray};
   position: absolute;
   width: 100%;
   height: 100%;
   transform: rotateY(180deg);
   backface-visibility: hidden;
   border-radius: 10px;
   padding: 0.6rem;
   display: flex;
   align-items: center;
   box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

   p {
      color: ${theme.colors.dark};
      font-size: 0.9rem;
   }
`
