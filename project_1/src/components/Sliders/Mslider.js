import React from 'react'

export default function Mslider(props) {
  let id = 0;
  let rid = 0;
  let slide;

  function display(i) {
    if (slide) {
      slide[rid].classList.remove("active");
    }
    slide[i].classList.add("active");
    rid = i;
  }

  React.useEffect(() => {
    slide = document.querySelectorAll(".slide");
    display(id);

    const interval = setInterval(() => {
      id = id >= slide.length - 1 ? 0 : id + 1;
      display(id);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='slider'>
      <div className='container'>
        {props.slides.map((el,ind) => {
          return (
            <div className='row slide' key={ind}>
              <div className='slider_titles'>
                <div className='title_box_1'>
                  <h1 className='slider_title_1'>{el.title_1}</h1>
                </div>
                <div className='title_box_2'>
                  <h1 className='slider_title_2'>
                    {el.title_2}
                  </h1>
                </div>
                <div className='title_box_3'>
                  <h1 className='slider_title_3'>
                    {el.title_3}
                  </h1>
                </div>
                <button className='slider_button'>
                  READ MORE
                </button>
              </div>
              <div className='img'>
                <img src={el.url} alt="image" className='slider_image'/>
              </div>
            </div>
            )
        })}
      </div>
      <div className='loading'></div>
    </div>
  )
}
