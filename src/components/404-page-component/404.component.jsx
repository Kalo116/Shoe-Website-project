import { Link } from "react-router-dom";

import './404.styles.scss';

export const NotFound = () => {
    return (
        <div className="not-found-container">
            <h2 className="not-found-title">Error 404</h2>
            <p className="not-found-message">
                The page you are trying to reach was not found!
            </p>
            <p className="not-found-link">
                <span> Go back to </span>
                <Link className="not-found-home-link" to='/'>
                    Homepage
                </Link>
            </p>
        </div>
    );
};