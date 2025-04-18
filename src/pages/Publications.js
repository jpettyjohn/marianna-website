import PublicationList from "../components/PublicationList";
import "../css/Publications.css";

function Publications() {
    return (
        <div className="publications-main">
            <div className="publications-main-container">
                <h1 className="publications-title">Publications</h1>
                <div className="publicaitons-description">
                    *example description*
                </div>
            </div>
            <PublicationList></PublicationList>
        </div>
    );
}
export default Publications;
