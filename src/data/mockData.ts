export interface User {
  id: string
  firstName: string
  lastName: string
  gender: string
  birthday: string
  email: string
  phone: string
  registrationChannel: string
  participationAllowed: string
  emailConfirmed: string
  phoneConfirmed: string
  checks: string
  prizes: string
}

const generateId = (): string => {
  return Math.floor(10000000 + Math.random() * 90000000).toString()
}

const generateFirstName = (): string => {
  const names = [
    "Иван",
    "Мария",
    "Алексей",
    "Ольга",
    "Дмитрий",
    "Елена",
    "Сергей",
    "Анна",
  ]
  return names[Math.floor(Math.random() * names.length)]
}

const nameToGenderMap: { [key: string]: string } = {
  Иван: "М",
  Мария: "Ж",
  Алексей: "М",
  Ольга: "Ж",
  Дмитрий: "М",
  Елена: "Ж",
  Сергей: "М",
  Анна: "Ж",
}

const getGenderByName = (firstName: string): string => {
  return nameToGenderMap[firstName] || "М"
}

const generateLastName = (firstName: string): string => {
  const maleLastNames = [
    "Иванов",
    "Петров",
    "Сидоров",
    "Смирнов",
    "Кузнецов",
    "Васильев",
    "Попов",
    "Михайлов",
  ]

  const femaleLastNames = [
    "Иванова",
    "Петрова",
    "Сидорова",
    "Смирнова",
    "Кузнецова",
    "Васильева",
    "Попова",
    "Михайлова",
  ]

  const gender = getGenderByName(firstName)

  if (gender === "М") {
    return maleLastNames[Math.floor(Math.random() * maleLastNames.length)]
  } else {
    return femaleLastNames[Math.floor(Math.random() * femaleLastNames.length)]
  }
}

const generateBirthday = (): string => {
  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")
  const year = Math.floor(Math.random() * (2000 - 1950 + 1)) + 1950
  return `${day}.${month}.${year}`
}

const generateEmail = (firstName: string, lastName: string): string => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
}

const generatePhone = (): string => {
  return `+7${Math.floor(100000000 + Math.random() * 900000000)}`
}

const generateYesNo = (): string => {
  return Math.random() > 0.5 ? "Да" : "Нет"
}

const generateOneZero = (): string => {
  return Math.random() > 0.5 ? "1" : "0"
}

export const mockData: User[] = Array.from({ length: 30 }, () => {
  const firstName = generateFirstName()
  const lastName = generateLastName(firstName)
  const gender = getGenderByName(firstName)
  const birthday = generateBirthday()
  const email = generateEmail(firstName, lastName)
  const phone = generatePhone()

  return {
    id: generateId(),
    firstName,
    lastName,
    gender,
    birthday,
    email,
    phone,
    registrationChannel: "Сайт",
    participationAllowed: generateYesNo(),
    emailConfirmed: generateYesNo(),
    phoneConfirmed: generateYesNo(),
    checks: generateOneZero(),
    prizes: generateOneZero(),
  }
})
