import "../css/Team.css";
import TeamCard from "../components/TeamCard";
import ajiboye from "../assets/ajiboye.png";
import saad from "../assets/saad.png";
import bill from "../assets/bill.png";
import lamar from "../assets/lamar.png";
import nancy from "../assets/nancy.png";

const member = [
    {
        title: "Ajiboye Bello",
        occupation: "",
        content:
            "Ajiboye holds a B.Sc. in Civil and Environmental Engineering from the University of Lagos, Nigeria, and an M.Sc. in Advanced Structural Analysis and Design Using Composite Materials (FRP++) through the Erasmus Mundus Master’s Program. Before his M.Sc., he gained nine years of industry experience as a Graduate Engineer. He is currently pursuing a Ph.D. with a research focus on the behavior of GFRP bars subjected to abrasive blasting impact under the supervision of Professor Marianna Polak and Professor Kunho Eugene Kim. Beyond academia, he enjoys playing football.",
        email: "a2bello@uwaterloo.ca",
        image: ajiboye,
    },
    {
        title: "Saad Saad",
        content:
            "I joined Professor Polak’s research team as a Postdoctoral Fellow in June 2024. I amcurrently investigating the behavior of Glass Fiber Reinforced Polymer (GFRP) reinforcedconcrete frame joints subject to opening and closing moments using finite elementmodelling with the objective of proposing relevant design and detailing recommendations. During my PhD research, I studied the effects of climate change on concrete bridge decks with particular interest in thermal effects and thermal loads.",
        email: "",
        linkedin: "https://www.linkedin.com/in/saad-saad-531521179/",
        website: "https://orcid.org/0009-0009-4906-8771",
        image: saad,
    },
    {
        title: "Bill Deng",
        content:
            "I received my BASc. For Civil Engineering from the University of Waterloo in 2024. My research focuses on analyzing the bond behaviour of GFRP in concrete.",
        email: "q34deng@uwaterloo.ca",
        linkedin: "https://www.linkedin.com/in/bill-deng-4026721a7/",
        image: bill,
    },
    {
        title: "Lamar Bashbishi",
        content:
            "Hi! My name is Lamar and I graduated from civil engineering at the University of Waterloo in 2022. I decided to pursue a masters because who doesn&#39;t love concrete? Okay...maybe not everyone. My research focused on FRP-reinforced concrete corner joints and the best practices for designing with FRP in regions of low development length. My research involved a lot of lab work: gluing strain gauges, building rebar cages, casting concrete, etc. In my free time I like to read, listen to music and hang out with my friends/cousins. Fun fact, I taught myself how to read Korean, and now I&#39;m trying to learn Japanese!",
        email: "lbashbishi@uwaterloo.ca",
        image: lamar,
    },
    {
        title: "Nancy Kachouh",
        content:
            "joined the Civil and Environmental Engineering Department at the University of Waterloo as a Phd student in May 2024. Her research is on the topic of the behavior and design of concrete slabs reinforced with glass fiber reinforced polymer (GFRP) bar with special consideration of avoiding punching shear failures of such systems. Her work includes experimental and numerical investigations. Before joining Waterloo, Nancy published seven articles in international journals. She also received the American Concrete Institute (ACI) Middle East Fellowship for the 2019-2020 academic year.",
        email: "n2kachou@uwaterloo.ca",
        image: nancy,
    },
    {
        title: "Joshua Ayande",
        content:
            "I am a PhD student in civil and environmental engineering with research interests in Fibre Reinforced Polymers (FRPs), probabilistic modeling of structural behavior, and the structural performance of reinforced concrete systems. My current work focuses on the reliability-based calibration of design formulas in the new Canadian codes for GFRP-reinforced concrete. The goal is to establish rational safety factors to support the safe and efficient use of advanced materials in structural design.”",
        email: "Ayande.joshua@yahoo.com",
    },
];

function Team() {
    return (
        <div className="team-main">
            <div className="team-main-container">
                <h1 className="title">Current Members</h1>
                <hr className="seperator"></hr>
                <TeamCard member={member}></TeamCard>
            </div>
        </div>
    );
}
export default Team;
