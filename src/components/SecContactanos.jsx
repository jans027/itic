import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../data/data';
import ImgBannerPc from '../images/Banner_contacto.png'
import ImgBannerMobile from '../images/Banner_contacto_mobile.png'
import { ContContacto } from '../styles/secContactanos';


// get data
const [datos] = data;
const { contacto: { id, title, subTitle, btn, url } } = datos;


export default class SecContactanos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            screenWidth: window.innerWidth
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({
            screenWidth: window.innerWidth
        });
    };

    render() {

        // we get the value from the display and change the state
        const { screenWidth } = this.state;


        return (
            <>
                <ContContacto>
                    <div className='contEnfoque1'>
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
                                <Link to={url} >{btn}</Link>
                            </div>
                        </div>
                    </div>
                    <img src={screenWidth < 768 ? ImgBannerMobile : ImgBannerPc} alt={id} />
                </ContContacto>
            </>
        )
    }


    
}

