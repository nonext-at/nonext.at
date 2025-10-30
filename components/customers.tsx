import Image from 'next/image';
import Slider from 'react-infinite-logo-slider';

const Component = () => {
    return (
        <section id="customers" className="py-20 px-4 bg-black text-white overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Unsere Kunden</h2>
                <Slider
                    width="400px"
                    duration={20}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBorderColor={'#000'}
                >
                    <Slider.Slide>
                        <Image
                            priority={true}
                            draggable={false}
                            className="select-none scale-95 grayscale"
                            src="/carousel/nobody.webp"
                            alt="nobody logo"
                            width={100}
                            height={100}
                            style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
                        />
                    </Slider.Slide>
                    <Slider.Slide>
                        <Image
                            priority={true}
                            draggable={false}
                            className="select-none scale-150 invert"
                            src="/carousel/easyroom.webp"
                            alt="easyroom logo"
                            width={100}
                            height={100}
                            style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
                        />
                    </Slider.Slide>
                    <Slider.Slide>
                        <Image
                            priority={true}
                            draggable={false}
                            className="select-none scale-125"
                            src="/carousel/reality-break.webp"
                            alt="reality break logo"
                            width={100}
                            height={100}
                            style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
                        />
                    </Slider.Slide>
                    <Slider.Slide>
                        <Image
                            priority={true}
                            draggable={false}
                            className="select-none scale-150"
                            src="/carousel/nonext.webp"
                            alt="nonext logo"
                            width={100}
                            height={100}
                            style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
                        />
                    </Slider.Slide>
                </Slider>
            </div>
        </section>
    );
};

export default Component;
