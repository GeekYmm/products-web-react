import Header from './components/Header'
import Robot from './components/Robot'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='flex flex-col font-mono'>
      <Header />
      <Robot />
      <Footer />
    </div>
  )
}

export default App
