import { BrowserRouter, Route, Routes } from "react-router-dom"
import { styled } from "styled-components"
import { backgroundColor } from "./constants/colors"
import HomePage from "./pages/HomePage"
import AddContactPage from "./pages/AddContactPage"
import ContactPage from "./pages/ContactPage"

function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddContactPage />} />
          <Route path="/contact/:id" element={<ContactPage />} />
          <Route path="/contact/:id/edit" element={<AddContactPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

export default App

const PagesContainer = styled.main`
  background-color: ${backgroundColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`