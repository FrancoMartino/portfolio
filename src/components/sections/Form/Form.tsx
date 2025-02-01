import React, { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import Section from "../Section/Section";

export default function Form() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      _template: "box",
      name: name,
      message: message,
      email: email,
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@martinofranco.com",
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Section id="contact" className="w-full">
      <h3 className="text-xl font-bold text-center font-header text-gray-400 mb-4">
        Contacto
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nombre completo</label>
          <input
            className="gap-2 p-2 focus:outline-none px-4 rounded-3xl bg-gray-700 text-white"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre completo"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Correo electrónico</label>
          <input
            className="gap-2 p-2 focus:outline-none px-4 rounded-3xl bg-gray-700 text-white"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="gap-2 p-2 focus:outline-none px-4 rounded-3xl bg-gray-700 text-white"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje aquí"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            className="relative inline-flex w-min items-center select-none gap-2 p-4 px-6 rounded-full transition-colors duration-300 bg-green-300 text-gray-800 hover:bg-gray-800 hover:text-white"
            type="submit"
          >
            <span className="font-medium whitespace-nowrap">Enviar</span>
            <BiSolidSend size={24} />
          </button>
        </div>
      </form>
    </Section>
  );
}
