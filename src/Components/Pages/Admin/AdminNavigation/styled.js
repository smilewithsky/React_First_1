import styled from 'styled-components'
import { device } from '../../../../Contain'
export const AdminNavWrapper = styled.div`
    height: auto;
    padding: 2rem;
    left: 0;
    background-color: lightblue;
    height: 100%;
    position: sticky;
    width: 100%;
    min-height: 100vh;

    @media ${device.tablet}{
        width: 100%;
        height: auto;
    }

    @media ${device.laptop}{
        min-height: 0px;
        max-height: 100px;
    }

    & .content{
        width: 100%;

        @media ${device.laptop}{
            display: flex;
            align-items: center;
        }
    }

    & .content-logo{
        width: 50px;
        height: 50px;
    }

    & .content-nav-list{
        font-size: 1.4rem;
        font-weight: bold;

        @media ${device.laptop}{
            display: flex;
            justify-content: space-between;

        }

        @media ${device.tablet}{
            font-size: 1.2rem;
        }

        & > p {
            margin: 1rem;
            display: block;

            @media ${device.tablet}{
                font-size: 1.2rem;
                margin: 0.5rem;
            }
        }
    }
`