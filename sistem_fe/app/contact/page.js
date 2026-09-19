"use client";

import { useState } from "react";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    alert("Pesan berhasil dikirim.");
  };

  return (
    <main>

      <section className="page-hero">

        <span>CONTACT</span>

        <h1>
          Let's build something
          <br />
          great together.
        </h1>

        <p>
          Ceritakan kebutuhan bisnis Anda kepada kami.
        </p>

      </section>

      <section className="section">

        <div className="contact-container">

          <div>

            <h2>
              Start a conversation
            </h2>

            <p>
              Hubungi kami untuk mendiskusikan website,
              software, ERP, CRM atau kebutuhan digital lainnya.
            </p>

            <p>
              hello@yourcompany.id
            </p>

            <p>
              +62 812-3456-7890
            </p>

            <p>
              Madiun, Jawa Timur
            </p>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              name="name"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Nomor WhatsApp"
              value={form.phone}
              onChange={handleChange}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
            >

              <option value="">
                Pilih Layanan
              </option>

              <option value="custom-software">
                Custom Software
              </option>

              <option value="web-development">
                Web Development
              </option>

              <option value="erp-crm">
                ERP & CRM
              </option>

              <option value="ai-automation">
                AI & Automation
              </option>

              <option value="consulting">
                IT Consulting
              </option>

            </select>

            <textarea
              name="message"
              placeholder="Ceritakan kebutuhan project Anda..."
              value={form.message}
              onChange={handleChange}
              rows="6"
            />

            <button
              type="submit"
              className="button-primary"
            >
              Send Request →
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}