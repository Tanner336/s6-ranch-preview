import { IconNext, IconPrev } from "@/ui";

export function Testimonial() {
  return (
    <section id="testimonial" className="testimonial">
      <div className="section-title">
        <h3 className="title-small">Kind Words</h3>
        <h2 className="title-large">From Our Community</h2>
      </div>
      <div className="testimonial-card">
        <div className="testimonial-copy">
          {/* <div className="arrow-prev" tabIndex={0} /> */}
          <IconPrev />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            sapiente necessitatibus sequi ad minima! Similique rem libero
            commodi, earum impedit et eaque voluptatem nobis eveniet nihil
            veritatis modi a laborum!
          </p>
          {/* <div className="arrow-next" tabIndex={0} /> */}
          <IconNext />
          <p className="testimonial-name">- John Doe</p>
        </div>
      </div>
    </section>
  );
}
