import React, { useState } from 'react';
import { Carousel,CarouselItem,CarouselControl, CarouselIndicators,CarouselCaption} from 'reactstrap';

    function Slider(props) {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
        const {productDetail} = props
        
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
        const items = productDetail.images?.map((item, index) => ({
            src: item,
            altText: `Slide ${index + 1}`,
            caption: `Slide ${index + 1}`,
            key: index,
        })) || [];
        const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} height={600}/>
            </CarouselItem>
        );
    });

return (
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
);
}

export default Slider;