import { Carousel, Typography, Button } from "@material-tailwind/react";
import {  Typewriter} from 'react-simple-typewriter'

const Banner = () => {
    return (
        <Carousel className="rounded-xl">
            <div className="relative h-full w-full">
                <img
                    src="https://i.ibb.co/6gr12Bm/william-farlow-Ieva-ZPwq0mw-unsplash.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            The Beauty of
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Nature']}
                                    loop={0 | false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    
                                />
                            </span>
                            
                             
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            It is not so much for its beauty that the forest makes a claim
                            upon men&apos;s hearts, as for that subtle something, that quality
                            of air that emanation from old trees, that so wonderfully changes
                            and renews a weary spirit.
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://i.ibb.co/ZJd5Lzp/neom-STV2s3-FYw7-Y-unsplash.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            The Beauty of  <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Nature']}
                                    loop={0 | false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    
                                />
                            </span>
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            It is not so much for its beauty that the forest makes a claim
                            upon men&apos;s hearts, as for that subtle something, that quality
                            of air that emanation from old trees, that so wonderfully changes
                            and renews a weary spirit.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://i.ibb.co/56DF4KH/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            The Beauty of  <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Thinking']}
                                    loop={0 | false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    
                                />
                            </span>
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            It is not so much for its beauty that the forest makes a claim
                            upon men&apos;s hearts, as for that subtle something, that quality
                            of air that emanation from old trees, that so wonderfully changes
                            and renews a weary spirit.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
};

export default Banner;