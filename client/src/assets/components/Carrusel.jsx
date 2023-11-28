import { Card } from './card'
import tent from '../img/high-peak-minipack-2p-azul-tienda-de-campana-canadiense.jpg'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='row row-cols-5'>
          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
