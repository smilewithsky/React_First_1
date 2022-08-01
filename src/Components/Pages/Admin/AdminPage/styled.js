import styled from 'styled-components'
import { device } from '../../../../Contain'
export const AdminPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    text-align: center;
    display: inline-block;
    max-height: 80vh;
    overflow-y: scroll;

    @media ${device.laptop}{
        max-height: 100vh;
    }


    & .admin-list{
        display: inline-block;
    }

    & .admin-item{
        display: flex;
        width: 100%;
        align-items: center;
        border: 1px solid #ccc ;
        margin-bottom: 1rem;
        border-radius: 4px;
        font-size: 1.4rem;

        @media ${device.laptop}{
            font-size: 1.2rem;
        }

        & div{
            padding: 1rem;
            margin-right: 1rem;
        }

        &__image{
            min-width: 100px;
        }

        &__sale{
            min-width: 70px;
        }

        &__price{
            min-width: 70px;
        }

        &__type{
            min-width: 100px;
        }

        &__id{

        }

        &__nameProduct{
            min-width: 500px;
            word-wrap: break-word;

            @media ${device.laptop}{
                min-width: 300px;
                max-width: 300px;
            }
        }

        &__nav{
            
        }
    }
`
