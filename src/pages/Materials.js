import "../css/Materials.css";
import flexure from "../assets/materials/flexure.png";
import compression from "../assets/materials/compression.png";
import shear from "../assets/materials/shear.png";
import tensile from "../assets/materials/tensile.png";
import concrete_compression from "../assets/materials/concrete compressive.png";
import concrete_tensile from "../assets/materials/concrete tensile.png";
import direct_tensile from "../assets/materials/direct tensile.png";
import direct_tensile2 from "../assets/materials/direct tensile2.png";
import accelerated from "../assets/materials/accelerated aging bath.png";
import beam_concrete from "../assets/materials/Beam concrete damage detection.png";
import damage_detection from "../assets/materials/damage detection in cemented sand.png";
import transducer from "../assets/materials/transducer characterization setup.png";
import measurement_grid from "../assets/materials/measurement grid.png";
import axial from "../assets/materials/axial setup - transverse setup - laser vibrometer.png";
import measuring_grid from "../assets/materials/measuring grid.png";
import test_conditions from "../assets/materials/testconditions.png";

function Materials() {
    return (
        <div className="materials-main">
            <div className="materials-main-container">
                <h1 className="title">Materials</h1>
                <hr className="seperator"></hr>
                <div className="materials-main-content">
                    <p style={{ textIndent: "2em" }}>
                        We study how materials behave. Why? Because structures
                        are made from materials. Structural materials influence
                        how strong, durable, or even how aesthetic our
                        structures are.
                    </p>
                </div>
                <div className="materials-GRFP-main">
                    <div className="materials-GFRP">
                        <div className="materials-content">
                            <h1 className="secondary-title">
                                Strength of GFRP bars
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                We test materials that are used to build
                                infrastructure. We suggested several
                                improvements to the testing so that it can be
                                done more efficiently and easily.
                            </p>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={tensile}
                                alt="Img 4"
                            />{" "}
                            <div className="label">Tensile Test</div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={direct_tensile}
                                alt="Img 5"
                            />{" "}
                            <div className="label">
                                Direct Tensile Test for GFRP bars
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={direct_tensile2}
                                alt="Img 6"
                            />{" "}
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={concrete_compression}
                                alt="Img 7"
                            />{" "}
                            <div className="label">
                                Concrete compressive strength testing
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={concrete_tensile}
                                alt="Img 8"
                            />{" "}
                            <div className="label">Concrete Tensile test</div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={flexure}
                                alt="Img 1"
                            />{" "}
                            <div className="label">Flexure Test</div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={compression}
                                alt="Img 2"
                            />{" "}
                            <div className="label">Compression Test</div>
                        </div>
                        <div className="image-container">
                            <img className="GRFP-img" src={shear} alt="Img 3" />{" "}
                            <div className="label">Shear Test</div>
                        </div>
                    </div>
                    <div className="materials-non-destructive">
                        <div className="materials-content">
                            <h1 className="secondary-title">
                                Non-destructive Testing
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                Helps to find out the condition of the structure
                                or material without damaging them. We use
                                acoustic waves to detect cracks in concrete
                                beams. WE also looked into deterioration of GFRP
                                bars. We developed appropriate signal analysis
                                techniques.
                            </p>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={beam_concrete}
                                alt="Img 8"
                            />{" "}
                            <div className="label">
                                Beam concrete damage detection
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={damage_detection}
                                alt="Img 8"
                            />{" "}
                            <div className="label">
                                Beam concrete damage detection
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={transducer}
                                alt="Img 8"
                            />{" "}
                            <div className="label">
                                Transducer characterization setup
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={measurement_grid}
                                alt="Img 8"
                            />{" "}
                            <div className="label">
                                Measurement Grid used for the laser measurements
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="GRFP-img" src={axial} alt="Img 8" />{" "}
                            <div className="label">
                                (a) Axial setup (b) transverse setup (c) laser
                                vibrometer
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={measuring_grid}
                                alt="Img 8"
                            />{" "}
                            <div className="label">
                                Measuring Grid used for the laser tests
                            </div>
                        </div>
                    </div>
                    <div className="materials-durability">
                        <div className="materials-content">
                            <h1 className="secondary-title">
                                Durability of GFRP reinforcing bars
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                GFRP bars do not corrode but they can age and
                                become weaker. We tested how durable are the
                                bars when exposed to alkaline environments.
                                Tension, shear and flexural testing was done
                                after the bars spent time in the accelerated
                                aging bath
                            </p>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={accelerated}
                                alt="Img 8"
                            />{" "}
                            <div className="label">
                                Beam concrete damage detection
                            </div>
                        </div>
                        <div className="image-container">
                            <img
                                className="GRFP-img"
                                src={test_conditions}
                                alt="Img 8"
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Materials;
