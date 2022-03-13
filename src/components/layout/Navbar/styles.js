import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledNavbar = styled.nav`
    overflow: hidden;
    background-color: ${Colors.bgColor};
    position: fixed;
    width: 100%;
    z-index: 1;
`

export const Container = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 3rem;

    & > a {
        float: left;
        color:  ${Colors.fontColor};
        text-align: center;
        text-decoration: none;
        font: normal normal normal 24px Helvetica Neue;
        &:hover {
            color: ${Colors.hoverNav}
        }
    }
`

export const Routes = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 3rem 0 0;

    & > a {
        display: flex;
        float: left;
        color:  ${Colors.fontColor};
        text-align: center;
        padding: 1rem 1rem;
        text-decoration: none;
        font: normal normal normal 20px Helvetica Neue;

        &:hover {
            color: ${Colors.hoverNav}
        }
    }
`
