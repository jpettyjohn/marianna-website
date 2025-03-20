import PublicationList from "../components/PublicationList";

function Publications() {
    return (
        <div className="publications-main">
            <h1>Publications</h1>
            <div className="publications-container">
                <PublicationList></PublicationList>
            </div>
        </div>
    );
}
export default Publications;
