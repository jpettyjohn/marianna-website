import PublicationList from "../components/PublicationList";
import "../css/Publications.css";

function Publications() {
    return (
        <div className="publications-main">
            <div className="publications-main-container">
                <h1 className="title">Publications</h1>
                <PublicationList></PublicationList>
            </div>
        </div>
    );
}
export default Publications;
