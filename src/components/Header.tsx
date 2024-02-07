import { Text } from "react-native-paper";
import React from "react";
import styled from "styled-components/native";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle variant="headlineLarge">SpaceCraft</HeaderTitle>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.View`
    background-color: #6650a4;
    width: 100%;
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderTitle = styled(Text)`
    font-weight: 800;
    color: #fff;
    text-transform: uppercase;
`;

export default Header;