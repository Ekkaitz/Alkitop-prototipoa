export const Card = ({ image, product }) => {
  return (
    <div className=' col bg-danger p-0 rounded-3 m-4'>
      <img src={image} className=' w-100 ' />
      <div>
        <h4 className=' text-center '>{product}</h4>
      </div>
    </div>
  )
}
