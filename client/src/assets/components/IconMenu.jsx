import plane from '../svg/plane.svg'
import book from '../svg/book.svg'
import scooter from '../svg/scooter.svg'
import camera from '../svg/camera.svg'
import controller from '../svg/controller.svg'

export const IconMenu = () => {
  return (
    <>
      <div className='row pt-4 '>
        <a href='#' className='col text-center'>
          <img src={plane} alt='' className='w-25' />
        </a>

        <a href='#' className='col text-center'>
          <img src={book} alt='' className='w-25' />
        </a>

        <a href='#' className='col text-center'>
          <img src={scooter} alt='' className='w-25' />
        </a>

        <a href='#' className='col text-center'>
          <img src={camera} alt='' className='w-25' />
        </a>

        <a href='#' className='col text-center'>
          <img src={controller} alt='' className='w-25' />
        </a>

      </div>

    </>
  )
}
