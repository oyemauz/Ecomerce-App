import styled from "styled-components"
import MainQuotes from "./MainQuotes"
import ListItems from "./ListItems";

const Main=styled.main`

display:grid;
grid-template-columns:30rem 1fr;
gap:2rem;
margin-bottom:2.8rem;

position:relative;

@media screen and (max-width:650px){

    grid-template-columns: 5rem 1fr;
}

// @media screen and (max-width:800px){

//    grid-template-columns:1fr;
// }

`;


function MainListItems() {

    return (
        <Main>
            <ListItems/>
            <MainQuotes/>
        </Main>
    )
}

export default MainListItems

