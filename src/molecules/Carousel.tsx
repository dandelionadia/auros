import React, { useState } from 'react'
import { Image } from '../atoms/Image'
import { Box, Composition } from 'atomic-layout'

interface CarouselProps {
  images: CarouselImage[]
}

interface CarouselImage {
  fullImage: string
  thumbnailImage: string
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [primaryImage, setPrimaryImage] = useState(images[0])

  const clickTab = (imageIndex: number) => {
    setPrimaryImage(images[imageIndex])
  }

  return (
    <Box marginHorizontal={1.4}>
      <Image src={primaryImage.fullImage} />
      <Composition
        gap={0.2}
        templateCols="1fr 1fr 1fr 1fr 1fr 1fr"
        marginVertical={0.2}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailImage}
            onClick={() => clickTab(index)}
          />
        ))}
      </Composition>
    </Box>
  )
}
