import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='container-fluid p-0 Footer'>
                <div className='container'>
                    <div className='row py-5 px-3'>
                        <div className='col-12 col-md-6 col-lg-3 p-3'>
                            <img src='https://htmldemo.net/james/james/img/logo-white.png' alt='' />
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                            </p>
                            <ul>
                                <li>
                                    <p><i class="fa fa-fax"></i>(800) 123 456 789</p>
                                </li>
                                <li>
                                    <p><i class="fa fa-phone"></i>(800) 123 456 789</p>
                                </li>
                                <li>
                                    <p><i class="fa fa-envelope"></i>admin@bootexperts.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 p-3 mt-md-0 mt-4'>
                            <h6>Latest tweets</h6>
                            <div className='tweet'>
                                <img src='https://htmldemo.net/james/james/img/twitter/twitter-1.png' alt='' />
                                <div>
                                    <p>
                                        Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it:
                                    </p>
                                    <a href='https://t.co/iu0OYBwti8'>https://t.co/iu0OYBwti8</a>
                                    <font>
                                        16h
                                    </font>
                                </div>
                            </div>
                            <div className='tweet'>
                                <img src='https://htmldemo.net/james/james/img/twitter/twitter-1.png' alt='' />
                                <div>
                                    <p>
                                        Raboda Fashion #Magento #Theme comes up with pure white and grey, which great show your products. Check it:
                                    </p>
                                    <a href='https://t.co/iu0OYBwti8'>https://t.co/iu0OYBwti8</a>
                                    <font>
                                        16h
                                    </font>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 p-3 mt-lg-0 mt-4'>
                            <h6>
                                Our support
                            </h6>
                            <ul className='support'>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Sitemap
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Privacy Policy
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Your Account
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Advanced Search
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Contact Us
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 p-3 mt-lg-0 mt-4'>
                            <h6>
                                Our information
                            </h6>
                            <ul className='support'>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>About Us
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Customer Service
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Privacy Policy
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Orders and Returns
                                </li>
                                <li>
                                    <i className="fa-regular fa-circle-dot"></i>Site Map
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid p-0 BottomFooter'>
                <div className='container'>
                    <div className='d-lg-flex justify-content-between py-3 text-center'>
                    <p>
                        Copyright © 2022 <span>Bootexperts</span>. All Rights Reserved
                    </p>
                    <img src='https://htmldemo.net/james/james/img/payment.png' alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}
