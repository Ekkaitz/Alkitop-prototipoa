import logo from '../img/logotxuria.png'

export const Header = () => {
  return (

    <header className='row w-100'>
      <nav className='navbar bg-success'>
        <div className='container-fluid'>
          <img src={logo} className=' col-1 navbar-brand ' />
          <form className='d-flex' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </nav>
    </header>
  )
}
