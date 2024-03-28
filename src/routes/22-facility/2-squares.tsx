const squaresData: string[] = [
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

export function Squares() {
    return (
        <section className="squares">
            {/* no image */}
            <div className="square bg one border hide-on-mobile">
                <div className="content">
                    <div className="table">
                        <div className="table-cell">
                            <div className="card-text">
                                <p className="title-small">Tour our</p>
                                <h2 className="lines">
                                    <span>Gallery</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {squaresData.map((square, index) => (
                <div className={`square bg ${square}`} key={index}>
                    <div className="content">
                        <div className="table" />
                    </div>
                </div>
            ))}
        </section>
    );
}
