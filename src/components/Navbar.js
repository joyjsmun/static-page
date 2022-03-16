import styled from "styled-components";
import logo from "../images/react-icon-small.png"


const Nav = styled.nav`
     display: flex;
     align-items: center;
     background-color: #21222A;
     height: 91px;
     padding: 31px 26px;
`
const Logo = styled.img`
    height: 27px;
    margin-right: 7px;
`
const LogoTitle = styled.h3`
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -0.05em;
    margin-right: auto;
    color: #61DAFB;
`

const SmallTitle = styled.h4`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
`

function Navbar () {
    return (
        <Nav>
            <Logo src={logo}/>
            <LogoTitle>ReactFacts</LogoTitle>
            <SmallTitle>React Course - Project 1</SmallTitle>
        </Nav>
    )
}

export default Navbar;