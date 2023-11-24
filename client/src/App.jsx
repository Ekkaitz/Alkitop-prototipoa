import './App.css'
import { Header } from './assets/components/Header'
import { IconMenu } from './assets/components/IconMenu'
import 'bootstrap/dist/css/bootstrap.css'

function App () {
  return (
    <>
      <Header />

      <div className='row pt-4 '>
        <IconMenu />
        <IconMenu />
        <IconMenu />
        <IconMenu />
      </div>

      <div className='row pt-4 '>
        <IconMenu />
        <IconMenu />
        <IconMenu />
        <IconMenu />
      </div>

    </>
  )
}

export default App
