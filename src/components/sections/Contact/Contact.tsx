import React, { useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import Section from "../Section/Section";
import { ToastContainer, toast, ToastContentProps, Zoom } from "react-toastify";

function SuccessToast({ isPaused }: ToastContentProps) {
  return (
    <div className="select-none">
      <span>{"Formulario enviado."}</span>
    </div>
  );
}

function ErrorToast({ isPaused }: ToastContentProps) {
  return (
    <div className="select-none">
      <span>{"Ups, algo salió mal."}</span>
    </div>
  );
}

function getOS() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Win")) return "Windows";
  if (userAgent.includes("Mac")) return "MacOS";
  if (userAgent.includes("Linux")) return "Linux";
  if (userAgent.includes("Android")) return "Android";
  if (userAgent.includes("like Mac")) return "iOS";
  return "Desconocido";
}

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const submitButton = useRef<HTMLButtonElement>(null);
  let ip = "Desconocido";

  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      ip = "https://www.geolocation.com/es/index?ip=" + data.ip;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (submitButton.current) {
      submitButton.current.disabled = true;
    }

    const data = {
      _template: "box",
      _subject: "martinofranco.com | " + name + " te ha enviado un mensaje",
      Nombre: name,
      Mensaje: message,
      Correo: email,
      Sistema_Operativo: getOS(),
      IP: ip,
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/b298594f92fafa5c26babc6fa18ca8ff",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);

      setName("");
      setMessage("");
      setEmail("");
      successToast();
      if (submitButton.current) {
        submitButton.current.disabled = false;
      }
    } catch (error) {
      console.error("Error:", error);
      errorToast();
      if (submitButton.current) {
        submitButton.current.disabled = false;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const successToast = () =>
    toast(SuccessToast, {
      autoClose: 2000,
      className:
        "bg-green-300 overflow-visible scale-100 rounded-2xl flex items-center text-gray-900 !font-sans",
    });

  const errorToast = () =>
    toast(ErrorToast, {
      autoClose: 2000,
      className:
        "bg-red-300 overflow-visible scale-100 rounded-2xl flex items-center text-gray-900 !font-sans",
    });

  return (
    <Section
      id="contact"
      className="flex flex-col w-full items-center justify-center"
    >
      <ToastContainer
        position="top-center"
        transition={Zoom}
        hideProgressBar
        closeButton={false}
      />
      <h3 className="text-xl font-bold text-center font-header text-gray-400 mb-4">
        Contacto
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-xl"
      >
        <div className="flex flex-col gap-2">
          <input
            className="gap-2 p-4 focus:outline-none px-4 bg-transparent text-white border-b-2 border-green-300"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre completo"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="gap-2 p-4 focus:outline-none px-4 bg-transparent text-white border-b-2 border-green-300"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <textarea
            className="gap-2 p-4 focus:outline-none px-4 bg-transparent min-h-24 text-white border-b-2 border-green-300"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensaje"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            ref={submitButton}
            className="relative inline-flex md:w-min w-full items-center justify-center select-none gap-2 p-4 px-6 rounded-full transition-colors duration-300 bg-green-300 text-gray-800 hover:bg-gray-800 hover:text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            type="submit"
          >
            <span className="font-medium whitespace-nowrap">Enviar</span>
            <BiSolidSend
              size={24}
              className={`transition-transform duration-500 ${
                isSubmitting ? "animate-spin" : ""
              }`}
            />
          </button>
        </div>
      </form>
    </Section>
  );
}
