import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  )
}

export default App
