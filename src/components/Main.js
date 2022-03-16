import styled from "styled-components";
import bgImg from "../images/react-icon-large.png";

const MainPage = styled.main`
    padding: 57px 27px;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: right;
    
`
const MainTitle = styled.h1`
font-weight: 700;
font-size: 39px;
letter-spacing: -0.05em;
color: #FFFFFF;
`

const List = styled.ul`
    
`
const Item = styled.li`
    padding-block: 10px;
    font-weight: 400;
    font-size: 16px;

&::marker {
    color: #61DAFB;
    font-size: 1.5em;
}
`






function Main () {
    return (
        <MainPage>
            <MainTitle>Fun facts about React</MainTitle>
            <List>
                <Item>Was first released in 2013</Item>
                <Item>Was originally created by Jordan Walke</Item>
                <Item>Has well over 100K stars on GitHub</Item>
                <Item>Is maintained by Facebook</Item>
                <Item>Powers thousands of enterprise apps, including mobile apps</Item>

            </List>
        </MainPage>
    )
}

export default Main;