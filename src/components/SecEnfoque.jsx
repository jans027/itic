import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import { data } from '../data/data';
import ImgBanner from '../images/banner_2_desktop.png'
import { ContEnfoque } from '../styles/SecEnfoque';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';



const SecEnfoque = () => {

    // get data
    const [datos] = data;
    const { enfoque: { id, title, subTitle, p, url, cards } } = datos;
    const card = Object.values(cards);
    // console.log(card)


    return (
        <>
            <ContEnfoque>
                <img src={ImgBanner} alt={id} />
                {/* <div className='contEnfoque1'>
                    <div className='contEnfoque2'>
                        <p className='title'>{title}</p>
                        <p className='subTitle'>
                            {subTitle.split('\n').map((line, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )
                            })}
                        </p>
                        <div>
                            <Link to={url} >CONOCE MÁS</Link>
                        </div>
                    </div>
                    <div className='contEnfoque3'>
                        <p>{p}</p>
                        <div className='contEnfoque5'>

                            {
                                card.map((item) =>
                                    <div className='cardsEnfoque' key={item.text1}>
                                            {
                                                item.count.length !== 0 ?
                                                    <CountUp duration={0.2} start={0} end={item.count} prefix={item.count >= 240 ? '+' : ''} > 
                                                    
                                                        {
                                                            ({ countUpRef, start }) => (
                                                                <VisibilitySensor onChange={start}>
                                                                    <span ref={countUpRef}></span>
                                                                </VisibilitySensor>
                                                            )
                                                        }
                                                    </CountUp>
                                                    :
                                                    <HeadsetMicIcon />
                                            }

                                        <p className={item.text1 !== 'SOPORTE' ? 'cardText1': 'cardText3'}>{item.text1}</p>
                                        <p className='cardText2'>{item.text2}</p>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div> */}
            </ContEnfoque>
        </>
    )
}

export default SecEnfoque;