import styled from 'styled-components'
import { device } from '../../../../Contain'
export const AdminNavWrapper = styled.div`
    height: auto;
    width: 100%;
    padding: 2rem;
    position: fixed;
    width: 25%;
    left: 0;
    background-color: lightblue;
    height: 100%;

    @media ${device.tablet}{
        
    }

    & .content{
        width: 100%;
    }

    & .content-logo{
        width: 50px;
        height: 50px;
    }
`