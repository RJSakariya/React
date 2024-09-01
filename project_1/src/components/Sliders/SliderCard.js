import React from 'react'

export default function SliderCard(props) {
  function rating(rate) {
    let stars = [];
    for (var i = 1; i <= rate; i++) {
      stars = [...stars, 1]
    }
    if (rate - Math.floor(rate) >= 0.5) {
      stars = [...stars, 0.5]
    }
    for (var j = stars.length; j < 5; j++) {
      stars = [...stars, 0]
    }
    return stars;
  }
  return (
    <div className='d-flex SliderCard'>
      {props.detail.map((el, ind) => {
        return (
          <div key={ind} className='col-12 col-sm-6 col-lg-3 p-2 mainCard'>
            <div className='Card'>
              {el.label === "new" ? <div className='label label_new'>{el.label}</div> : <div className='label'>{el.label}</div>}
              <div className='Card-img'>
                <img src={el.url}  alt=''/>
                <img src={el.url2} alt=''/>
              </div>
              <p className='Card_title'>
                {el.title}
              </p>
              <div className='description d-flex justify-content-between'>

                {el.cancel_price === "" ? <h6 className='main_price'>{el.main_price}</h6>:<div className='d-flex'><del className='cancel_price'>{el.cancel_price}</del><h6 className='main_price'>{el.main_price}</h6></div>}
                <div className='reting'>
                  {rating(el.rating).map((el,ind) => {
                    return el === 1 ? <i className="fa-solid fa-star"></i> : (el === 0 ? <i className="fa-regular fa-star"></i> : <i className="fa-solid fa-star-half-stroke"></i>);
                  })}
                </div>
              </div>
              <div className='add_to_cart_and_liked'>
                {el.AddedIntoCart === "no" ? <i className="fa-solid fa-cart-plus"></i> : <i className="fa-solid fa-cart-flatbed"></i>}
                {el.liked === "no" ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>}
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}
