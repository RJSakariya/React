import React from 'react'

export default function Section1() {
    return (
        <div className='container-fluid p-0 section1 mb-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 p-0'>
                    <div className='section1_info'>
                        <h6>nike ari max 2015</h6>
                        <h2>
                            air superiority
                        </h2>
                        <p className='text-truncate'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <button>
                            sopping now
                        </button>
                    </div>
                    <div className='col-12 p-0'>
                        <img src="https://htmldemo.net/james/james/img/banner/banner-2.jpg" alt='' />
                    </div>
                </div>
                <div className='col-12 col-lg-7'>
                    <div className='row'>
                        <div className='search_bar'>
                            <div className="input-group">
                                <input type="text" className="form-control" />
                                <button className="btn" type="button" id="button-addon2">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-5 p-0'>
                            <img src='https://htmldemo.net/james/james/img/banner/banner-1.jpg' alt='' />
                        </div>
                        <div className='col-12 col-lg-7 p-0'>
                            <div className='section1_info'>
                                <h6>nike ari max 2015</h6>
                                <h2>
                                    air superiority
                                </h2>
                                <p className='text-truncate'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <button>
                                    sopping now
                                </button>
                            </div>
                            <div className='col-12 col-lg-7 p-0'>
                                <img src='https://htmldemo.net/james/james/img/banner/banner-3.jpg' alt='' />
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-12 col-lg-7 p-0'>
                                <img src='https://htmldemo.net/james/james/img/banner/banner-4.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
