import { StyledHeader, ThemeSwitchContainer, ThemeText, Title } from './Header.styles'

import type { IHeaderProps } from 'types/header'
import React from 'react'

function Header({ toggleTheme, icon, theme }: IHeaderProps) {
  return (
    <StyledHeader>
        <Title>DevFinder</Title>
        <ThemeSwitchContainer onClick={toggleTheme}>
            <ThemeText>{theme == "light" ? "dark" : "light"}</ThemeText>
            {icon}
        </ThemeSwitchContainer>
    </StyledHeader>
  )
}

export default Header