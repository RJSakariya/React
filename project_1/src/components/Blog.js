import React from 'react'
import { Link } from 'react-router-dom'
import Blogcard from './Blogcard'
import Blogsidebar from './Blogsidebar'

export default function Blog() {
  let category =["Dresses (4)","shoes (6)","Handbags (1)","Clothing (3)"]
  let color =["Black (2)","Blue (2)","Green (4)","Grey (2)","Red (2)","White (2)"]
  let manufacturer =["Calvin Klein (2)","Diesel (2)","option value (1)","Polo (2)","store view (4)","Tommy Hilfiger (2)","will be used (1)"]
  return (
    <div className='container blog'>
      <div className='row p-0 py-3'>
        <li style={{listStyle: 'none'}}><Link to="/" className='link'> Home </Link>/ Blog</li>
      </div>
      <hr className='m-0' style={{ backgroundColor: '#6a6a6a', height: '1px', border: 'none' }} />
      <div className='row pt-5'>
        <div className='col-12 col-md-4 col-lg-3'>
          <h4>
            <i class="fa-solid fa-bars-staggered"></i> Shopping Options
          </h4>
          <Blogsidebar title='Category' point={category}/>
          <Blogsidebar title='Color' point={color}/>
          <Blogsidebar title='Manufacturer' point={manufacturer}/>
          <img src='https://htmldemo.net/james/james/img/product/banner_left.jpg' alt='' className='my-5'/>
        </div>
        <div className='col-12 col-md-8 col-lg-9'>
          <h4>
            <i class="fa-solid fa-bars-staggered"></i> Blog Posts
          </h4>
          <Blogcard url='https://htmldemo.net/james/james/img/blog/5.jpg' title='Lorem ipsum dolor sit amet' subtitle="By plaza themes - 17 Aug 2015 ( 0 comments )" description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...'/>
          <Blogcard url='https://htmldemo.net/james/james/img/blog/6.jpg' title='Lorem ipsum dolor sit amet' subtitle="By plaza themes - 17 Aug 2015 ( 0 comments )" description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...'/>
          <Blogcard url='https://htmldemo.net/james/james/img/blog/5.jpg' title='Lorem ipsum dolor sit amet' subtitle="By plaza themes - 17 Aug 2015 ( 0 comments )" description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...'/>
          <Blogcard url='https://htmldemo.net/james/james/img/blog/6.jpg' title='Lorem ipsum dolor sit amet' subtitle="By plaza themes - 17 Aug 2015 ( 0 comments )" description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...'/>
        </div>
      </div>
    </div>
  )
}
