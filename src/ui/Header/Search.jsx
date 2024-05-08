import styled from "styled-components";
import Data from '../../utils/db.appdata';

const InputSearch=styled.input`

padding:1rem .6rem;
width: 30rem;
border: 1px solid rgba(0,0,0,0.13);
outline: none;
border-radius:3px;
&::placeholder{
    letter-spacing:2px;
}
border-right:none;
transition: width 3s, 0.5s;
transition-timing-function: ease-in, ease-out;

&:focus{
    width:32rem;
    border:1px solid var(--color-lime-500);
    border-right:none;
}

@media screen and (max-width:${(props)=>props.theme.breakpoints.xl}){

    width:25rem;

}

@media screen and (max-width:${(props)=>props.theme.breakpoints.lg}){

width:20rem;
}

@media screen and (max-width:900px){

display:none;
}

`

const SearchButton=styled.button` 

padding:1rem 1.8rem;
border:none;
background-color:var(--color-lime-500);
border-radius:3px;
color:white;
letter-spacing:1.2px;
display: flex;
align-items: center;
gap:0.5rem;
flex-direction: row;
@media screen and (max-width:900px){

    display:none;
}
    
`;
export default function Search(){

    return(
        <div className="flex">
            <InputSearch type="search" placeholder="Search Product..." />
            <SearchButton><ion-icon name={Data.common.search}/>Search</SearchButton>
        </div>
    )
}
