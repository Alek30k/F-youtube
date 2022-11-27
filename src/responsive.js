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

export const mobile3 = (props) => {
  return css`
    @media only screen and (max-width: 540px) {
      ${props}
    }
  `;
};

export const mobile4 = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};

export const mobile5 = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
