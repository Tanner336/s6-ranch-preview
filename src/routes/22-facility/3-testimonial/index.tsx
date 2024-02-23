import { TestimonialData, dynamicData } from "@/store";
import { Carousel, IconNext, IconPrev, imageUrlByIndex } from "@/ui";

import css from "@/ui/carousel/carousel.module.css";

function CarouselSlides({ slides }: { slides: TestimonialData[]; }) {
    return (
        <Carousel<TestimonialData>
            slides={slides}
            card={
                (index) => {
                    const slide = imageUrlByIndex(slides, index);
                    return (
                        <div className={css["card"]} style={{ color: '#fff' }}>
                            <div>
                                {slide.text}
                            </div>
                            <div>
                                {slide.author}
                            </div>
                        </div>
                    );
                }}
        />
    );
}

export function Testimonial() {
    console.log('dynamicData.testimonials', dynamicData.testimonials);

    return (
        <section id="testimonial" className="testimonial">

            <div className="section-title">
                <h3 className="title-small">Kind Words</h3>
                <h2 className="title-large">From Our Community</h2>
            </div>

            <div className="testimonial-card">

                <CarouselSlides slides={dynamicData.testimonials} />

                {/* <div className="arrow-prev" tabIndex={0} />

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                    sapiente necessitatibus sequi ad minima! Similique rem libero
                    commodi, earum impedit et eaque voluptatem nobis eveniet nihil
                    veritatis modi a laborum!
                </p>

                <p className="testimonial-name">- John Doe</p>

                <div className="arrow-next" tabIndex={0} /> */}


            </div>

        </section>
    );
}
