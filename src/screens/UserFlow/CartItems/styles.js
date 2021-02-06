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
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    min-height: 4rem;
    border-bottom: 1px solid #ccc;
    font: normal normal normal 23px Helvetica Neue;

    & > div {
        width: 6rem;
        padding: 1rem 0 1rem;
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
    padding: 4rem
`

export const Total = styled.div`
    font: normal bold normal 25px Helvetica Neue;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-top: 1px solid #ccc
`
