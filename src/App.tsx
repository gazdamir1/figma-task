import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RegistrationForm from "./components/RegistrationForm/RegistrationForm"
import TablePage from "./components//TablePage/TablePage"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />{" "}
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  )
}

export default App
