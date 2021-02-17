import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: ${Colors.fontColor} 0% 0% no-repeat padding-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 1px 3px 6px 3px #00000039;
    overflow: hidden;
    max-width: 22rem;
    margin: 1rem;
    padding: 1rem;

    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: yellow;
        font: normal bold normal 22px Helvetica Neue;
    },
    
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
        font: bolder bolder bolder 20px Helvetica Neue
    }
`

export const StyledButton = styled.button`
    border: none;
    border-radius: 6px;
    opacity: 1;
    font: normal normal normal 20px/25px Helvetica Neue;
    width: 100%;
    height: 2.5rem;
    margin: 1rem;
    text-align: center;
    outline: none;
    
    &.styleButton {
        background: transparent
        linear-gradient(98deg, #01b1A1 100%, #08A6A6 100%) 0% 0% no-repeat;
        padding-box;
        color: ${Colors.fontColor};
        
        &:hover {
            cursor: pointer;
            box-shadow: 2px 0 2px 2px rgba(10, 10, 10,.3)
        }
    }

`
