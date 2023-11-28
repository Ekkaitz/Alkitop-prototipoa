import star from "../svg/star.svg"

export const Card = ({ image, product, prezioa }) => {
  return (
    <div className=' p-0 m-4 bg-light produktua border  p-1'>
      <div className=''>
        <img src={image} className=' w-100 ' />
      </div>

      <div>
        <p><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></p>
        <p>{product}</p>
        <p>{prezioa}</p>
      </div>
    </div>
  )
}
