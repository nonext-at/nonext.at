import Image from 'next/image';
import Slider from 'react-infinite-logo-slider';

const Component = () => {
    return (
        <section id="customers" className="py-20 px-4 bg-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Customers</h2> 
                <Slider
                    width="400px"
                    duration={10}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBorderColor={'#000'}
                >
                    <Slider.Slide>
                        <Image draggable={false} src="/spoe.png" alt="any" width={144} height={144} />
                    </Slider.Slide>
                    <Slider.Slide>
                        <Image draggable={false} src="/fraenkis.png" alt="any2" className='scale-95' width={144} height={144} />
                    </Slider.Slide>
                    <Slider.Slide>
                        <Image draggable={false} src="/reality-break.png" className='scale-125' alt="any" width={144} height={144} />
                    </Slider.Slide>
                    <Slider.Slide>
                        <Image draggable={false} src="/nonext2.png" className='scale-150' alt="any2" width={144} height={144} />
                    </Slider.Slide>
                </Slider>
            </div> 
        </section> 
    );
};

export default Component;
