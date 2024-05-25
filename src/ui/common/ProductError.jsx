import PropTypes from "prop-types";
import styled from "styled-components";

ProductError.propTypes = {
    error: PropTypes.any,
}

const Div=styled.div`
background-color:var(--color-red-100);
width:30rem;
padding:1.4rem;
border-radius:7px;
margin:2rem auto;
align-text:center;
`;

export default function ProductError({error}) {

  return (
    <Div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Status: {error.message}</i>
      </p>
    </Div>
  );
}
