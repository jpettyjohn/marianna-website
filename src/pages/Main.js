import Slideshow from "../components/Slidershow";
import ajiboye from "../assets/ajiboye.png";
import saad from "../assets/saad.png";
import bill from "../assets/bill.png";
import lamar from "../assets/lamar.png";
import nancy from "../assets/nancy.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../css/Main.css";

function Main() {
    return (
        <div className="main">
            <div className="main-biography-container">
                <img className="main-biography-img" src={nancy} />
                <div className="main-biography-card">
                    <div className="main-biography-content">
                        <p style={{ textIndent: "2em" }}>
                            Greetings! Welcome to my website. I am a professor
                            in the Department of Civil and Environmental
                            Engineering, University of Waterloo, Canada where I
                            also hold the University Research Chair. I work in
                            structural engineering and in structural materials.
                            We have an active research team, sometimes called
                            Team-MAP. Several graduate students are busy solving
                            infrastructure problems! I also enjoy
                            interdisciplinary work with my colleagues at the
                            University of Waterloo and worldwide. Our work is
                            related to safety and efficiency of concrete
                            infrastructure, and we deal with how buildings,
                            bridges, roads and other infrastructure are designed
                            and built.
                        </p>
                        <p style={{ textIndent: "2em" }}>
                            We do full-scale structural testing. Large portions
                            of structures are tested under controlled loads,
                            their response is monitored, and conclusions are
                            formulated that can help in future structural
                            designs. We also analyze structures using nonlinear
                            finite element software. We investigate materials,
                            like fibre reinforced polymer plastic bars as
                            reinforcement and 3-D printing to construct concrete
                            buildings. We aim at improving designs to make
                            future structures safer and better.
                        </p>
                    </div>
                </div>
            </div>
            <div className="main-slideshow-container">
                <h1 className="main-team-title">Research Projects</h1>
                <Slideshow></Slideshow>
                <div className="main-team-button">
                    <Button variant="contained" component={Link} to="/research">
                        Read more
                    </Button>
                </div>
            </div>
            <div className="main-team-container">
                <h1 className="main-team-title">Our Team</h1>
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
                </div>
                <div className="main-team-button">
                    <Button variant="contained" component={Link} to="/team">
                        Read more
                    </Button>
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
