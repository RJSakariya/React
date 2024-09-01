import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useLocation, Link } from 'react-router-dom';

export default function Categories({ cards }) {
  const location = useLocation();
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    filterCardsByCategory();
  }, [location.pathname, cards]);

  const filterCardsByCategory = () => {
    let category = '';

    if (location.pathname === '/men' ||  location.pathname === '/') {
      category = "Men's";
    } else if (location.pathname === '/women') {
      category = "Women's";
    } else if (location.pathname === '/footwear') {
      category = 'Footwear';
    } else if (location.pathname === '/shoes') {
      category = 'Shoes';
    }

    if (category) {
      setFilteredCards(cards.filter((el) => el.category === category));
    } else {
      setFilteredCards(cards);
    }
  };

  return (
    <div className='container-lg px-3 px-lg-0'>
      <hr className='m-0' style={{backgroundColor: '#6a6a6a', height:'1px',border:'none'}}/>
      <div className='row'>
        <div className='col-12 col-md-4 col-lg-3'>
          <div className='Categories'>
            <div className='Products'>
              <p>Best seller</p>
              <h1>products</h1>
            </div>
            <Link to="/men"><button className={location.pathname === '/men' || location.pathname === '/' ? 'active_btn' : ''}>Men</button></Link>
            <Link to="/women"><button className={location.pathname === '/women' ? 'active_btn' : ''}>Women</button></Link>
            <Link to="/footwear"><button className={location.pathname === '/footwear' ? 'active_btn' : ''}>Footwear</button></Link>
            <Link to="/shoes"><button className={location.pathname === '/shoes' ? 'active_btn' : ''}>Shoes</button></Link>
            <img src='https://htmldemo.net/james/james/img/banner/banner-5.jpg' alt="Banner" />
          </div>
        </div>
        <div className='col-12 col-md-8 col-lg-9 p-4'>
          <Card detail={filteredCards} />
        </div>
      </div>
      <hr className='m-0 mt-3' style={{backgroundColor: '#6a6a6a', height:'1px',border:'none'}}/>
    </div>
  );
}
