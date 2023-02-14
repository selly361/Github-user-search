import { StyledHeader, ThemeSwitchContainer, ThemeText, Title } from './Header.styles'

import React from 'react'

function Header() {
  return (
    <StyledHeader>
        <Title>DevFinder</Title>
        <ThemeSwitchContainer>
            <ThemeText></ThemeText>
            
        </ThemeSwitchContainer>
    </StyledHeader>
  )
}

export default Header