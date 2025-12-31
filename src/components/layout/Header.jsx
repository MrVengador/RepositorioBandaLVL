import { NavLink } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/navbar.css";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <div className="container-fluid">

                    {/* Brand */}
                    <NavLink
                        to="/"
                        className="navbar-brand d-flex align-items-center gap-2"
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpVuRzKGKXQAQDnq0q3RysgGW715TFslU2w&s"
                            alt="Logo"
                            width="42"
                            height="42"
                        // className="rounded-circle border border-warning"
                        />
                        <span className="navbar-title">
                            Repositorio Banda LVL
                        </span>
                    </NavLink>

                    {/* Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <NavLink
                                    to="/marchas"
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    Marchas
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/presentaciones"
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    Presentaciones
                                </NavLink>
                            </li>

                            {/* <li className="nav-item">
                                <NavLink
                                    to="/archivos"
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    Archivos
                                </NavLink>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
