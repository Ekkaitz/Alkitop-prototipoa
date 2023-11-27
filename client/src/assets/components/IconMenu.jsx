export const IconMenu = ({ image, href }) => {
  return (
    <a href={href} className='col text-center'>
      <img src={image} alt='' className='w-15' />
    </a>

  )
}
