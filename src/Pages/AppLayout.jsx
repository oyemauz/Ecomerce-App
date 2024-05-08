import styled from "styled-components"
// import  usePdata  from "../ThemeContext/usePData";
import Categories from "../ui/Categories/Categories";
import ResponsiveSideBar from "../Styles/ResponsiveSideBar";
// import PropTypes from 'prop-types';


const Section=styled.section`

padding: 1.4rem 3rem 0 3rem;
display: block;

@media screen and (max-width:${(props)=>props.theme.breakpoints.xl}){

    padding: 1.4rem 1rem 0 1rem;

}

@media screen and (max-width:1100px){

    padding: 1.4rem 0 1rem 0;

}
`;


function AppLayout() {
    // const {sidebar,setSidebar}=usePdata();



      
    return (
        <Section>
            <ResponsiveSideBar/>
            <Categories/>
        </Section>
    )
}



// AppLayout.propTypes = {
//     sidebar: PropTypes.bool, // Example prop validation for a boolean prop
//   };

export default AppLayout

