import React from 'react';
import { getProductImageUrl, handleImageError, IMAGE_PATHS } from '../../utils/imageUtils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  isProductImage?: boolean;
  fallbackSrc?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  isProductImage = false,
  alt = '',
  className = '',
  fallbackSrc = IMAGE_PATHS.PLACEHOLDER,
  ...props
}) => {
  const [imgSrc, setImgSrc] = React.useState<string>(
    isProductImage ? getProductImageUrl(src) : src
  );

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    handleImageError(e);
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={onError}
      loading="lazy"
      {...props}
    />
  );
};

export default Image;

export const ProductImage: React.FC<Omit<ImageProps, 'isProductImage'>> = (props) => (
  <Image isProductImage={true} {...props} />
);
