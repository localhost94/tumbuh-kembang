import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SchoolApp from './SchoolApp'
import './index.css'

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <StrictMode>
      <SchoolApp />
    </StrictMode>,
  )
}
