import "../css/Structures.css";
import anti from "../assets/structures/anti-symmetric.png";
import beamsfail from "../assets/structures/beamsfail.png";
import beamsfail2 from "../assets/structures/beamsfail2.png";
import bridge from "../assets/structures/bridgedeck.png";
import bridge2 from "../assets/structures/bridgedeck2.png";
import cornersfail from "../assets/structures/cornerfailure.png";
import corners from "../assets/structures/corners.png";
import failureGFRPbeams from "../assets/structures/failureGFRPbeams.png";
import failureGFRPbeamsSTIRUPS from "../assets/structures/failureGFRPbeamsSTIRUPS.png";
import fea from "../assets/structures/FEAofslab.png";
import gfrpcasting from "../assets/structures/gfrpcagescasting.png";
import gfrpRE from "../assets/structures/gfrpreinforcement.png";
import gfrpRE2 from "../assets/structures/gfrpreinforcement2.png";
import model from "../assets/structures/modelofshearreinforce.png";
import pull from "../assets/structures/pullout.png";
import pull2 from "../assets/structures/pullout2.png";
import pull3 from "../assets/structures/pullout3.png";
import pull4 from "../assets/structures/pullout4.png";
import punchingcoloumn from "../assets/structures/punchingcoloumn.png";
import reinforcingcages from "../assets/structures/reinforcingcages.png";
import reinforcingcages2 from "../assets/structures/reinforcingcages2.png";
import shearbolts from "../assets/structures/shearbolts.png";
import shearbolts2 from "../assets/structures/shearbolts2.png";
import shearfailure1997 from "../assets/structures/shearfailure1997.png";
import shortbeams from "../assets/structures/shortbeams.png";
import shortbeams2 from "../assets/structures/shortbeams2.png";
import slenderbeams from "../assets/structures/slenderbeams.png";
import slenderbeams2 from "../assets/structures/slenderbeams2.png";
import symmetric from "../assets/structures/symmetric.png";
import testingcornerclosing from "../assets/structures/testingcornerclosing.png";
import testingcornerfailurepattern from "../assets/structures/testingcornerfailurepattern.png";
import testingcornerfailurepattern2 from "../assets/structures/testingcornerfailurepattern2.png";
import testingcorners from "../assets/structures/testingcorners.png";
import testingflatslabs from "../assets/structures/testingflatslabs.png";
import withoutstirrups from "../assets/structures/withoutstirrups.png";
import withstirrups from "../assets/structures/withstirrups.png";

function Structures() {
    return (
        <div className="structures-main">
            <div className="structures-main-container">
                <h1 className="title">Structures</h1>
                <hr className="seperator"></hr>
                <div className="structures-main-content">
                    <p style={{ textIndent: "2em" }}>
                        We investigate performance of structures. Variety of
                        structures: bridges, buildings, industrial
                        infrastructure. Structures are generally large and
                        difficult to test. Therefore, we build and test parts of
                        them in the laboratory. We also analyse them using
                        modern software.
                    </p>
                </div>

                {/* Two Column Layout Container */}
                <div className="structures-two-column-container">
                    {/* Left Column */}
                    <div className="structures-left-column">
                        {/* Concrete Structures Section */}
                        <div className="structures-section-header">
                            <h1 className="secondary-title">
                                Concrete Structures
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                Why test concrete structures? Because concrete
                                is the most used structural material and thus
                                very important. All around us, bridges,
                                buildings, roads are made from concrete
                            </p>
                        </div>
                        <div className="structures-wrapper">
                            <div className="structures-border">
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={bridge}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Bridge deck with GFRP bars before
                                        concrete casting
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GFRP Bars Section */}
                        <div className="structures-section-header">
                            <h1 className="secondary-title">
                                Concrete Structures Reinforced with Fibre
                                Reinforced Plastic Bars.
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                Why test concrete structures? Because concrete
                                is the most used structural material and thus
                                very important. All around us, bridges,
                                buildings, roads are made from concrete.
                            </p>
                        </div>
                        <div className="structures-wrapper">
                            <div className="structures-border">
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={bridge2}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Bridge deck with GFRP bars before
                                        concrete casting
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="structures-section-header">
                            <p style={{ textIndent: "2em" }}>
                                A new type of reinforcement has been developed,
                                researched and now it is also used in practice.
                                These are fibre reinforced polymer composite
                                (FRP) bars. They are strong, do not corrode but
                                behave differently than steel and must be
                                researched comprehensively. We have several
                                projects on FRP reinforced structural concrete.
                                The most common FRP concrete reinforcement are
                                bars made from glass fibre reinforced polymers –
                                GFRP bars.
                            </p>
                        </div>

                        {/* Laboratory Section */}
                        <div className="structures-section-header">
                            <h1 className="secondary-title">
                                Structures Laboratory at the University of
                                Waterloo
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                This is where we build and test our specimens
                            </p>
                        </div>
                        <div className="structures-wrapper">
                            <div className="structures-border-alt">
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={reinforcingcages}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Building reinforcing cages in the
                                        Laboratory
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={reinforcingcages2}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Robotic Arm for 3-D printing of concrete
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={pull}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Ready for pull-out tests
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={pull2}
                                        alt="Img 4"
                                    />{" "}
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={pull3}
                                        alt="Img 4"
                                    />{" "}
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={pull4}
                                        alt="Img 4"
                                    />{" "}
                                </div>
                            </div>
                            {/* Punching Shear Section */}
                            <div className="structures-section-header">
                                <h1 className="secondary-title">
                                    Punching Shear in Concrete Slabs
                                </h1>
                                <p style={{ textIndent: "2em" }}>
                                    There are many flat concrete slabs in our
                                    buildings. We investigate the connections
                                    between the slabs and the columns. Over the
                                    years we have tested many slab specimens and
                                    investigated punching shear, shear retrofit
                                    techniques which we developed, openings in
                                    the slabs, and seismic behaviour. Our most
                                    recent project is to test slabs with GFRP
                                    reinforcements with steel fibres, and steel
                                    shear reinforcing
                                </p>
                            </div>
                            <div className="structures-wrapper">
                                <div className="structures-border-alt">
                                    <div className="structures-img-container">
                                        <img
                                            className="structures-img"
                                            src={shearfailure1997}
                                            alt="Img 4"
                                        />{" "}
                                        <div className="label">
                                            Punching shear failure
                                            Wolverhampton, West Midlands 1997
                                        </div>
                                    </div>
                                    <div className="structures-img-container">
                                        <img
                                            className="structures-img"
                                            src={shearbolts}
                                            alt="Img 4"
                                        />{" "}
                                        <div className="label">
                                            Retrofit of concrete slabs with
                                            shear bolts
                                        </div>
                                    </div>
                                    <div className="structures-img-container">
                                        <img
                                            className="structures-img"
                                            src={shearbolts2}
                                            alt="Img 4"
                                        />{" "}
                                        <div className="label">
                                            Shear bolts installed in a real
                                            building developed at the University
                                            of Waterloo
                                        </div>
                                    </div>
                                    <div className="structures-img-container">
                                        <img
                                            className="structures-img"
                                            src={testingflatslabs}
                                            alt="Img 4"
                                        />{" "}
                                        <div className="label">
                                            Setup for testing flat slabs for
                                            punching shear
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="structures-right-column">
                        {/* GFRP Beams Section */}
                        <div className="structures-section-header">
                            <h1 className="secondary-title">
                                Concrete Beams with GFRP reinforcement
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                Beams with GFRP reinforcement were tested. Both
                                flexural and shear failures were investigated
                                for short and slender beams.
                            </p>
                        </div>
                        <div className="structures-wrapper">
                            <div className="structures-border-alt">
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={shortbeams}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Short Beam during testing
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={shortbeams2}
                                        alt="Img 4"
                                    />{" "}
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={gfrpRE2}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Casting on concrete beams
                                    </div>
                                </div>

                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={beamsfail}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Beams at failure
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={beamsfail2}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Beams at failure
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={slenderbeams}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">Slender Beams</div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={slenderbeams2}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">Slender Beams</div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={gfrpRE}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Building reinforcing cages in the
                                        Laboratory
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Frame Joints Section */}
                        <div className="structures-section-header">
                            <h1 className="secondary-title">
                                Concrete Frame Joints Reinforced with GFRP bars
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                Frames are part of most structures. The
                                connections between columns and beams in frames
                                must be strong to withstand loads applied to the
                                members. We have been testing GFRP reinforced
                                frames with different reinforcement
                                configurations. We also analyse these joints
                                with nonlinear finite element analysis
                            </p>
                        </div>
                        <div className="structures-wrapper">
                            <div className="structures-border-alt">
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={gfrpcasting}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        GFRP cages in the Structures lab at the
                                        University of Waterloo ready for casting
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={corners}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Corners under opening moments Spciment
                                        during testing
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={testingcorners}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Testing of concrete corner specimen
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={cornersfail}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Corner under opening moments Crack
                                        pattern at failure
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={testingcornerfailurepattern}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Corners under closing moment- failure
                                        pattern
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={testingcornerfailurepattern2}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Corners under closing moment- failure
                                        pattern
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={withoutstirrups}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Failure without confining stirrups
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={withstirrups}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Failure with confining stirrups
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FEA Section */}
                        <div className="structures-section-header">
                            <h1 className="secondary-title">
                                Nonlinear Finite Element Analysis
                            </h1>
                            <p style={{ textIndent: "2em" }}>
                                We model structures using nonlinear finite
                                element analysis. Laboratory experiments are
                                important but testing requires building large
                                specimens/samples and we can only do few tests.
                                This is where nonlinear finite element analysis
                                comes into play. We first calibrate numerical
                                models based on laboratory testing. Then we run
                                many analyses, for many different parameters and
                                we get a comprehensive information on the
                                behaviour of structures.
                            </p>
                        </div>
                        <div className="structures-wrapper">
                            <div className="structures-border-alt">
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={punchingcoloumn}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Punching around the column
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={model}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Modelling of shear reinforcement in
                                        concrete slabs
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={failureGFRPbeams}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Failure of GFRP reinforced concrete
                                        beams without stirrups
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={failureGFRPbeamsSTIRUPS}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Failure of GFRP reinforced concrete
                                        beams with stirrups
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={symmetric}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Wave propagation, symmetric mode.
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={anti}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        Wave propagation, anti-symmetric mode.
                                    </div>
                                </div>
                                <div className="structures-img-container">
                                    <img
                                        className="structures-img"
                                        src={fea}
                                        alt="Img 4"
                                    />{" "}
                                    <div className="label">
                                        FEA of slab on edge column
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Structures;
