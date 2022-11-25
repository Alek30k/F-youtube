import { css } from "styled-components";

export const mobile0 = (props) => {
  return css`
    @media only screen and (max-width: 920px) {
      ${props}
    }
  `;
};

export const mobile1 = (props) => {
  return css`
    @media only screen and (max-width: 740px) {
      ${props}
    }
  `;
};

export const mobile2 = (props) => {
  return css`
    @media only screen and (max-width: 620px) {
      ${props}
    }
  `;
};
