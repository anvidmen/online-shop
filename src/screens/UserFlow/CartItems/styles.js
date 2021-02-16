import styled from 'styled-components'

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
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    font: normal normal normal 23px Helvetica Neue;

    & > div {
        width: 6rem;
        padding: 0.5rem 0 0.5rem
    }
`

export const Item = styled.div`
    display: block;
    margin-bottom: 1rem;
    font: normal normal normal 20px Helvetica Neue;
`

export const Price = styled.div`
    position: relative;
    font: normal bold normal 23px Helvetica Neue;
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
    border-top: 1px solid #ccc
`
