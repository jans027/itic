import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { data } from '../data/data';
import { CheckboxInput, CheckboxLabel, FormContact, TextArea } from '../styles/Contact';




const ContactForm = (props) => {

    // get data
    const [datos] = data;
    const { contacto: { contactanos: {
        labelName,
        labelDocument,
        labelPhone,
        labelEmail,
        labelSolic,
        placeholder_solic,
        checkbox,
        solicitud } } } = datos;

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
    // const handleClick2 = () => {
    //     props.cerrarModal()// Llama a la función cerrarModal para cerrar la ventana modal en el componente padre

    // };

    //  Estate form Ok
    // const [formOk setFormOk] = useState(false)



    const formRef = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const dataForm = Object.fromEntries(formData.entries());

        // regex input name
        const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
        const isValidName = nameRegex.test(dataForm.name);

        // ...regex input email
        const emailRegex = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailRegex.test(dataForm.email);

        // ...regex input numb
        const numbRegex = /^[0-9]+$/;
        const isValidnumb = numbRegex.test(dataForm.cedula)

        if ( //Nombre completo............
            dataForm.name.trim() === "" ||
            dataForm.name === null ||
            dataForm.name.length === 0 ||
            isValidName !== true
        ) {
            setClassAlert('class_1');

        } else if (// cedula..............
            dataForm.cedula.trim() === "" ||
            dataForm.cedula === null ||
            dataForm.cedula.length === 0 ||
            isValidnumb !== true
        ) {
            setClassAlert2('class_1');

        } else if (// telefono..............
            dataForm.phone.trim() === "" ||
            dataForm.phone === null ||
            dataForm.phone.length === 0 ||
            isValidnumb !== true
        ) {
            setClassAlert2('class_1');

        } else if (// e mail..............
            dataForm.email.trim() === "" ||
            dataForm.email === null ||
            dataForm.email.length === 0 ||
            isValidEmail !== true
        ) {
            setClassAlert1('class_1');

        } else {
            setClassAlert('form_input');

            // console.log(event.target.value)
            // console.log(dataForm)
            emailjs.sendForm(
                'service_n2xb48w',
                'template_2oqdkvi',
                formRef.current,
                'fH06FLKeCzoxBZgFA'
            )
                .then((result) => {
                    console.log(result.text);
                    alert('Mensaje enviado con exito...');
                    // setFormOk(true)

                },
                    (error) => {
                        alert('Intenta mas tarde...');
                        // handleClick(props.cerrarModal())
                    });
        }

    };


    return (
        <FormContact>
            <div className='cont_form_mail'>
                <form ref={formRef} onSubmit={sendEmail}>

                    <div className='firstBlock'>
                        <div>
                            <label className='form_label'>{labelName}<span>*</span></label>
                            <input
                                onCut={handleCutCopyPaste}
                                onCopy={handleCutCopyPaste}
                                onPaste={handleCutCopyPaste}
                                autocomplete="off"
                                // onChange={handleChange}
                                className={classAlert1}
                                type="text"
                                placeholder={placeholderText === true ? 'Nombre' : 'Datos incorrectos'}
                                name="name"
                                id="name"
                                required
                            />
                        </div>

                        <div>
                            <label className='form_label'>{labelDocument}<span>*</span></label>
                            <input
                                // onChange={handleChange}
                                className={classAlert2}
                                type="number"
                                placeholder={placeholderText === true ? '00000000000' : 'Datos incorrectos'}
                                name="cedula"
                                id="cedula"
                                required
                            />
                        </div>
                    </div>


                    <div className='firstBlock'>
                        <div>
                            <label className='form_label'>{labelPhone}<span>*</span></label>
                            <input
                                // onChange={handleChange}
                                className={classAlert2}
                                type="tel"
                                placeholder={placeholderText === true ? '00000000000' : 'Datos incorrectos'}
                                name="phone"
                                id="phone"
                                required
                            />
                        </div>
                        <div>
                            <label className='form_label'>{labelEmail}<span>*</span></label>
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
                        </div>
                    </div>

                    <div className='secondForm'>
                        <label className='form_label'>{labelSolic}<span>*</span></label>
                        <select name="seleccion" required>
                            <option value="" hidden>{placeholder_solic}</option>
                            <option value={solicitud[0]}>{solicitud[0]}</option>
                            <option value={solicitud[1]}>{solicitud[1]}</option>
                            <option value={solicitud[2]}>{solicitud[2]}</option>
                            <option value={solicitud[3]}>{solicitud[3]}</option>
                            <option value={solicitud[4]}>{solicitud[4]}</option>
                        </select>

                        <TextArea
                            rows="7"
                            placeholder='Escribe aqui tu mensaje'
                            required
                            name="comentario">
                        </TextArea>

                        <CheckboxLabel>
                            <CheckboxInput
                                required
                                type="checkbox"
                                id="cbox1"
                                value="first_checkbox" />
                            <span>{checkbox}</span>
                        </CheckboxLabel>

                        <span className='btnFormContact'>
                            <button
                                type="submit"
                                value="Enviar"
                                onClick={handleClick}
                                // {formOk !== true ? '' : onClick={() => formularioRef.current.reset()}}
                            >Enviar
                            </button>
                        </span>
                    </div>

                </form>
            </div>

        </FormContact>
    );
}
export default ContactForm;