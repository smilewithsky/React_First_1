import styled from 'styled-components'
export const VaiidateWrapper = styled.div`


    & .form-group{
        width: 100%;
        margin-bottom: 1rem;
    
        & label{
            line-height: 130%;
            font-size: 1.3rem;
            margin-bottom: 0.3rem;
        }

        & input{
            width: 100%;
            padding: 0.5rem;
            outline: none;
        }

        &__submit{
            display: flex;

            & button{
                flex: 1;
                margin: 1rem;
            }

            & button:first-child{
                flex: 1;
                margin-left: 0rem;
            }
            
            & button:last-child{
                flex: 1;
                margin-right: 0rem;
            }
        }
    }
`