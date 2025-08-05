import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Despesas from './pages/Despesas.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Despesas />
  </StrictMode>,
)
