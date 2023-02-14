import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 738px;
    display: flex;
    justify-content: space-between;
`


export const Title = styled.h2`
    font-size: 1.625rem;
    color: ${props => props.theme.textHighContrast};
`


export const ThemeSwitchContainer = styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;

    &:hover > h2 {
        color: ${props => props.theme.themeButtonHover};
    }

    &:hover path {
        fill: ${props => props.theme.themeButtonHover};
    }
`


export const ThemeText = styled.h2`
    color: ${props => props.theme.textLowContrast};
`