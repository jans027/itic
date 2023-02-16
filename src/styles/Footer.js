import styled from "styled-components";



export const ContFooter = styled.div`
    position:fixed;
    bottom: 0;
    width:100%;
    color: var(--color5);
    background-color: var(--color4);
    a{
        color: var(--color5);
    }
`
export const BlockNav = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
    ul{
        li{
            list-style: none;
            padding: .5em 0;
            transition: 3ms;
            border-bottom: var(--color1) ;
            a{
                text-decoration:none;
                &:hover{
                    color: var(--color1);
                }
                &:active{
                    border-bottom: 1px solid var(--color1);
                    
                }
            }
        }
    } 
    h3{
            font-size: 1.4vw;
    }
    .contInfoFoo1{
        width: 40%;
    }
    .contInfoFoo2{
        width: 60%;
    }
    .contInfoFoo1, .contInfoFoo2{
        display: flex;
        @media (max-width:998px) {
            width: 100%!important;
            display: flex;
            /* flex-direction: column; */
        }
        @media (max-width:590px) {
                display: flex;
                flex-direction: column;
                width: 100%!important;
                border: 1px solid red;//............
                }
        }
        h3{
        font-size: 16px!important;
        }
        div{
        width: 50%;
        
    }

`
export const Copy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3vw;
    font-weight: 300;
    background-color: var(--color1);
    color: var(--color4);
    @media (max-width:600px) {
        padding: 1.3em;
        p{
            font-size: 13px;
            font-weight: 500;
        }
    }
`
export const Redes = styled.div`
    width: 90%;
    margin: 0 auto;
    min-height: 50px;
    padding-bottom: 2.3em;
    h3{
        font-size: 1.4vw;
    }
    svg{
        width: 2vw;
        height: max-content;
        margin-right:.5em;
        transition: 3ms;
        &:hover{
            color: var(--color1);
        }
        &:active{
            transform: scale(.95);
        }
    }
    @media (max-width:1071px) {
        h3{
            font-size: 17px;
        }
        svg{
            min-width: 30px;
        }
    }
`
export const LogoFooter = styled.div`
    width:90%;
    padding: 1.5em;
    margin: 0 auto;
    div{
        width:clamp(150px, 15%, 215px);
    }
`
export const AddressFooter = styled.span`
        display: flex;
        flex-direction: column;
        @media (max-width:550px) {
            display: none;
        }
        a{
            display: flex;
            align-items: center;
            svg{
                margin-right: 1em;
            }
        }
        span{
            margin-bottom: 1em;
            display: flex;
            align-items: center;
            svg{
                margin-right: 1em;
            }
        }
        .address{
            width: 100%;
            margin-bottom: 0;
        }
        .building{
            padding-left:3em;
        }
`
export const ConsultasFooter = styled.div`
        a{
            padding: .7em 0;
            text-decoration:none;
            &:hover{
                color: var(--color1);
            }
            &:active{
                border-bottom: 1px solid var(--color1);
                
            }
        }
`
export const ContUlPoliticas = styled.ul`
    width: 90%;
`
export const LinkConsulta1 = styled.span`
        h3{
            margin-bottom:1em;
        }
`

