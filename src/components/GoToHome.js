import { Link } from "react-router-dom";

const GoToHome = () => {
    // Back to Home Button
    return (
        <Link to="/">
            <i className="fas fa-3x fa-arrow-alt-circle-left"></i>
        </Link>
    );
}
 
export default GoToHome;