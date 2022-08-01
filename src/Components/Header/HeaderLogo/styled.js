import styled from 'styled-components'
import { device } from '../../../Contain'
export const HeaderLogoWrapper = styled.div`
    /* width: ${props => props.width}; */
    display: flex;
    align-items: center;

    & a{
        width: 100%;
        height: 100%;
        display: block;
        display: flex;
        align-items: center;
    }

    & img{
        width: ${props => props.width};

        @media ${device.laptop}{
            width: ${props => props.small};
        }
    }
`

export const Slide = styled.div`
    /* position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
`