
// import DataContextProvider from '../context/DataContext.jsx'
import StarShipsList from '../components/StarShipsList.jsx'
import Header from '../components/Header.jsx'
import Menu from '../components/Menu.jsx'
// import Login from '../components/LogIn.jsx'
import ProtectedRoute from '../components/ProtectedRoute' // Importa el componente de ruta protegida

function App() {
  return (
        <div data-theme="black">
          <Header />
          <Menu />
          <ProtectedRoute>
            <StarShipsList />
          </ProtectedRoute>
        </div>
  )
}

export default App
