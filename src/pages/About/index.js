import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";

export default function About() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(true);

  const [leads, setLeads] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    postData(formData);
  }

  async function getData() {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzaTFRHzqaK6B1ZXUb3K_wKxMQeJxCZbNrRkayjYrzByzzn0aONanGhMobr_adqIj1v4A/exec",
      {
        redirect: "follow",
      }
    );
    const data = await res.json();
    setLeads(data.reverse());
  }

  async function postData(formData) {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzaTFRHzqaK6B1ZXUb3K_wKxMQeJxCZbNrRkayjYrzByzzn0aONanGhMobr_adqIj1v4A/exec",
      {
        method: "POST",
        redirect: "follow",

        body: formData,
      }
    );
    const response = await res.json();
    if (response) {
      setSuccess(true);
      formRef.current.reset();
      getData();
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
          alignContent: "center",
          margin: "auto",
        }}
      >
        <input name="name" placeholder="Nombre" type="text" />
        <input name="surname" placeholder="Apellidos" type="text" />
        <input type="email" name="email" placeholder="Email" />
        <input
          type="submit"
          disabled={loading}
          value={loading ? "..." : "Enviar"}
        />
        {success && <p>Enviado con éxito!</p>}
      </form>
      <h3>Leads</h3>
      {leads.map((item) => {
        return (
          <div
            key={item.email + item.name + item.surname + Math.random()}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "300px",
              gap: "10px",
              alignContent: "center",
              margin: "auto",
            }}
          >
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}
