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
            </div>

        </section>
    );
}
