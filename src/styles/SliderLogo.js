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
    /* border: 1px solid red;//................ */
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
        color: var(--color7)!important;
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
        width:200px;
        height:200px;
        border-radius: 50%;
        text-align:center;
        text-justify:distribute;
        padding-top: 90px;
        font-size: 25px;
        background-color: var(--color3);
        color: var(--color4);
        opacity: .5;
    }
    
`













