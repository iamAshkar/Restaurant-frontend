
import './App.css'
import AllRest from './Components/AllRest'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import ViewRest from './Components/ViewRest'
function App() {

  return (
    <>

      <Header />
      <Routes>
        {/* localhost:5173 -all rest */}
        <Route path='/' element={<AllRest />}/>
          {/* localhost:5173/view/12 - viewRest */}
          <Route path='/view/:id' element={<ViewRest />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
