import React, { useState } from "react"
import styles from "./RegistrationForm.module.scss"
import { useNavigate } from "react-router-dom"

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [bio, setBio] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log({ name, country, bio })
    navigate("/table")
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Регистрация</h1>
        <div>
          <label htmlFor="name" className={styles.label}></label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Имя"
          />
        </div>

        <div>
          <label htmlFor="country" className={styles.label}></label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={styles.select}
          >
            <option value="Россия" className={styles.option}>
              Россия
            </option>
            <option value="США" className={styles.option}>
              США
            </option>
            <option value="Германия" className={styles.option}>
              Германия
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="bio" className={styles.label}></label>
          <input
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className={styles.textarea}
            placeholder="Коротко о себе"
          />
        </div>

        <button type="submit" className={styles.button}>
          Continue
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
