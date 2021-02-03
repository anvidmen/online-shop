import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 1px 3px 6px 3px #00000039;
    overflow: hidden;
    max-width: 22rem;
    margin: 1rem;
    padding: 1rem;
    
    @media only screen and (max-width: 667px) {
        max-width: 20rem;
        margin: 1rem;
    }
`

export const Image = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 100%;
`
export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > h2{
        font: normal bold normal 27px Helvetica Neue;
    }
    & > h3 {
        font: bolder bolder bolder 20px Helvetica Neue;
    }
`
