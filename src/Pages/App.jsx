import StarShipsList from '../components/StarShipsList.jsx'
import Header from '../components/Header.jsx'
import Menu from '../components/Menu.jsx'
import ProtectedRoute from '../components/ProtectedRoute' 

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
