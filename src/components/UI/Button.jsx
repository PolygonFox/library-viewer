import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const StyledButton = styled.button`
    background: none;
    color: white;
    cursor: pointer;
    
    &, &:hover, &:active {
        outline: 0;
        border: 0;
        padding: 10px 25px;
    }
   
    box-sizing: border-box;
    background: white;
    background-color: ${ ({theme}) => theme.color_1.secondary};
    border-radius: 15px;
`

const Navigation = (props) => (
    <StyledButton>
        { props.children }        
    </StyledButton>
);

export default Navigation;