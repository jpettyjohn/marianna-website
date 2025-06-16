import "../css/Teaching.css";
import TeachingList from "../components/TeachingList";

const current = [
    {
        title: "Reinforced Concrete Design (undergraduate course, CivE 414)",
        content:
            "This course is an introduction to the design of reinforced concrete members concentrating on flexure and shear.  The course content is intended to provide a practical understanding of material behaviour, the process of structural design, and the relationship between structural analysis and design.  Advanced design topics are introduced, as well as some basic structural systems concepts",
        link: "https://ucalendar.uwaterloo.ca/2021/COURSE/course-CIVE.html#CIVE414",
    },
    {
        title: "Reinforced Concrete Mechanics and Design (graduate course, CivE  603)",
        content:
            "The objective of this course is to provide understanding of the behaviour of reinforced concrete members under variety of loading conditions.  Reinforced concrete is presented as a composite material, consisting of concrete with nonlinear-plastic-fracturing material properties and reinforcement with linear elastic-plastic properties. The course includes both analysis and design of structural concrete based on mechanical principles and the background for the design standards.  The topics include flexure and axial loads, shear in slender and in deep concrete members, Strut and Tie (ST) modelling,  shear friction, punching shear in concrete slabs, concrete frame connections, and the introduction to numerical modelling of reinforced concrete. By completing this course the students  gain understanding of why and how reinforced concrete transfers stresses and carries loads. They can conduct analysis and design of various reinforced concrete members by following mechanical principles, by strut and tie (truss) models, mechanics-based models and the corresponding code approaches, and basic principles of nonlinear material modelling related to reinforced concrete.",
        link: "https://uwaterloo.ca/academic-calendar/graduate-studies/catalog#/courses/BJl_sdNXK2?q=CivE%20603&&limit=20&skip=0&bc=true&bcCurrent=&bcCurrent=Reinforced%20Concrete%20Mechanics%20and%20Design&bcItemType=courses",
    },
];
const past = [
    {
        title: "Finite Element Method (undergraduate and graduate courses)",
        content:
            "Introduction to finite element analysis focusing on element formulations, matrix assembly, transformation, solution methods, and convergence. The course discusses fundamental concepts of finite element method, variational and differential formulations of the method, and solutions to various field problems.",
        link: "",
    },
    {
        title: "Advanced Structural Analysis (undergraduate course)",
        content:
            "Advance course in structural analysis. It includes review of classical forms of stiffness and flexibility methods, energy methods, matrix structural analysis of two and three-dimensional frameworks and introduction to nonlinear problems.",
        link: "",
    },
    {
        title: "Project Capstone Design Course (undergraduate course)",
        content:
            "Two-semester course with the emphasis is on project management, technical content, innovation, team work, report writing and presentations.",
        link: "",
    },
    {
        title: "Statics and Solid Mechanics (undergraduate courses)",
        content:
            "First and second year undergraduate courses outlining introduction to statics, stress and strain analysis, energy methods, cables and arches, deflections, bending, shear, torsion, introduction to structural analysis, and basic concepts of structural design.",
        link: "",
    },
];

function Teaching() {
    return (
        <div className="teaching-main">
            <div className="teaching-main-container">
                <h2 className="title">Current Teaching</h2>
                <hr className="seperator"></hr>
                <TeachingList teachings={current}></TeachingList>
                <h2 className="title">Past Teaching</h2>
                <hr className="seperator"></hr>
                <TeachingList teachings={past}></TeachingList>
            </div>
        </div>
    );
}
export default Teaching;
