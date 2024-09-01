import React from 'react'
import Card from './SliderCard';
export default function Slider(props) {
  const slidecard = document.querySelectorAll('.SliderCard')
  var counter = 0;

  function goPrev() {
    counter--;
    swapSlide()
  }
  function goNext() {
    counter++;
    swapSlide()
  }
  function swapSlide() {
    slidecard.forEach((el) => {
      el.style.transform = `translateX(-${counter * 100}%)`
    })
  }
  return (
    <div className='container px-lg-0 py-3 slider_heading'>
      <div className='d-flex justify-content-between'>
        <h5>
          <i className="fa-solid fa-bars"></i>
          {props.title}
        </h5>
        <div className='sliderCon'>
          <button onClick={goPrev}><i class="fa-solid fa-angle-left"></i></button>
          <button onClick={goNext}><i class="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
      <div className='Slider'>
        <Card detail={props.cards} />
      </div>
    </div>
  )
}
