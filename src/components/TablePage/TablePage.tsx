import React from "react"
import styles from "./TablePage.module.scss"
import { mockData } from "../../data/mockData"

const TablePage: React.FC = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.idColumn}>ID</th>
            <th className={styles.firstNameColumn}>Имя</th>
            <th className={styles.lastNameColumn}>Фамилия</th>
            <th className={styles.genderColumn}>Пол</th>
            <th className={styles.birthdayColumn}>День рождения</th>
            <th className={styles.emailColumn}>Email</th>
            <th className={styles.phoneColumn}>Телефон</th>
            <th className={styles.registrationChannelColumn}>
              Канал регистрации
            </th>
            <th className={styles.participationAllowedColumn}>
              Участие разрешено
            </th>
            <th className={styles.emailConfirmedColumn}>Email подтверждён</th>
            <th className={styles.phoneConfirmedColumn}>Телефон подтверждён</th>
            <th className={styles.checksColumn}>Чеки</th>
            <th className={styles.prizesColumn}>Призы</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row) => (
            <tr key={row.id}>
              <td className={styles.idColumn}>{row.id}</td>
              <td className={styles.firstNameColumn}>{row.firstName}</td>
              <td className={styles.lastNameColumn}>{row.lastName}</td>
              <td className={styles.genderColumn}>{row.gender}</td>
              <td className={styles.birthdayColumn}>{row.birthday}</td>
              <td className={styles.emailColumn}>{row.email}</td>
              <td className={styles.phoneColumn}>{row.phone}</td>
              <td className={styles.registrationChannelColumn}>
                {row.registrationChannel}
              </td>
              <td className={styles.participationAllowedColumn}>
                <span
                  className={
                    row.participationAllowed === "Да"
                      ? styles.yesCell
                      : styles.noCell
                  }
                >
                  {row.participationAllowed}
                </span>
              </td>
              <td className={styles.emailConfirmedColumn}>
                <span
                  className={
                    row.emailConfirmed === "Да" ? styles.yesCell : styles.noCell
                  }
                >
                  {row.emailConfirmed}
                </span>
              </td>
              <td className={styles.phoneConfirmedColumn}>
                <span
                  className={
                    row.phoneConfirmed === "Да" ? styles.yesCell : styles.noCell
                  }
                >
                  {row.phoneConfirmed}
                </span>
              </td>
              <td className={styles.checksColumn}>{row.checks}</td>
              <td className={styles.prizesColumn}>{row.prizes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePage
