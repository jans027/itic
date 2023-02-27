import { Link } from "react-router-dom";
import styled from "styled-components";



export const ContFooter = styled.div`
    /* position:fixed; */
    height: 43.7rem!important;
    bottom: 0;
    width:100%;
    color: var(--color5);
    background-color: var(--color4);
    a{
        color: var(--color5);
    }
`
export const BlockNav = styled.div`
    /* border: 1px solid red;//................ */
    width: 88%;
    height: 23rem;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    h3{
        /* border: 1px solid white;//................ */
        font-size: 1.7rem;
        padding: 0 0 23px 0;
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
    /* border: 1px solid red;//................. */
    width: 90%;
    margin: 0 auto;
    height: 10rem;
    min-height: 3.1rem;
    padding-bottom: 2.3em;
    h3{
        font-size: 1.7rem;
        padding-bottom: 1.3rem;
    }
    svg{
        width: 2.5vw;
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
export const ConEmprFooter = styled.div`
        width: 22%;
    ul{
        li{
            list-style: none;
            padding: .5em 0;
            transition: 3ms;
            border-bottom: var(--color1) ;
            a{
                text-decoration:none;
                font-size: 1.1rem;
                font-weight: 500;
                line-height: 1.8rem;
                &:hover{
                    color: var(--color1);
                }
                &:active{
                    border-bottom: 1px solid var(--color1);
                    
                }
            }
        }
    } 
`
export const ConServFooter = styled.div`
        width: 23%;
    ul{
        li{
            list-style: none;
            padding: .5em 0;
            transition: 3ms;
            border-bottom: var(--color1) ;
            a{
                text-decoration:none;
                font-size: 1.1rem;
                font-weight: 500;
                line-height: 1.8rem;
                &:hover{
                    color: var(--color1);
                }
                &:active{
                    border-bottom: 1px solid var(--color1);
                    
                }
            }
        }
    } 
`
export const LogoFooter = styled.div`
    /* border: 1px solid red;//............. */
    width:90%;
    padding: 3.5rem 0;
    margin: 0 auto;
    div{
        width:clamp(150px, 15%, 250px);
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
        /* border: 1px solid white;//............ */
        width: 26.5%;
        p{
            font-size: 1.7rem;
            font-weight: 600;
            padding: 1rem 0;
        }
        a{
            text-decoration:none;
            font-size: 1.1rem;
            &:hover{
                color: var(--color1);
            }
        }
        span{
            font-size: 1.1rem;
            padding: .1rem 0;
        }
`
export const ContUlPoliticas = styled.ul`
    /* border: 1px solid green;//................... */
    width: 28%;
    margin-bottom: 2em;
    li{
        list-style: none;
        padding: .5em 0;
        transition: 3ms;
        border-bottom: var(--color1) ;
        padding: .6rem 0;
        a{
            text-decoration:none;
            font-size:1.1rem;
            font-weight: 400;
            &:hover{
                color: var(--color1);
            }
            &:active{
                border-bottom: 1px solid var(--color1);
                
            }
        }
    }
`
export const LinkConsulta1 = styled.span`
    a{
        font-size: 1.7rem;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        padding-bottom: 1.1rem;
    }

`
export const BtnFooter = styled(Link)`
    text-decoration: none;
    div{
        width: 90%;
        height: 2.7vw;
        background-color:var(--color1);
        color: var(--color4)!important;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        border-radius: 1.5rem;
        &:active{
        background-color:var(--color8);
        }
    }
`
