import { IconButton } from '@mui/material'
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
              <IconButton 
              style={{color: "#0b4f6c"}}
              href='https://github.com/alexandernunez1/open-lessons'>
                <GitHubIcon />
              </IconButton>
          </HeaderRight>
      </HeaderContainer>    

  )
}

export default Header

