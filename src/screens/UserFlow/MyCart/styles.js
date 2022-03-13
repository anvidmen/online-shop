import styled from 'styled-components'
import Colors from 'theme/Colors'
import { Device } from 'theme/Responsive'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: inherit;
    background: ${Colors.fontColor} 0% 0% no-repeat padding-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 0px 2px 4px 2px #00000025;
    overflow: hidden;
    margin: 2rem auto;
    padding: 2rem;
    max-width: 60rem;
    
    @media ${Device.mobile} {
        margin: 1rem
    } 
`

export const ButtonItems = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    margin-top: 2rem;
`

export const ExtraButtons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
  
    & > a { 
        letter-spacing: 0.1rem; 
        opacity: 1;
        border-radius: 6px;
        width: 14rem;
        height: 2.5rem;
        font: normal bold normal 18px Helvetica Neue;
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
    };

    @media ${Device.mobile} {
        align-items: center;
        flex-direction: column-reverse;

        & > a { 
            font-size: 16px;
            margin: 0.3rem;
        }
    } 
`

export const StyledButton = styled.button`
    border: none;
    border-radius: 6px;
    opacity: 1;
    font: normal bold normal 18px Helvetica Neue;
    width: 14rem;
    height: 2.5rem;
    margin: 1rem;
    text-align: center;
    outline: none;
    letter-spacing: 0.1rem; 
    
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
    };

    @media ${Device.mobile} {
        font: normal bold normal 16px Helvetica Neue;
        margin: 0.3rem;
    } 
`
