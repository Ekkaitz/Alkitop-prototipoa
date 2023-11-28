export const Card = ({ image, product, prezioa }) => {
  return (
    <div className=' p-0 rounded-3 m-4 bg-light produktua'>
      <div className=''>
        <img src={image} className=' w-100 p-3 ' />
      </div>

      <div>
        <p>{product}</p>
        <p>{prezioa}</p>
      </div>
    </div>
  )
}
