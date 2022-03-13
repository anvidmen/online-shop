import styled from 'styled-components'
import { Device } from 'theme/Responsive'

export const Cart = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column
`

export const Wrapper = styled.div`
    height: 100%;
    min-height: 20vh
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
    font: normal normal normal 23px Helvetica Neue;

    & > div {
        width: 6rem;
    };

    @media ${Device.mobile} {
        font: normal normal normal 18px Helvetica Neue;

        & > div {
            :first-child {
                width: 9rem
            }
        };

        .category {
            display: none
        };
    } 
`

export const Item = styled.div`
    display: flex;
    margin-bottom: 2rem;
    font: normal normal normal 20px Helvetica Neue;
    display: ${ props => props.visible? "none" : "flex" };

    @media ${Device.mobile} {
        font: normal normal normal 16px Helvetica Neue;
    } 
`

export const Price = styled.div`
    position: relative;
    font: normal bold normal 20px Helvetica Neue;

    @media ${Device.mobile} {
        font: normal bold normal 16px Helvetica Neue;
    }
`

export const Message = styled.div`
    font: normal bold normal 23px Helvetica Neue;
    text-align: center;
    padding: 2rem
`

export const Total = styled.div`
     font: normal bold normal 25px Helvetica Neue;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-top: 1px solid #ccc;

    @media ${Device.mobile} {
        font: normal bold normal 20px Helvetica Neue;
    } 
`
