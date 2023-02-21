/* eslint-disable jsx-a11y/anchor-is-valid */
import  React from 'react';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import SendMail from './SendMail';
import { data } from '../data/data';
import { ContModal } from '../styles/ModalForm';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide transitionDuration="30000" direction="down" ref={ref} {...props} />;
});

const ModalForm = (props) => {

    //import data
    const [datos] = data
    const { consulta :{name, img}} = datos
    // console.log(name)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    



    return (
        <div>
            <a className='enlace' variant="outlined" onClick={handleClickOpen}>
                {name} 
            </a>
            <ContModal
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className='cont_modal'
            >
                <div className='cont_close'>
                    <span onClick={handleClose}> <CloseIcon/> </span>
                </div>
                <div className='cont_information'>
                    <div className='cont_image'>
                        <img
                            className='imgBanner'
                            src={require(`../images/${img}`)}
                            alt={img}
                        />
                    </div>
                    <div className='cont_form'>
                        <SendMail />
                    </div>
                </div>
            </ContModal>
        </div>
    );
}
export default ModalForm