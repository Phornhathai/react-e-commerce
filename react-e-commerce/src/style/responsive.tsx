import {css} from "styled-components"

type size = {
    props : number
}

export const mobile = (props : size) => {
  return css`
    @media  only screen and (max-width: 380px) {
        ${props}
    }
  `;
};
export const tablet = (props : size) => {
  return css`
    @media  only screen and (max-width: 380px) {
        ${props}
    }
  `;
};


