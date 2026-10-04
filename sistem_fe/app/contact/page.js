"use client";

import { useState } from "react";
import { api } from "../lib/api";
import "./contact.css";

// Ganti dengan data kontak Anda
const EMAIL = "dbtechservicesindo@gmail.com";
const PHONE_DISPLAY = "+62 851 5882 3239";
const PHONE_DIGITS = "6285158823239"; // tanpa spasi dan tanpa "+", dipakai untuk link tel: dan wa.me
const LOCATION = "Madiun, Jawa Timur, Indonesia";

const services = [
  { value: "custom-software", label: "Custom Software" },
  { value: "web-development", label: "Web Development" },
  { value: "erp-crm", label: "ERP & CRM" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Kirim nama layanan (label) agar mudah dibaca di dashboard
      const service =
        services.find((s) => s.value === form.service)?.label || "";

      await api.save("/api/contact", null, { ...form, service });

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="contact">
      <section className="contact-hero">
        <h1>
          Mari <span className="contact-gradient">Berbicara</span>
        </h1>
        <p>Punya project di pikiran? Konsultasi gratis dengan tim kami.</p>
      </section>

      <section className="contact-layout">
        {/* Formulir */}
        <div className="contact-formcard">
          {status === "sent" ? (
            <div className="contact-success" role="status">
              <h2>Pesan Anda sudah terkirim.</h2>
              <p>
                Terima kasih sudah menghubungi kami. Tim kami akan segera
                menanggapi kebutuhan project Anda.
              </p>
              <button
                type="button"
                className="contact-button contact-button--ghost"
                onClick={() => setStatus("idle")}
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-grid">
                <div className="contact-field">
                  <label htmlFor="name">Nama Lengkap *</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">No. WhatsApp</label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="service">Layanan yang Diminati</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Pilih layanan</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field contact-field--full">
                  <label htmlFor="message">Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="contact-error" role="alert">
                  Pesan belum terkirim. Coba lagi, atau hubungi kami lewat
                  WhatsApp.
                </p>
              )}

              <button
                type="submit"
                className="contact-button"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          )}
        </div>

        {/* Info kontak */}
        <aside className="contact-side">
          <div className="contact-info">
            <h2>
              <Icon>
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="m3.5 7 8.5 6 8.5-6" />
              </Icon>
              Email
            </h2>
            <p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>

          <div className="contact-info">
            <h2>
              <Icon>
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
              </Icon>
              Telepon
            </h2>
            <p>
              <a href={`tel:+${PHONE_DIGITS}`}>{PHONE_DISPLAY}</a>
            </p>
          </div>

          <div className="contact-info">
            <h2>
              <Icon>
                <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </Icon>
              Lokasi
            </h2>
            <p>{LOCATION}</p>
          </div>

          <a
            className="contact-button contact-button--wide"
            href={`https://wa.me/${PHONE_DIGITS}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z" />
            </Icon>
            Chat WhatsApp
          </a>
        </aside>
      </section>
    </main>
  );
}