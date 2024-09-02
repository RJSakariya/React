import React from 'react'

export default function Navbar() {
    return (
        <div className='Navbar row'>
            <div className='container'>
                <div className='d-flex justify-content-end'>
                    <div className='Support'>
                        <p>Call support free: <span>(800) 123 456 789</span></p>
                    </div>
                    <div className='Bar'>
                        <i className="fa-solid fa-bars"></i>
                        <div className='dropdown'>
                            <button>
                                liked
                            </button>
                            <button>
                                cart
                            </button>
                        </div>
                    </div>
                    <div className='Notify'>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span className='badge'>2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
