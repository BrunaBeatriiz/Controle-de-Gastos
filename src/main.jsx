import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Despesas from './pages/Despesas'
import MostrarListaFiltros from './pages/paginaListaFiltros'


  const App = () => {
    const [despesas, setDespesas] = useState([]);
  
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Dashboard/>
        },{
          path:"/Despesas",
          element:<Despesas despesas={despesas} setDespesas={setDespesas}/>,
        },{
          path:"/paginaListaFiltros",
          element:<MostrarListaFiltros despesas={despesas}/>,
        },
      ]);

      return <RouterProvider router={router} />;

}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
