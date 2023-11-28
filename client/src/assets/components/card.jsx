export const Card = ({ image, product }) => {
  return (
    <div className=' p-0 rounded-3 m-4 bg-light produktua'>
      <img src={image} className=' w-100 p-3 ' />
      <div>
        <h4 className=' text-center '>{product}</h4>
      </div>
    </div>
  )
}
