import { Link } from "react-router-dom";

export function Home() {
    return (
        <section className="hero">
                <div className="hero-text">
                    <h1>S6 Ranch</h1>
                    <h1 className="lines title-small">
                        <span>Reining &amp; Performance Horses</span>
                    </h1>
                </div>

                <a className="main-btn" tabIndex={0} href="/pages/events.html">
                    <span className="main-btn-text">Our Services</span>
                </a>
        </section>
    );
}

