import { Logourl } from "../utils/constants";
import { Link } from "react-router-dom";
const Header =() =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={Logourl}
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                <li><Link to="/">Timer</Link></li>
                <li><Link to="/wishes">Wishes</Link></li>
                <li><Link to="/album">Album</Link></li>
                
                <li><Link to="/quiz">Quiz</Link></li>
                <li><Link to="/party">Party</Link></li>
                <li></li>
                </ul>
                
            </div>
                
            </div>
            );
};

export default Header;