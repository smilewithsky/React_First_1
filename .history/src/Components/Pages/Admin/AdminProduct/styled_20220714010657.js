import styled from 'styled-components'
export const AdminProductWrapper = styled.div`
    width: 100%;
    height: 100%;

    & .admin-product-item{
        display: flex;
        width: 100%;
        align-items: center;
        border: 1px solid #ccc ;
        margin-bottom: 1rem;
        border-radius: 4px;

        & div{
            padding: 1rem;
            margin-right: 1rem;
        }

        &__image{
            min-width: 100px;
        }

        &__type{
            min-width: 100px;
        }

        &__id{

        }

        &__nameProduct{
            min-width: 300px;
        }

        &__nav{
            
        }
    }
`