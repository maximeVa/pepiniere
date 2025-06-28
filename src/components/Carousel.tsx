'use client'

import BearCarousel, {
    BearSlideCard,
    BearSlideImage,
} from 'bear-react-carousel'
import 'bear-react-carousel/dist/index.css'
import { useCallback } from 'react'

const fullScreenStyles = {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
}

const Carousel = () => {
    const slideData = useCallback((): React.ReactNode[] => {
        const dataList = [
            { id: 1, imageUrl: '/carousel/heruSectionBackground.jpg', desc: 'Blueberry' },
            { id: 2, imageUrl: '/carousel/backgroundV2.jpg', desc: 'Berry' },
            { id: 3, imageUrl: '/carousel/background.jpg', desc: 'Aam' },
        ]

        return dataList.map(({ id, imageUrl, desc }) => (
            <BearSlideCard
                key={id}
                style={fullScreenStyles}
                className="relative"
            >
                <BearSlideImage
                    imageUrl={imageUrl}
                    className="absolute inset-0 w-full h-full object-cover brightness-60"
                    alt={desc}
                />
                {/* Tu peux ajouter un overlay de texte ici si besoin */}
                {/* <div className="absolute bottom-10 left-10 text-white text-2xl">{desc}</div> */}
            </BearSlideCard>
        ))
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <BearCarousel
                data={slideData()}
                isEnableAutoPlay={true}
                autoPlayTime={4000}
                isEnableLoop
                moveTime={1000}
            />
        </div>
    )
}

export default Carousel