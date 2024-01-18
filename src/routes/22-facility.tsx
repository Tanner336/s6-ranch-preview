export function Facility() {
    return (
        <main id="facility">

            <section className="hero">
                <div className="two-col">
                    <div className="two-col-wrapper">
                        <div className="two-col-text">
                            <h3 className="title-small">What we offer at</h3>
                            <h2>our state of the art facility</h2>
                        </div>
                        <div className="two-col-text-block">
                            <p>
                                We have indoor and outdoor arena to accomodate training in all types of weather. A large pen for reining, cutting and roping. Lots of space for multiple riders. We also have barrels and cones for practicing patterns. 231 characters
                            </p>
                            <p>
                                We have have 12 stalls for our training clients, we do not offer boarding. We have a large pasture for turn out and a round pen for starting colts. Younger riders are welcome to come and learn the basics of riding and horsemanship. 246 characters
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overlap">
                <div className="overlap-quote">
                    <div className="offset-card">
                        <h3 className="title-small">Meet the</h3>
                        <h2 className="line">Trainer</h2>
                        <p>
                            My name is Kristen Marrow & from a young age I've had a love for horses that has turned into a passion for learning & sharing knowledge. With a background in Reining but a focus on relationship building between horse & rider through positive horsemanship.
                        </p>
                    </div>
                    <div className="quote" style={{ textAlign: "left" }}>
                        <p className="text-block">May and September 2023 saw the first in-person meet-ups of Tornjak lovers in
                            North America. May's meeting saw nine people and six tornjaks. September's meeting saw eleven
                            people and eight tornjaks. It was at that second meeting where the Tornjak Club of North America
                            was founded.
                        </p>
                        <p className="read-more"><a className="line" href="./events.html">next meetup</a></p>
                    </div>
                </div>
            </section>

            <Squares />

        </main>
    );
}

function Squares() {
    return (
        <section className="squares">
            {/* no image */}
            <div className="square bg one border hide-on-mobile">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <div className="card-text">
                                <p className="title-small">About</p>
                                <h2 className="lines">
                                    <span>Tornjaks</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* history */}
            <div className="square bg two">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/history">
                                <span className="main-btn-text">History</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* health */}
            <div className="square bg three">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/health">
                                <span className="main-btn-text">Health</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* appearance */}
            <div className="square bg four">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/appearance">
                                <span className="main-btn-text">Appearance</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* grooming */}
            <div className="square bg five">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/grooming">
                                <span className="main-btn-text">Grooming</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* exercise */}
            <div className="square bg six">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <a className="main-btn" tabIndex={0} href="./articles/exercise">
                                <span className="main-btn-text">Exercise</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
