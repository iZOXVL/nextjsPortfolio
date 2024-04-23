import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { fadeIn } from '../../components/variants';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Contact = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const showSwal = () => {
        withReactContent(Swal).fire({
            icon: "success",
            title: "¡Gracias por tu mensaje! 😊",
            text: "Pronto me pondré en contacto contigo.",
            showConfirmButton: false,
            timer: 4000,
          });
    }

    const enviarCorreo = async () => {
        showSwal(); 
        try {
            await fetch('https://server-email-portfolio.vercel.app/api/email', {
                method: 'POST',
                body: JSON.stringify({
                    nombre:nombre,
                    email:email,
                    asunto:asunto,
                    mensaje:mensaje
                }),
                
            });
           

        } catch (error) {
            setNombre('');
            setEmail('');
            setAsunto('');
            setMensaje('');
        }
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAsuntoChange = (event) => {
        setAsunto(event.target.value);
    };

    const handleMensajeChange = (event) => {
        setMensaje(event.target.value);
    };

    return (
        <section className='max-container padding-container py-12'>
            <div className='flex flex-col gap-6'>
                {/* Title */}
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className="text-center uppercase pb-14">
                    <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal">Contactam<span className="text-secondary">e.</span>
                        <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">Enviar<br />correo</span>
                    </h3>
                </motion.div>
                {/* Form  */}
                <motion.form
                    variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex flex-1 flex-col gap-4 w-full mx-auto max-w-[33rem]'
                >
                    <div className='flex gap-2 w-full'>
                        <input type="text" placeholder='Nombre completo' className='regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none w-1/2' value={nombre} onChange={handleNombreChange} />
                        <input type="email" placeholder='Correo electrónico' className='regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none w-1/2' value={email} onChange={handleEmailChange} />
                    </div>
                    <input type="text" placeholder='Asunto' className='regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none' value={asunto} onChange={handleAsuntoChange} />
                    <textarea cols="10" rows="8" placeholder='Mensaje' className='regular-14 placeholder:text-gray-50 rounded-xl px-4 py-1 bg-tertiary outline-none resize-none' value={mensaje} onChange={handleMensajeChange}></textarea>
                    <button type='button' onClick={enviarCorreo} className='p-2 bg-secondary rounded-full flexCenter gap-2 w-[11rem] medium-14'>Enviar correo <span><HiArrowRight /></span></button>
                </motion.form>
            </div>
        </section>
    )
}

export default Contact;
