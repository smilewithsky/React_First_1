import styled from 'styled-components'
import { device } from '../../../../Contain'
export const AdminNavWrapper = styled.div`
    height: auto;
    padding: 2rem;
    position: fixed;
    width: 25%;
    left: 0;
    background-color: lightblue;
    height: 100%;

    @media ${device.tablet}{
        width: 100%;
        height: auto;
    }

    & .content{
        width: 100%;
    }

    & .content-logo{
        width: 50px;
        height: 50px;
    }
`