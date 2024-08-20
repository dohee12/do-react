import React from "react";
import styled from "styled-components";

/*const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;
`; */

// Button 컴포넌트
const Button = styled.button`
    color: grey;
    border: 2px solid palevioletred;
`;

// Button에 style이 추가된 RoundedButton 컴포넌트
const RoundedButton = styled(Button)`
    border-radius: 16px;
`;

function Sample(props) {
    return (
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
        </div>
    )
}

export default Sample;