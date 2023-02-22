import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { data } from '../data/data';
import { Button, Modal } from 'antd';
import { BtnModal } from '../styles/ModalForm';




const SendMail = (props) => {

    //import data
    const [datos] = data
    const { consulta: { input } } = datos

    // ...dinamic class name
    const [classAlert, setClassAlert] = useState('form_input')
    const [classAlert1, setClassAlert1] = useState('form_input')
    const [classAlert2, setClassAlert2] = useState('form_input')


    // ...dinamic placeholder
    const [placeholderText, setPlaceholderText] = useState(true)
    // console.log(placeholderText)


    // ...avoid copy & paste action
    const handleCutCopyPaste = (event) => {
        event.preventDefault();
    };


    //...........................props
    const handleClick = () => {
         // Llama a la función cerrarModal para cerrar la ventana modal en el componente padre
        
    };
    const handleClick2 = () => {
        props.cerrarModal()// Llama a la función cerrarModal para cerrar la ventana modal en el componente padre
    
    };



    const formRef = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const dataForm = Object.fromEntries(formData.entries());

        // ...regex input email
        const emailRegex = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailRegex.test(dataForm.email);
        const isValidEmail2 = emailRegex.test(dataForm.email2);

        // ...regex input numb
        const numbRegex = /^[0-9]+$/;
        const isValidnumb = numbRegex.test(dataForm.certificate)

        if (
            dataForm.seleccion === undefined
        ) {
            console.log(dataForm.seleccion)

        } else if (
            dataForm.email.trim() === "" ||
            dataForm.email === null ||
            dataForm.email.length === 0 ||
            isValidEmail !== true
        ) {
            setClassAlert1('class_1');

        } else if (
            dataForm.email2.trim() === "" ||
            dataForm.email2 === null ||
            dataForm.email2.length === 0 ||
            isValidEmail2 !== true ||
            dataForm.email2 !== dataForm.email
        ) {
            setClassAlert1('class_1');

        } else if (
            dataForm.certificate.trim() === "" ||
            dataForm.certificate === null ||
            dataForm.certificate.length === 0 ||
            isValidnumb !== true
        ) {
            setClassAlert2('class_1');

        } else {
            setClassAlert('form_input');
        
            // console.log(event.target.value)
            emailjs.sendForm(
                'service_niys5va',
                'template_fqd3fne',
                formRef.current,
                'WJtijrAfr6hLGRh6P'
            )
                .then((result) => {
                    console.log(result.text);
                    alert('Mensaje enviado con exito...');
                    handleClick(props.cerrarModal())

                },
                    (error) => {
                        alert('Intenta mas tarde...');
                        handleClick(props.cerrarModal())
                    });
        }

    };


    return (
        <div className='cont_form_mail'>
            <form ref={formRef} onSubmit={sendEmail}>


                <label className='form_label'>Categoría del certificado <span>*</span></label>
                <select name="seleccion" required>
                    <option value="" hidden>Categoría de servicio</option>
                    <option value="Sistemas de Gestión">Sistemas de Gestión</option>
                    <option value="Certificación de Producto">Certificación de Producto</option>
                    <option value="Servicios Industriales">Servicios Industriales</option>
                    <option value="Certificación de Personas">Certificación de Personas</option>
                </select>


                <label className='form_label'>E-mail<span>*</span></label>
                <input
                    onCut={handleCutCopyPaste}
                    onCopy={handleCutCopyPaste}
                    onPaste={handleCutCopyPaste}
                    autocomplete="off"
                    // onChange={handleChange}
                    className={classAlert1}
                    type="email"
                    placeholder={placeholderText === true ? 'usuario@correo.com' : 'Datos incorrectos'}
                    name="email"
                    id="email"
                    required
                />

                <label className='form_label'>Verifica tu E-mail<span>*</span></label>
                <input
                    onCut={handleCutCopyPaste}
                    onCopy={handleCutCopyPaste}
                    onPaste={handleCutCopyPaste}
                    autocomplete="off"
                    // onChange={handleChange}
                    className={classAlert1}
                    type="email"
                    placeholder={placeholderText === true ? 'usuario@correo.com' : 'Email Incorrecto'}
                    name="email2"
                    id="email2"
                    required
                />


                <label className='form_label'>Digita tu número de certificado<span>*</span></label>
                <input
                    // onChange={handleChange}
                    className={classAlert2}
                    type="tel"
                    placeholder={placeholderText === true ? 'Ingresa el numero del certificado' : 'Datos incorrectos'}
                    name="certificate"
                    id="certificate"
                    required
                />
                <BtnModal
                    type="submit"
                    value="Enviar"
                    onClick={handleClick}
                >Enviar</BtnModal>
            </form>
            

        </div>
    );
}
export default SendMail;