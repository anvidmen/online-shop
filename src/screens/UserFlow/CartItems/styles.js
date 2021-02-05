import styled from 'styled-components'

export const Cart = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`

export const Wrapper = styled.div`
    height: 100%;
    min-height: 20vh;

    & > ul {
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        min-height: 4rem;
        
        & > li {
            list-style-type: none;
            font: normal normal normal 23px Helvetica Neue;
        }
    }
`

export const Item = styled.p`
    display: block;
    margin-bottom: 1rem;
    font: normal normal normal 20px Helvetica Neue;
`

export const Price = styled.span`
    text-align: right;
    position: relative;
    font: normal bold normal 23px Helvetica Neue;
`

export const Message = styled.span`
    font: normal bold normal 23px Helvetica Neue;
    text-align: center;
    min-height: inherit;
    margin: 2rem
`

export const Total = styled.div`
    font: normal normal normal 25px Helvetica Neue;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-top: 1px solid #ccc
`
