import styled from 'styled-components';
import Categories from '../ui/Categories/Categories';
import ResponsiveSideBar from '../Styles/ResponsiveSideBar';

const Items=styled.div`
// padding-top: 2.4rem;
`;

function Grocery() {
    return (
        <Items>
            <ResponsiveSideBar/>
            <Categories/>
        </Items>
    )
}

export default Grocery
