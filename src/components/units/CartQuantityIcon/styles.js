import styled from 'styled-components'

export const Amount = styled.div`
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    border: solid 1px white;
    border-radius: 7px;
    bottom: 0;
    
    & > div {
        display: inline-block;
        width: fit-content;
        height: fit-content;
        margin: auto;
        vertical-align: middle;
        font-size: 1rem;
        color: white;
        line-height: 0
    }    
`
