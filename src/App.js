import Header from './components/Header'
import Robot from './components/Robot'
import Footer from './components/Footer'
import TensorFlow from './components/TensorFlow'
import './App.css'

function App() {
  return (
    <div className='flex flex-col font-mono'>
      <Header />
      <hr className='my-10 border-gray-200 dark:border-gray-700' />
      <Robot />
      <hr className='my-10 border-gray-200 dark:border-gray-700' />
      <TensorFlow />
      <hr className='my-10 border-gray-200 dark:border-gray-700' />
      <Footer />
    </div>
  )
}

export default App
