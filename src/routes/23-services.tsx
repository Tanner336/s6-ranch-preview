import { Link } from "react-router-dom";
import { SEO } from "./SEO";
import { Testimonial } from "./22-facility/3-testimonial";

export function Services() {
  return (
    <>
      <SEO
        title="S6 Ranch Services"
        description="Services offered"
        href="/services"
      />

      <main id="service">
        <section className="hero">
          <div className="page-title">
            <h3 className="title-small">More On</h3>
            <h2 className="title-large">What We Offer</h2>
          </div>
        </section>

        <section id="trainers">
          <div className="service-wrapper">
            <ul className="service-bar">
              <li>
                <a href="#reining-lessons">Reining Lessons</a>
              </li>
              <li>
                <a href="#youth-reining">Youth Reining</a>
              </li>
              <li>
                <a href="#performance-horses">Performance Horses</a>
              </li>
              <li>
                <a href="#service-4">Service 4</a>
              </li>
              <li>
                <a href="#service-5">Service 5</a>
              </li>
              <li>
                <a href="#service-6">Service 6</a>
              </li>
            </ul>
          </div>

          <div className="trainers">
            <div className="section-title">
              <h3 className="title-small">Meet</h3>
              <h2 className="title-large">Our Trainers</h2>
            </div>

            <div className="img-text-box trainer-one">
              <div className="col-text">
                <h3 className="title-small">Expert Reiner</h3>
                <h2>Kristen Marrow</h2>
                <p>
                  813 characters - Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                  ea commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
                <p>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </p>
              </div>
              <div className="col-image" />
            </div>

            <div className="img-text-box trainer-two">
              <div className="col-image reverse" />
              <div className="col-text">
                <h3 className="title-small">Trainer Two</h3>
                <h2>Josh Johnson</h2>
                <p>
                  415 characters - Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                  ea commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
              </div>
            </div>

            <div className="secondary-details">
              <p>
                1752 Characters - Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque illo optio suscipit dicta deleniti eaque
                a, consequatur incidunt porro laboriosam provident libero
                doloremque ratione vitae quo sunt nam, tempora adipisci.
                Veritatis, aut sed, impedit deleniti officia rem dicta quo
                ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci,
                illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                suscipit voluptatibus soluta porro eveniet sed temporibus harum
                laudantium quisquam sapiente perspiciatis quae, aut libero
                tenetur!Nam liber tempor cum soluta nobis eleifend option congue
                nihil imperdiet doming id quod mazim placerat facer possim
                assum. Typi non habent claritatem insitam; est usus legentis in
                iis qui facit eorum claritatem. Investigationes demonstraverunt
                lectores legere me lius quod ii legunt saepius acilisis at vero
                eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum. Nam liber tempor cum soluta nobis eleifend option
                congue nihil imperdiet doming id quod mazim placerat facer
                possim assum. Typi non habent claritatem insitam; est usus
                legentis in iis qui facit eorum claritatem. Investigationes
                demonstraverunt lectores legere me lius quod ii legunt saepius
                acilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum. Typi non habent claritatem insitam;
                est usus legentis in iis qui facit eorum claritatem.
                Investigationes demonstraverunt lectores legere me lius quod ii
                legunt saepius acilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum.
              </p>
              <hr />
            </div>
          </div>
        </section>
        <section className="overlap">
          <div className="overlap-quote">
            <div className="offset-card" id="reining-lessons">
              <h3 className="title-small">Service 1</h3>
              <h2 className="line">Reining Lessons</h2>
              <p>
                612 characters - Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque illo optio suscipit dicta deleniti eaque
                a, consequatur incidunt porro laboriosam provident libero
                doloremque ratione vitae quo sunt nam, tempora adipisci.
                Veritatis, aut sed, impedit deleniti officia rem dicta quo
                ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci,
                illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                suscipit voluptatibus soluta porro eveniet sed temporibus harum
                laudantium quisquam sapiente perspiciatis quae, aut libero
                tenetur!
              </p>
            </div>
          </div>
        </section>
        <section className="overlap reverse">
          <div className="overlap-quote">
            <div className="offset-card" id="youth-reining">
              <h3 className="title-small">Service 2</h3>
              <h2 className="line">Youth Reining</h2>
              <p>
                612 characters - Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque illo optio suscipit dicta deleniti eaque
                a, consequatur incidunt porro laboriosam provident libero
                doloremque ratione vitae quo sunt nam, tempora adipisci.
                Veritatis, aut sed, impedit deleniti officia rem dicta quo
                ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci,
                illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                suscipit voluptatibus soluta porro eveniet sed temporibus harum
                laudantium quisquam sapiente perspiciatis quae, aut libero
                tenetur!
              </p>
            </div>
          </div>
        </section>
        <section className="overlap">
          <div className="overlap-quote">
            <div className="offset-card" id="performance-horses">
              <h3 className="title-small">Service 3</h3>
              <h2 className="line">Performance Horses</h2>
              <p>
                612 characters - Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque illo optio suscipit dicta deleniti eaque
                a, consequatur incidunt porro laboriosam provident libero
                doloremque ratione vitae quo sunt nam, tempora adipisci.
                Veritatis, aut sed, impedit deleniti officia rem dicta quo
                ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci,
                illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                suscipit voluptatibus soluta porro eveniet sed temporibus harum
                laudantium quisquam sapiente perspiciatis quae, aut libero
                tenetur!
              </p>
            </div>
          </div>
        </section>
        <section className="overlap reverse">
          <div className="overlap-quote">
            <div className="offset-card" id="service-4">
              <h3 className="title-small">Service 4</h3>
              <h2 className="line">Example 4</h2>
              <p>
                612 characters - Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque illo optio suscipit dicta deleniti eaque
                a, consequatur incidunt porro laboriosam provident libero
                doloremque ratione vitae quo sunt nam, tempora adipisci.
                Veritatis, aut sed, impedit deleniti officia rem dicta quo
                ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci,
                illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                suscipit voluptatibus soluta porro eveniet sed temporibus harum
                laudantium quisquam sapiente perspiciatis quae, aut libero
                tenetur!
              </p>
            </div>
          </div>
        </section>

        <section className="overlap">
          <div className="overlap-quote">
            <div className="offset-card" id="service-5">
              <h3 className="title-small">Service 5</h3>
              <h2 className="line">Example 5</h2>
              <p>
                612 characters - Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque illo optio suscipit dicta deleniti eaque
                a, consequatur incidunt porro laboriosam provident libero
                doloremque ratione vitae quo sunt nam, tempora adipisci.
                Veritatis, aut sed, impedit deleniti officia rem dicta quo
                ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci,
                illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                suscipit voluptatibus soluta porro eveniet sed temporibus harum
                laudantium quisquam sapiente perspiciatis quae, aut libero
                tenetur!
              </p>
            </div>
          </div>
        </section>

        <section className="overlap reverse">
          <div className="overlap-quote">
            <div className="offset-card" id="service-6">
              <h3 className="title-small">Service 6</h3>
              <h2 className="line">Example 6</h2>
              <p>
                612 characters - Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque illo optio suscipit dicta deleniti eaque
                a, consequatur incidunt porro laboriosam provident libero
                doloremque ratione vitae quo sunt nam, tempora adipisci.
                Veritatis, aut sed, impedit deleniti officia rem dicta quo
                ducimus ullam totam ut beatae quas? Natus nulla odio aperiam
                rerum, magni deleniti blanditiis in eveniet facilis. Adipisci,
                illo fugit? Aspernatur. Animi quam corrupti sunt enim labore
                suscipit voluptatibus soluta porro eveniet sed temporibus harum
                laudantium quisquam sapiente perspiciatis quae, aut libero
                tenetur!
              </p>
            </div>
          </div>
        </section>

        <Testimonial />
      </main>
    </>
  );
}
