import styled from "styled-components";




export const ContSlideLogo = styled.div`
    /* border: 1px solid red;//.................. */
    margin: 50px 0;
    .slideCont2{
        /* border: 1px solid red;//.................. */
        width: 80%;
        height: 200px;
        margin: 0 auto;
    }
    padding:1rem 0;
    margin-bottom: 25px;
    .slick-slider{
        margin: auto;
    }
    .slick-prev, .slick-next{
        width: 40px!important;
        height: 100%;
        font-size: 10px!important;
    }
    .slick-prev::before, .slick-next::before{
        color: var(--color2)!important;
        font-size: 50px!important;
        opacity: .5;
    }
    .slick-prev{
        left: -60px;
        z-index: 1;
        
    }
    .slick-next{
        right: -30px;
        z-index: 1;
        
    }
`

export const CardLogo = styled.div`

    H3{
        /* border: 1px solid red;//.................. */
        width:10rem;
        height:10rem;
        border-radius: 50%;
        text-align:center;
        text-justify:distribute;
        padding-top: 65px;
        font-size: 1.5rem;
        background-color: var(--color3);
        color: var(--color4);
        opacity: .5;
    }
    
`

export const LinkExperiencia = styled.div`
        /* border: 1px solid red;//.............. */
        width: 100%;
        text-align: center;
        margin: 4rem 0 3.5rem 0;
        a{
        padding: .5vw 2vw;
        font-size: 20px;
        text-decoration: none;
        font-weight: 600;
        color: var(--color5);
        background-color:var(--color4);
        border: 2px solid var(--color4);
        border-radius: 1rem;
        &:hover{
            color: var(--color1);
        }
        &:active{
            background-color: var(--color7);
            text-decoration: none;
        }
        }

`










