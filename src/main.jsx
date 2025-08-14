import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Despesas from './pages/Despesas'
import MostrarListaFiltros from './pages/paginaListaFiltros'
import Saldo from './pages/paginaSaldo'
import TodasDespesas from './pages/todasDespesas'


  const App = () => {
    const [despesas, setDespesas] = useState([]);

    const [saldo, setSaldo] = useState("0,00");

    const emClickExcluirDespesa = (despesaId) => {

      const excluirDespesa = despesas.filter((despesa) => despesaId !== despesa.id);

      setDespesas(excluirDespesa);

    }
  
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Dashboard saldo={saldo} setSaldo={setSaldo} despesas={despesas}/>
        },{
          path:"/Despesas",
          element:<Despesas despesas={despesas} setDespesas={setDespesas}/>,
        },{
          path:"/paginaListaFiltros",
          element:<MostrarListaFiltros despesas={despesas}
          emClickExcluirDespesa={emClickExcluirDespesa}/>,
        },
        {
          path:"/Saldo",
          element: <Saldo  despesas={despesas} saldo={saldo} setSaldo={setSaldo}/>,
        },
        {
          path:"/todasDespesas",
          element:<TodasDespesas despesas={despesas}  emClickExcluirDespesa={emClickExcluirDespesa}/>,
        },
      ]);

      return <RouterProvider router={router} />;

}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
