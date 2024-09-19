import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const items = [
    {
        src: 'https://picsum.photos/1500/700',
        altText: 'Slide 1',
        caption: 'Slide 1',
    },
    {
        src: 'https://picsum.photos/1500/701',
        altText: 'Slide 2',
        caption: 'Slide 2',
    },
    {
        src: 'https://picsum.photos/1500/702',
        altText: 'Slide 3',
        caption: 'Slide 3',
    }
]
export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item, ind) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={ind}
        >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption
                captionText={item.caption}
                captionHeader={item.caption}
            />
        </CarouselItem>
    ));

    return (
        <div className='container p-0'>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                fade
                dark
                slide
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}
