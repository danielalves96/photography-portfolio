/* eslint-disable react/jsx-props-no-spreading */
import emailjs from "emailjs-com";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import LoadingBar from "react-top-loading-bar";

import { Button, Container, Title } from "./styles";

export function ContactForm() {
    const [progress, setProgress] = useState(0);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const toastifySuccess = () => {
        toast.success(`Email enviado!`, {
            position: `bottom-right`,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: `submit-feedback success`,
            toastId: `notifyToast`,
        });
    };

    const toastifyError = () => {
        toast.error(`Ocorreu um erro, tente novamente`, {
            position: `bottom-right`,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: `submit-feedback success`,
            toastId: `notifyToast`,
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data: any) => {
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message,
            };

            setProgress(progress + 35);

            await emailjs.send(
                process.env.REACT_APP_EMAIL_SERVICE_ID as string,
                process.env.REACT_APP_TEMPLATE_EMAIL_ID as string,
                templateParams,
                process.env.REACT_APP_USER_SERVICE_EMAIL_ID as string
            );

            reset();
            setProgress(100);
            toastifySuccess();
        } catch (e) {
            toastifyError();
        }
    };

    return (
        <>
            <LoadingBar
                color="#00aa71"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="ContactForm animate__delay-1s animate__animated animate__fadeIn animate__slow">
                <div className="container is-max-desktop">
                    <Container>
                        <div className="contactForm">
                            <Title>
                                <span>CONTATO</span>
                            </Title>

                            <form
                                id="contact-form"
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                            >
                                <div className="columns">
                                    <div className="column">
                                        <input
                                            type="text"
                                            {...register(`name`, {
                                                required: {
                                                    value: true,
                                                    message: `Por favor, insira seu nome`,
                                                },
                                                maxLength: {
                                                    value: 30,
                                                    message: `Por favor, use 30 caracteres ou menos`,
                                                },
                                            })}
                                            className="input"
                                            placeholder="Nome"
                                        />
                                        {errors.name && (
                                            <span className="help is-danger">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="column">
                                        <input
                                            type="email"
                                            {...register(`email`, {
                                                required: true,
                                                pattern:
                                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            })}
                                            className="input "
                                            placeholder="Endereço de e-mail"
                                        />
                                        {errors.email && (
                                            <span className="help is-danger">
                                                Por favor insira um endereço de
                                                e-mail válido
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <input
                                            type="text"
                                            {...register(`subject`, {
                                                required: {
                                                    value: true,
                                                    message: `Por favor insira um assunto`,
                                                },
                                                maxLength: {
                                                    value: 75,
                                                    message: `O assunto não pode exceder 75 caracteres`,
                                                },
                                            })}
                                            className="input "
                                            placeholder="Assunto"
                                        />
                                        {errors.subject && (
                                            <span className="help is-danger">
                                                {errors.subject.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <textarea
                                            rows={3}
                                            {...register(`message`, {
                                                required: true,
                                            })}
                                            className="textarea"
                                            placeholder="Mensagem"
                                        />
                                        {errors.message && (
                                            <span className="help is-danger">
                                                Por favor, digite uma mensagem
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <Button>
                                    <button className="button" type="submit">
                                        Enviar
                                    </button>
                                </Button>
                            </form>
                        </div>
                        <ToastContainer />
                    </Container>
                </div>
            </div>
        </>
    );
}
