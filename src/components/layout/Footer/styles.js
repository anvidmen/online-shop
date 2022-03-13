import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 0;
    background-color: ${Colors.bgColor};
    color: ${Colors.fontColor};
    
    @media only screen and (max-width: 468px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
`

export const Container = styled.div`
    display: block;
    margin-top: 1rem;
    width: 80%    
`

export const Information = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    
    & h2 {
        font: normal bold normal 24px Helvetica Neue;
    };
    
    & > a {
        margin: 0.5rem;
        color: inherit;

        & > div {
            color: ${Colors.bgHead};

            &:hover {
                color: black
            }
        }
    };

     @media only screen and (max-width: 468px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        & > h2 {
            font: normal bold normal 18px Helvetica Neue;
        }
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
    border-top: 1px solid white;

    & > a {
        margin: 0 0.4rem;
        color: ${Colors.bgHead}
    };

     @media only screen and (max-width: 468px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`
