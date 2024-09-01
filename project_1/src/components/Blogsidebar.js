import React from 'react'

export default function Blogsidebar(props) {
  return (
    <div>
      <h6 className='my-4'>
        {props.title}
      </h6>
      {
            props.point.map((el,ind)=>{
                return (
                    <li key={ind}>
                        {el}
                    </li>
                )
            })
        }
    </div>
  )
}
