import React from 'react'
import { 
    HeaderContainer,
    HeaderCenter,
    HeaderLeft,
    HeaderRight,
    MenuIcon,
    ThemeIcon,
    PrintIcon,
    GitHubIcon } from './style'


const Header = () => {
  return (
      <HeaderContainer>
          <HeaderLeft>
            <MenuIcon />
            <ThemeIcon />
          </HeaderLeft>
          <HeaderCenter>
              Open Lessons
          </HeaderCenter>
          <HeaderRight>
              <PrintIcon />
              <GitHubIcon />
          </HeaderRight>
      </HeaderContainer>    

  )
}

export default Header

