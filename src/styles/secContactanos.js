import styled from "styled-components";



export const ContContacto = styled.div`
    width: 100%;
    height: 36vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* border:2px solid red;//.................. */
    @media(max-width:768px){
        margin-top: 15rem;
        height: max-content!important;
        align-items: flex-start;
    }
    
    img{
        /* width: 100%; */
        height: 100%;
        object-fit: cover;
        object-position: center center;
        /* border:2px solid red;//.................. */
        @media(max-width:732px){
            width: auto;
            height: 100%;
            object-position: right center;
        }
        @media(max-width:550px){
            width: 100%;
            height: auto;
            object-position: right center;
        }
    }
    .contEnfoque1{
            width: 90%;
            margin:0 auto;
            height: auto;
            position:absolute;
        @media (max-width:743px) {
            margin-top: 10em;
        }
        @media (max-width:550px) {
            margin-top: 0;
        }
        .contEnfoque2{
            /* border:2px solid red;//.................. */
            .title{
                font-size: 5vw;
                font-weight: 900;
                @media (max-width:600px) {
                    font-size: 30px;
                    
                }
            }
            .subTitle{
                font-size:3vw;
                font-weight: 600;
                margin: 3.5rem 0;
                @media (max-width:600px) {
                    margin: 2rem 0;
                    
                }
            }
            div{
                padding: 1rem 0;
                a{
                    text-decoration: none;
                    padding: 1.5rem 6.5rem;
                    background-color: var(--color4);
                    font-size: 2rem;
                    font-weight: 600;
                    color:var(--color5);
                    border-radius: .7em;
                    @media(max-width:766px){
                        padding: 1.5rem 3vw;
                        font-size: 3.4vw;
                        font-weight: 100;
                    }
                    &:hover{
                    color: var(--color1);
                    }
                    &:active{
                    background-color: var(--color7);
                    }
                }
            }
        }
    }
`




















