import styled from 'styled-components'
export const PayWrapper = styled.div`
    height: auto;
    position: absolute;
    z-index: 999999999999999;
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;

    & .pay-heading{
        font-size: 4rem;
    }

    & .list-pay{
        min-height: 350px;
        border-radius: 4px;
        padding: 1rem;
        border: 1px solid #ccc;
        width: 100%;
    }

    & .pay-item{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
        align-items: center;

        &__image{
            width: 10rem;
            height: 10rem;
        }

        &__content{
            &-name{
                margin-bottom: 1rem;
            }

            &-data{
                margin-bottom: 1rem;
            }

            &-price{
                font-size: 1.4rem;
                
            }
        }
    }
`