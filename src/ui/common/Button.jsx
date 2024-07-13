import styled, { css } from "styled-components";

const size = {
  small: css`
    padding: 0.3rem 0.4rem;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 400;
  `,
  medium: css`
    padding: 0.6rem 0.8rem;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
  `,
  large: css`
    padding: 1rem 1.4rem;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
  `,
};

const variation = {
  primary: css`
    color: #fff;
    background-color: var(--color-blue-700);
    border-color: var(--color-blue-100);
  `,
  info: css`
    color: #fff;
    background-color: #71b8e4;
    border-color: #71b8e4;
  `,
  success: css`
    color: #fff;
    background-color: var(--color-green-700);
    border-color: var(--color-green-100);
  `,
  danger: css`
    color: #fff;
    background-color: var(--color-red-700);
    border-color: var(--color-red-100);
  `,
  warning: css`
    color: white;
    background-color: var(--color-yellow-700);
    border-color: var(--color-yellow-100);
  `,
};

const color = {
  white: css`
    color: #fff;
  `,
};

// eslint-disable-next-line react/prop-types, no-unused-vars
const ButtonBase = ({ variation, ...props }) => <button {...props} />;

const Button = styled(ButtonBase).attrs((props) => ({
  size: props.size,
}))`
  border: none;
  border-radius: 3px;
  padding: ${(props) => props.padding};
  letter-spacing: 1.2px;
  color: ${(props) => props.color};
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : `var(--color-lime-500)`};
  ${(props) => size[props.size]};
  ${(props) => variation[props.variation]};
  ${(props) => color[props.color]}
`;

export default Button;
