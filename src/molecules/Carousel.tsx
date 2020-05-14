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
    <Box>
      <Image src={primaryImage.fullImage} />
      <Composition
        gap="3px"
        marginVertical="3px"
        templateCols="repeat(auto-fit, minmax(80px, 1fr))"
      >
        {images.map((image, index) => (
          <img
            alt="productImg"
            key={index}
            src={image.thumbnailImage}
            onClick={() => clickTab(index)}
          />
        ))}
      </Composition>
    </Box>
  )
}
