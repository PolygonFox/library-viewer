import React from 'react';

import styled from 'styled-components'
import Navigation from './Navigation';

const StyledMainNavigation = styled.div`
    margin: 0;
    height: 100px;
    list-style: none;
    box-sizing: border-box;
    background-color: ${ ({theme}) => theme.color_1.primary};
   
`

const StyledMenuItem = styled.li`
    margin: 0 20px;
    flex: 0 1 auto;
    align-self: center;
`

const MainNavigation = (props) => (
    <StyledMainNavigation>
        <Navigation itemComponent={StyledMenuItem}>
            { props.children }
        </Navigation>
    </StyledMainNavigation>
);

export default MainNavigation;