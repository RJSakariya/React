import React from 'react'
import { Link } from 'react-router-dom'
import Member from './Member'
export default function About() {
  return (
    <div className='container about'>
      <div className='row p-0 py-3'>
        <li type='none'><Link to="/" className='link'> Home </Link>/ About</li>
      </div>
      <hr className='m-0' style={{ backgroundColor: '#6a6a6a', height: '1px', border: 'none' }} />
      <div className='row p-0 justify-content-between'>
        <div className='col-12 col-lg-6 mt-5'>
          <h5>
            The standard lorem ipsum passage
          </h5>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
          <p>
            <i>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </i>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nisi ac mi malesuada vestibulum. Phasellus tempor nunc eleifend cursus molestie. Mauris lectus arcu, pellentesque at sodales sit amet, condimentum id nunc. Donec ornare mattis suscipit. Praesent fermentum accumsan vulputate.
          </p>
        </div>
        <div className='col-12 col-lg-4 mt-5'>
          <img src='https://htmldemo.net/james/james/img/about/about.jpg' alt='' />
        </div>
      </div>
      <div className='row mt-5'>
          <h5 className='text-center'>
            meet the team
          </h5>
          <Member url='https://htmldemo.net/james/james/img/about/1.jpg' name='Havier Macherano' detail='Developer' />
          <Member url='https://htmldemo.net/james/james/img/about/2.jpg' name='Luka Biglia' detail='Programmer' />
          <Member url='https://htmldemo.net/james/james/img/about/3.jpg' name='Anzo Perez' detail='Designer' />
          <Member url='https://htmldemo.net/james/james/img/about/4.jpg' name='Martin Demichelis' detail='PHP Developer' />
        </div>
    </div>
  )
}
