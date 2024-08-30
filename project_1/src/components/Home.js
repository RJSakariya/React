import React, { useState, useEffect } from 'react';
import Mslider from './Sliders/Mslider';
import Categories from './Products/Categories';

export default function Home() {
  const [heroSlides, setHeroSlides] = useState(null);
  const [Card, setCard] = useState(null);

  function getData() {
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setHeroSlides(data.hero_slides);
        setCard(data.card);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {heroSlides ?<Mslider slides ={heroSlides}/>:<p>loading...</p>}
      {Card ?<Categories cards = {Card}/>:<p>loading...</p>}
    </>
  );
}