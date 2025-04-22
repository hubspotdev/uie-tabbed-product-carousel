import React, { useState } from "react";

import {
  Flex,
  Image,
  Button, Icon
} from "@hubspot/ui-extensions";

interface PhotoCarouselProps {
  productName: string;
  productImages: string[];
}

const PhotoCarousel = ({ productName, productImages }: PhotoCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (direction: 'left' | 'right') => {
    const totalImages = productImages.length;
    const step = direction === 'left' ? -1 : 1;
    setCurrentImage((prev) => (prev + step + totalImages) % totalImages);
  }

  return (
    <Flex gap='small' justify='center'>
      <Button variant='transparent' onClick={() => handleImageChange('left')}>
        <Icon name="left" size='large' />
      </Button>

      <Image  height={300} src={productImages[currentImage]} alt={`${productName} image ${currentImage + 1}`} />
      <Button variant='transparent' onClick={() => handleImageChange('right')}>
        <Icon name="right" size='large' />
      </Button>
    </Flex>
  );
};

export default PhotoCarousel;
