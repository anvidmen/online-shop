import styled from 'styled-components'
import Colors from 'theme/Colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: inherit;
    background: ${Colors.fontColor} 0% 0% no-repeat padding-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 0px 2px 4px 2px #00000039;
    overflow: hidden;
    margin: 2rem 10rem 2rem 10rem;
    padding: 2rem;
    
    @media only screen and (max-width: 667px) {
        max-width: 20rem;
        margin: 1rem;
    }
`

export const ButtonItems = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
`

export const ExtraButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > a { 
        letter-spacing: 0.1rem; 
        opacity: 1;
        border-radius: 6px;
        width: 14rem;
        height: 2.5rem;
        font: normal normal normal 20px/25px Helvetica Neue;
        background: transparent linear-gradient(98deg, #01a1A1 100%, #08A6A6 100%) 0% 0% no-repeat;
        padding: 0 0.5rem 0 0.5rem;
        color: ${Colors.fontColor};
        margin: 1rem;
        text-decoration: none;
        text-align: center;
        vertical-align: middle;
        line-height: 2.4rem;        
    
    &:hover {
        cursor: pointer;
        box-shadow: 2px 0 2px 2px rgba(10, 10, 10,.3)
    }
    }
`

export const StyledButton = styled.button`
    border: none;
    border-radius: 6px;
    opacity: 1;
    font: normal normal normal 20px/25px Helvetica Neue;
    width: 9rem;
    height: 2.5rem;
    margin: 1rem;
    text-align: center;
    outline: none;
    
    &.clearCart{
        background: transparent linear-gradient(98deg,  #01a1A1 100%, #08A6A6 100%) 0% 0% no-repeat;
        padding-box;
        color: ${Colors.fontColor};
        
        &:focus{
            outline: black
        };

        &:hover {
            cursor: pointer;
            box-shadow: 2px 0 2px 2px rgba(10, 10, 10,.3)
        }
    }

`
