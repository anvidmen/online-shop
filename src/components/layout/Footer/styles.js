import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 4rem;
    bottom: 0;
    background-color: ${Colors.bgColor};
    color: ${Colors.fontColor};
  

    @media only screen and (max-width: 468px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
`
