import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    height: 40px;
    width: 80px;
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: #FFFFFF;

    ${props => (props.type === 'primary-red') ? `background: #FF385C` : null}
    ${props => (props.type === 'secondary-red') ? `background: #D80565` : null}
`;

export default Button;