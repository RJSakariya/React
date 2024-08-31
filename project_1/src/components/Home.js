import React, { useState, useEffect } from 'react';
import Mslider from './Sliders/Mslider';
import Categories from './Products/Categories';
import MsliderLoader from './Sliders/MsliderLoader';
import Section1 from './Section1';

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
      {heroSlides ?<Mslider slides ={heroSlides}/>:<MsliderLoader/>}
      <Section1/>
      {Card ?<Categories cards = {Card}/>:<p></p>}
    </>
  );
}