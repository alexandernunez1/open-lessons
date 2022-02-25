import styled from 'styled-components'
import { 
    Brightness6, 
    GitHub, 
    Menu, 
    Print } from '@mui/icons-material'

export const HeaderContainer = styled.div`
display: flex;
position: fixed;
top: 0;
width: 100%;
justify-content: space-between;
align-items: center;
color: #0b4f6c;

`

export const HeaderLeft = styled.div`
flex: 0.08;

`

export const HeaderRight = styled.div`
flex: 0.08;
display: flex;
align-items: center;

`

export const HeaderCenter = styled.div`
align-items: center;
font-weight: 500;
cursor: pointer;
:hover {
    opacity: 0.7;
}
 
`

export const GitHubIcon = styled(GitHub)`
transform: scale(0.9);
cursor: pointer;
:hover {
    opacity: 0.7;
}
`

export const PrintIcon = styled(Print)`
padding-right: 10px;
transform: scale(0.9);
cursor: pointer;
:hover {
    opacity: 0.7;
}
`

export const MenuIcon = styled(Menu)`
padding-right: 10px;
transform: scale(0.9);
cursor: pointer;
:hover {
    opacity: 0.7;
}
`

export const ThemeIcon = styled(Brightness6)`
transform: scale(0.9);
cursor: pointer;
:hover {
    opacity: 0.7;
}
`

