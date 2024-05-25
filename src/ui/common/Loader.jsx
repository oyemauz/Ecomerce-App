"use client";

import { Spinner } from "flowbite-react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
  width: 100px;
  margin: 2rem auto;

  .spinner {
    width: 3rem;
    animation: ${rotate} 1s linear infinite;
  }
`;

export default function Loader() {
  return (
    <Div>
      <Spinner className="spinner" aria-label="Default status example" />
    </Div>
  );
}
