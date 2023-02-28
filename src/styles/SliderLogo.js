import styled from "styled-components";


export const ContSlideLogo = styled.div`
    /* border: 1px solid red;//.................. */
    /* margin: 50px 0; */
    .slideCont2{
        /* border: 1px solid red;//...............*/
        width: 90%;
        height: auto;
        margin: 0 auto;
    }
    padding:1rem 0;
    /* margin-bottom: 25px; */
    .slick-slider{
        margin: auto;
        /* border: 1px solid red;//...............*/
    }
    .slick-prev, .slick-next{
        /* border: 1px solid red;//...............*/
        width: 40px!important;
        height: 100%;
        font-size: 10px!important;
        display: none!important;
    }
    .slick-prev::before, .slick-next::before{
        color: var(--color2)!important;
        font-size: 50px!important;
        opacity: .5;
    }
    .slick-prev{
        left: -20px;
        z-index: 1;
        
    }
    .slick-next{
        right: -20px;
        z-index: 1;
        
    }
`

export const CardLogo = styled.div`
        /* border: 1px solid red;//.................. */
        text-align: center;
        width:150px!important;
        height:150px!important;
        padding: 1rem;
        margin-left: 1rem;
        border-radius: 50%;
        background-color: var(--color3);
        @media (max-width:800px) {
            width:11vmax!important;
            height:11vmax!important;
            margin-left: 15%;
        }

    p{
        padding-top: 65px;
        font-size: 1.5rem;
        color: var(--color4);
        opacity: .5;
        @media (max-width:800px) {
            padding-top: 6px;
        font-size: .7em;

        }
    }
    
`

export const LinkExperiencia = styled.div`
        /* border: 1px solid red;//.............. */
        width: 100%;
        text-align: center;
        margin: 4rem 0 1em 0;
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










