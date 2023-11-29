import logo from '../img/logotxuria.png'

export const Header = () => {
  return (

    <header className='row w-100 bg-success align-items-center p-0 m-0 align-content-center '>
      <img src={logo} className=' col-lg-1 col-sm-2 navbar-brand' />
      <nav className='navbar col-lg-9 col-sm-8 '>
        <div className='container-fluid'>
          <form className='d-flex w-100 ' role='search'>
            <input className='form-control me-2' type='search' placeholder='sartu produktuaren izena' aria-label='Search' />
            <button className='btn btn-outline-light' type='submit'>Bilatu</button>
          </form>
        </div>
      </nav>
      <button className='col-lg-2 h-25 btn btn-outline-light px-5 text-center '>Login</button>
    </header>
  )
}
