import React, { Component } from 'react'
import Slider from 'react-slick'
import { Card } from './card'
import { img } from '../img/alkitop_logo.png'

export default class SimpleSlider extends Component {
  render () {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div />
          <div>
            <Card image={img} />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}
