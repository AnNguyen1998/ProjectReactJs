import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
function SliderContent1(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const { product } = props

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
    const items = product ? product.images.map((item, index) => ({
        src: item,
        altText: `Slide ${index + 1}`,
        caption: `Slide ${index + 1}`,
        key: index,
    })) : [];
    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} style={{ width: '100%' }} />
            </CarouselItem>
        );
    });

    return (
        <>
            <div className='carou-content' style={{
                position: 'relative', borderRadius: '50px',
                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
            }}>
                <Link to='/product'>
                    <Button className='btn-disco d-md-none d-lg-block d-none d-sm-block d-sm-none d-md-block'>DISCOVER NOW</Button>
                </Link>
                <h1 style={{ position: 'absolute', top: '10%', left: '5%', textShadow: '6px 6px 0px rgba(0,0,0,0.5)', zIndex:'10'}}>{product && product.title}</h1>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
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
        </>
    );
}

export default SliderContent1;