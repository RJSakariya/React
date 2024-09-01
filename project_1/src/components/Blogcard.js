import React from 'react'

export default function Blogcard(props) {
  return (
    <div className='row px-3'>
      <div className='col-12 col-lg-4 blog_img p-0 mt-3'>
        <img src={props.url} alt=''/>
      </div>
      <div className='col-12 col-lg-8 p-0 mt-3 mb-5 px-0 px-lg-3'>
        <h5>{props.title}</h5>
        <h3>{props.subtitle}</h3>
        <p>{props.description}</p>
        <button className='px-4 py-2'>read more <i class="fa-solid fa-angle-right"></i></button>
      </div>
      <hr className='m-0' style={{ backgroundColor: '#6a6a6a', height: '1px', border: 'none' }} />
    </div>
  )
}
