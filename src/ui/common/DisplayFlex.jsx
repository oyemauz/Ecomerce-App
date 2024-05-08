import styled from "styled-components";

const DisplayFlex=styled.div`

display:flex;
align-items:center
justify-content:space-between;
gap:${((props)=>props.gap)};

`

export default DisplayFlex;