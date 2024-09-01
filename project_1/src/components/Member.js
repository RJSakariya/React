import React from 'react'

export default function Member(props) {
    return (
        <div className='col-12 col-md-6 col-lg-3 p-3'>
            <div className='member-info'>
                <img src={props.url} alt='' />
                <div className='overlay'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
            <h6 className='text-center mt-3'>{props.name}</h6>
            <p className='text-center'>
                {props.detail}
            </p>
        </div>
    )
}
