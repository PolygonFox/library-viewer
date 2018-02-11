import React from 'react';

import styled from 'styled-components'

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`
const StyledListItem = styled.li`
    margin: 0;
    display: inline-block;
    padding: 0;
`

const Navigation = ({ children, itemComponent: ItemComponent }) => (
    <StyledList>
        {children.map((child, id) => {
            return (ItemComponent) ? (<ItemComponent key={id}>{child}</ItemComponent>) : (<StyledListItem key={id}>{child}</StyledListItem>)
        })}
    </StyledList>
);

export default Navigation;