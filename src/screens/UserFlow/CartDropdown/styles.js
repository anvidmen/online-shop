import styled from 'styled-components'
import Colors from 'theme/Colors'

export const CartDrop = styled.div`
    position: fixed;
    width: 19rem;
    height: 23rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    top: calc(0 - 1em);
    right: 1em;
    z-index: 5;
    transition: all 0.3s ease-in-out;
    background: ${Colors.bgHead};
    box-shadow: 0 0 11px rgba(33,33,33,.2)
`
