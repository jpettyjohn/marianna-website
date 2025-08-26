import "../css/Hobbies.css";
import { useState } from "react";
import garden from "../data/gardendataset";
import Masonry from "react-masonry-css";

function Hobbies() {
    const [bgImage, setBgImage] = useState(garden[1]);

    // Masonry breakpoints
    const breakpointColumnsObj = {
        default: 3, // number of columns on large screens
        1100: 2, // columns on medium screens
        700: 1, // columns on small screens
    };

    return (
        <div className="hobbies-main">
            {/* Background image container */}
            {bgImage && (
                <div
                    className="hobbies-bg"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
            )}
            <div className="hobbies-main-container">
                <h1 className="title">My hobbies</h1>
                <hr className="seperator" />

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {garden.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Hobby ${index + 1}`}
                            className="hobby-img"
                            onMouseEnter={() => setBgImage(src)}
                            onMouseLeave={() => setBgImage(src)}
                        />
                    ))}
                </Masonry>
            </div>
        </div>
    );
}
export default Hobbies;
