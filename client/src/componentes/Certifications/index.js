import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Certificacions() {
    const { certificates } = useSelector(state => state);
    // let [index, setIndex] = useState(0);

    // const handlePrev = () => {
    //     index > 1
    //         ? setIndex(index - 1)
    //         : setIndex(0)
    // }
    // const handleNext = () => {
    //     index >= certificates?.length - 1
    //         ? setIndex(certificates.length - 1)
    //         : setIndex(index + 1)
    // }

    return (
        <div id='Certifications' className="w-full min-h-full ">{/*principal*/}

            <h2 className='
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
                text-center font-light
                mx-auto mt-4 md:mt-8 py-4'
            >Certificaciones</h2>

            <div className="
            h-2/6 w-4/6 md:h-3/6 md:w-3/6 mt-4 
            mx-auto
            ">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {
                        certificates?.map((img, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img className='h-full w-full' src={img} alt="cert" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Certificacions;

