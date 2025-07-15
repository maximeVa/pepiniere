'use client'

import BearCarousel, { BearSlideImage } from 'bear-react-carousel'
import 'bear-react-carousel/dist/index.css'
import { FC } from 'react'

const fullScreenStyles = {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
}

interface CarouselImage {
    src: string;
    alt?: string;
}

interface CarouselProps {
    images?: CarouselImage[];
    className?: string;
    style?: React.CSSProperties;
    isEnableAutoPlay?: boolean; // Ajouté pour contrôle externe
    isEnableLoop?: boolean;     // Ajouté pour contrôle externe
}

const Carousel: FC<CarouselProps> = ({ images = [], className = '', style, isEnableAutoPlay = true, isEnableLoop = true }) => {
    return (
        <div className={className} style={style}>
            <BearCarousel
                data={images.map((img, idx) => (
                    <BearSlideImage
                        key={idx}
                        imageUrl={img.src}
                        className="w-full h-full object-cover brightness-90"
                        alt={img.alt || ''}
                    />
                ))}
                isEnableAutoPlay={isEnableAutoPlay}
                autoPlayTime={4000}
                isEnableLoop={isEnableLoop}
                moveTime={1000}
            />
        </div>
    );
};

export default Carousel