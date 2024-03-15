import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";


export default function About() {

  const formRef = useRef()
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(true)

  const [leads, setLeads] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    fetch('https://script.google.com/macros/s/AKfycbzaTFRHzqaK6B1ZXUb3K_wKxMQeJxCZbNrRkayjYrzByzzn0aONanGhMobr_adqIj1v4A/exec', {
      method: 'POST',
      body: JSON.stringify(formProps)
    })
      .then(res => res.json())
      .then(res => setSuccess(true))
      .finally(() => {
        setLoading(false)
        setRefresh(true)
      })
  }

  useEffect(() => {

    if (refresh) {
      fetch('https://script.google.com/macros/s/AKfycbzaTFRHzqaK6B1ZXUb3K_wKxMQeJxCZbNrRkayjYrzByzzn0aONanGhMobr_adqIj1v4A/exec')
        .then(res => res.json())
        .then(res => setLeads(res))
        .finally(() => setRefresh(false))
    }

  }, [refresh])

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" />
        <input name="surname" placeholder="Apellidos" />
        <input type="email" name="email" placeholder="Email" />
        <input type="submit" disabled={loading}>Enviar</input>
        {success && (
          <p>Enviado con éxito!</p>
        )}
      </form>
      <h3>Leads</h3>
      {leads.map(item => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <p>{item.email}</p>
          </div>
        )
      })}
    </>

  );
}
