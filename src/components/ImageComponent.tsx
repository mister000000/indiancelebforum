import React from 'react'
import NextImage from 'next/image'

/**
 * Size of the image
 */
interface ImageSize {
    width: number;
    height: number;
}

/**
 * Props for the ImageComponent
 */
interface ImageComponentProps {
    fileName: string;
    priority: boolean;
    width: number;
}

/**
 * A component that displays an image and opens it in a new window on click.
 *
 * @param fileName - The name of the file to display
 * @param priority - Whether to prioritize loading the image
 * @param width - The desired width of the image
 * @returns A React component that displays the image
 */
const ImageComponent = ({
    fileName,
    priority,
    width,
  }: ImageComponentProps): JSX.Element => {
    const [imageSize, setImageSize] = React.useState<ImageSize>({
      width: width ?? 1,
      height: 1,
    });
  
    /**
     * Sets the size of the image after it has loaded.
     *
     * @param target - The event target
     */
    const onLoadingComplete = (target: EventTarget & { naturalHeight: number }): void => {
      setImageSize({
        width: width ?? 1,
        height: target.naturalHeight,
      });
    };
  
    return (
      <NextImage
        src={`/UHQ/${fileName}`}
        alt={`click to open ${fileName}`}
        className="gallery-item"
        onClick={() => window.open(`/uhq/${fileName}`)}
        priority={priority}
        onLoadingComplete={onLoadingComplete}
        width={imageSize.width}
        height={imageSize.height}
      />
    );
  };

export default ImageComponent