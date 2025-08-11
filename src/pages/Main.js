import Slideshow from "../components/Slidershow";
import ajiboye from "../assets/team/ajiboye.png";
import saad from "../assets/team/saad.png";
import bill from "../assets/team/bill.png";
import lamar from "../assets/team/lamar.png";
import nancy from "../assets/team/nancy.png";
import kartherine from "../assets/team/katherine.png";
import jackson from "../assets/team/jackson.png";
import joshua from "../assets/team/joshua.png";
import zahra from "../assets/team/zahra.png";
import ffpp from "../assets/team/marianna.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import teamA from "../data/teamdataset";
import "../css/Main.css";

function Main() {
    return (
        <div className="main">
            <div className="main-biography-container">
                <img className="main-biography-img" src={ffpp} />
                <div className="main-biography-card">
                    <div className="main-biography-content">
                        <p
                            className="main-biography-text"
                            style={{ textIndent: "2em" }}
                        >
                            Greetings! Welcome to my website. I am a professor
                            in the Department of Civil and Environmental
                            Engineering, University of Waterloo, Canada where I
                            also hold the University Research Chair. I work in
                            structural engineering and in structural materials.
                            Please feel free to explore my website further. On
                            the other note- I like to play tennis, golf, and
                            skiing. I also love to travel.
                        </p>
                    </div>
                </div>
            </div>
            <div className="main-slideshow-container">
                <h1 className="main-team-title">Research Projects</h1>
                <div className="main-slideshow-card">
                    <div className="main-slideshow-content">
                        <p style={{ textIndent: "2em" }}>
                            I also enjoy interdisciplinary work with my
                            colleagues at the University of Waterloo and
                            worldwide. Our work is related to safety and
                            efficiency of concrete infrastructure, and we deal
                            with how buildings, bridges, roads and other
                            infrastructure are designed and built. We do
                            full-scale structural testing.
                        </p>

                        <p style={{ textIndent: "2em" }}>
                            Large portions of structures are tested under
                            controlled loads, their response is monitored, and
                            conclusions are formulated that can help in future
                            structural designs. We also analyze structures using
                            nonlinear finite element software. We investigate
                            materials, like fibre reinforced polymer plastic
                            bars as reinforcement and 3-D printing to construct
                            concrete buildings. We aim at improving designs to
                            make future structures safer and better.
                        </p>
                    </div>

                    <Slideshow images={teamA}></Slideshow>
                </div>

                <div className="main-team-button">
                    <Button variant="contained" component={Link} to="/research">
                        Read more
                    </Button>
                </div>
            </div>
            <div className="main-team-container">
                <h1 className="main-team-title">Our Team</h1>
                <p style={{ textIndent: "2em" }}>
                    We have an active research team, sometimes called Team-MAP.
                    Several graduate students are busy solving infrastructure
                    problems!
                </p>
                <div className="main-team-card-container">
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={ajiboye} />
                    </div>
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={saad} />
                    </div>
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={bill} />
                        {/* <h2 className="main-team-card-title">Ajiboye Bello</h2> */}
                    </div>
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={lamar} />
                    </div>
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={nancy} />
                        {/* <h2 className="main-team-card-title">Ajiboye Bello</h2> */}
                    </div>
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={kartherine} />
                        {/* <h2 className="main-team-card-title">Ajiboye Bello</h2> */}
                    </div>
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={jackson} />
                        {/* <h2 className="main-team-card-title">Ajiboye Bello</h2> */}
                    </div>
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={joshua} />
                        {/* <h2 className="main-team-card-title">Ajiboye Bello</h2> */}
                    </div>
                    <div className="main-team-card">
                        <img className="main-team-card-img" src={zahra} />
                        {/* <h2 className="main-team-card-title">Ajiboye Bello</h2> */}
                    </div>
                </div>
                <div className="main-team-button">
                    <Button variant="contained" component={Link} to="/team">
                        More info
                    </Button>
                </div>
            </div>
            <div className="main-slideshow-container">
                <div className="main-aboutme-content">
                    <h3 className="main-aboutme-title">Education</h3>
                    <p>
                        PhD University of Toronto, Department of Civil
                        Engineering, Canada <br></br>MSc BSc Cracow University
                        of Technology, Department of Civil Engineering, Poland
                    </p>
                    <h3 className="main-aboutme-title">
                        Professional Experience
                    </h3>
                    <p>
                        Professor<br></br> University Research Chair<br></br>{" "}
                        Department of Civil and Environmental Engineering,
                        <br></br> University of Waterloo.<br></br>
                        Waterloo,Canada.<br></br> <br></br> Visiting Professor:
                        <br></br>
                        University of Stuttgart , Germany <br></br>Technical
                        University of Berlin <br></br> Germany University of
                        Wuppertal, Germany<br></br>
                        Cracow University of Technology Poland <br></br>Silesian
                        University of Technology, Poland<br></br>
                        <br></br>Design Engineer: <br></br>Cracow Poland{" "}
                        <br></br>Toronto Canada.
                    </p>
                    <h3 className="main-aboutme-title">Awards and Honors</h3>
                    <p>
                        University Research Chair, University of Waterloo,
                        Canada<br></br> Fellow of the Canadian Academy of
                        Engineering<br></br>
                        Fellow of the Canadian Society of Civil Engineering
                        <br></br>
                        Fellow of the American Concrete Institute Humboldt
                        <br></br>
                        Research Fellowships, Germany
                    </p>
                    <h3 className="main-aboutme-title">
                        Professional Affliations
                    </h3>
                    <p>
                        Canadian Society of Civil Engineering, CSCE<br></br>
                        American Society of Civil Engineers, ASCE<br></br>{" "}
                        American Concrete Institute, ACI<br></br> ACI Committee
                        445: Shear and Torsion,<br></br> ACI 445C: Punching
                        Shear in Slabs,<br></br> ACI Committee 440: Fiber
                        Reinforced polymer reinforcements.<br></br> ACI 440C{" "}
                        <br></br>ACI Committee 564:3-D Printing with
                        cementitious materials<br></br>
                        ACI Committee 435: Deflections of Reinforced Concrete
                        Structures. fib-CEB The International Federation for
                        Structural Concrete Transportation Research Board TRB
                        <br></br>
                        TRB Committee AKB10 - Innovative Highway Structures and
                        Appurtenances Council of Polish Engineers in North
                        America<br></br>Professional Engineer&#39;s Ontario
                        (PEO)
                    </p>
                </div>
            </div>
        </div>
    );
    /* 
    ADD
    - slideshow of mariannas best work
    - add socials and other important links
    */
}
export default Main;
