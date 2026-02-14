"use client";

import React, { useState } from "react";

const MAX_FILE_SIZE = 3 * 1024 * 1024;

const formatPhone = (digits) => {
  if (!digits.length) return "";
  const clean = digits.slice(0, 10);
  const p1 = clean.slice(0, 3);
  const p2 = clean.slice(3, 6);
  const p3 = clean.slice(6, 8);
  const p4 = clean.slice(8, 10);

  let result = "+7";
  if (p1) result += ` (${p1})`;
  if (p2) result += ` ${p2}`;
  if (p3) result += ` ${p3}`;
  if (p4) result += ` ${p4}`;
  return result;
};

const normalizeDigits = (value) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";
  if (digits[0] === "7" || digits[0] === "8") {
    if (digits.length === 1) return "";
    return digits.slice(1, 11);
  }
  return digits.slice(0, 10);
};

const Contacts = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [alert, setAlert] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handlePhoneChange = (event) => {
    const nextDigits = normalizeDigits(event.target.value);
    setPhoneDigits(nextDigits);
  };

  const handlePhoneKeyDown = (event) => {
    if (event.key !== "Backspace") return;
    if (!phoneDigits.length) return;
    event.preventDefault();
    setPhoneDigits(phoneDigits.slice(0, -1));
  };

  const handleFileChange = (event) => {
    const nextFile = event.target.files?.[0] ?? null;
    if (nextFile && nextFile.size > MAX_FILE_SIZE) {
      setAlert({ type: "error", text: "Файл больше 3 МБ. Прикрепите другой файл." });
      event.target.value = "";
      setFile(null);
      return;
    }
    setFile(nextFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert(null);

    if (!name.trim() || !company.trim() || !description.trim()) {
      setAlert({ type: "warning", text: "Пожалуйста, заполните все обязательные поля." });
      return;
    }

    if (phoneDigits.length !== 10) {
      setAlert({ type: "warning", text: "Введите корректный номер телефона." });
      return;
    }

    if (file && file.size > MAX_FILE_SIZE) {
      setAlert({ type: "warning", text: "Файл больше 3 МБ. Прикрепите другой файл." });
      return;
    }

    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("company", company.trim());
      formData.append("phone", `+7${phoneDigits}`);
      formData.append("description", description.trim());
      if (file) formData.append("file", file);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setAlert({
        type: "success",
        text: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      });
      setName("");
      setCompany("");
      setPhoneDigits("");
      setDescription("");
      setFile(null);
    } catch {
      setAlert({ type: "error", text: "Не удалось отправить заявку. Попробуйте позже." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contacts">
      <div className="contacts__overlay" />
      <div className="contacts__card">
        <div className="contacts__icon">🏛️</div>
        <h2 className="contacts__title">Оставить заявку</h2>
        <p className="contacts__subtitle">
          Расскажите о задаче — мы свяжемся и предложим решение.
        </p>

        {alert ? (
          <div className={`contacts__alert contacts__alert--${alert.type}`}>
            {alert.text}
          </div>
        ) : null}

        <form className="contacts__form" onSubmit={handleSubmit}>
          <label className="contacts__field" htmlFor="contact-name">
            <span className="contacts__label">Имя*</span>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Введите ваше имя"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <label className="contacts__field" htmlFor="contact-company">
            <span className="contacts__label">Компания*</span>
            <input
              id="contact-company"
              name="company"
              type="text"
              placeholder="Введите название компании/организации"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              required
            />
          </label>

          <label className="contacts__field" htmlFor="contact-phone">
            <span className="contacts__label">Номер*</span>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="Введите ваш номер телефона"
              value={formatPhone(phoneDigits)}
              onChange={handlePhoneChange}
              onKeyDown={handlePhoneKeyDown}
              required
            />
          </label>

          <label className="contacts__field" htmlFor="contact-description">
            <span className="contacts__label">Описание проекта*</span>
            <textarea
              id="contact-description"
              name="description"
              placeholder="Опишите свой проект"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              rows={4}
            />
          </label>

          <label className="contacts__file">
            <input type="file" name="file" onChange={handleFileChange} />
            <span className="filebtn">
              <img src="/pageicons/clip.png" alt="" />
              {file ? file.name : "Прикрепить файл"}
            </span>
          </label>

          <button className="contacts__submit" type="submit" disabled={submitting}>
            {submitting ? "Отправка..." : "Обсудить проект"}
            <img src="/pageicons/arrow_w.png" alt="" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
