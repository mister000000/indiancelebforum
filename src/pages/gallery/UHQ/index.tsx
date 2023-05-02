import React from 'react'
import NextLink from 'next/link'
import NextHead from 'next/head'
import ImageComponent from '@/components/ImageComponent'

interface ImageDetails {
    name: string;
    alt: string;
    src: string;
    caption: string;
    type: string;
    actress: string;
    date: string;
    enhanced: boolean;
  }


/**
 * Renders the UHQ Gallery component that displays a list of images.
 *
 * @return {JSX.Element} The UHQ Gallery component.
 */
/**
 * Renders the UHQ Gallery component that displays a list of images.
 *
 * @return {JSX.Element} The UHQ Gallery component.
 */
const Index = () => {

    // State variables to store file names and window width
    const [fileNames, setFileNames] = React.useState<ImageDetails[]>([]);
    const [width, setWidth] = React.useState<number>(0)

    // Fetches data from the '/api/GalleryUHQ' endpoint and sets the state of 'fileNames'
    // to the corresponding data.
    React.useEffect(() => {
        /**
        * Fetches data from the '/api/GalleryUHQ' endpoint and sets the state of 'fileNames'
        * to the corresponding data.
        *
        * @return {Promise<void>} A Promise that resolves after data is fetched and state is set.
        */
        const fetchData = async () => {
            const data = await fetch('/api/gallery/uhq').then(res => res.json());
            setFileNames(data);
        }
        fetchData();

        // Sets the state of 'width' to the window width
        setWidth(window.innerWidth)

    }, [])

    // Returns the UHQ Gallery component
    return (
        <>
            <div>
                <NextHead>
                    <title>UHQ Gallery | Indian Celeb Forum</title>
                    <meta name="description" content="Indian Celeb Forum" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </NextHead>
                <div className='title-container'>
                    <h1>UHQ Celeb images</h1>
                    <h2>Upscaled, probably.</h2>
                    <NextLink href="/">Go to main page</NextLink>
                </div>
                <div className='gallery'>
                    {
                        // Maps the file names to 'ImageComponent' components
                        fileNames.length !== 0 && fileNames.map((image, index) => {

                            return (
                                <ImageComponent
                                    key={index}
                                    alt={image.alt}
                                    src={image.src}
                                    priority={index < 6}
                                    width={(width * 33) / 100}
                                />
                            )
                        })
                    }
                </div>
            </div>
            {/* A div that opens an image when clicked */}
            <div onClick={() => window.open("/lmao@uhq.PNG")}>lmao</div>
        </>
    )
}


export default Index