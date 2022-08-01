import styled from 'styled-components'
export const AdminProductItemWrapper = styled.div`
    height: auto;

    & .admin-product-item{
        display: flex;
        width: 100%;
        align-items: center;

        & div{
            padding: 1rem;
            margin-right: 1rem;
        }

        &__image{
            width: 100px;
            height: 100px;
            display: block;

            & img{
                width: 100%;
                height: 100%;
            }
        }

        &__id{

        }

        &__nav{
            display: flex;
            & > .btn{
                padding: 1rem 1.5rem;
                margin-right: 1rem;
            }

            & .btn-edit{
                background-color: #007bff;

                &:hover{
                    
                }
            }
            & .btn-remove{
                background-color: #dc3545;

                &:hover{
                    color: white;
                    background-color: #c82333;
                }
            }
        }
    }
`