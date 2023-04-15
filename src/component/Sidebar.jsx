import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai"
import {BiLibrary} from "react-icons/bi"

const Sidebar = (props) => {
  const location = useLocation();
  return (
    <>
      <div className="col-2">
        <Nav
          className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
          id="sidebar"
        >
          <div className="nav-container">
            <Link to="/" className="navbar-brand">
              <img
                src="/Spotify_Logo.png"
                alt="Spotify_Logo"
                width="131"
                height="40"
              />{" "}
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <Link to="/" className="navbar-brand">
                          <span>&nbsp;<AiOutlineHome/> Home{" "}</span>
                    </Link>
                  </li>
                  <li>
                    <a className="nav-item nav-link" href="void(0)">
                    <span>&nbsp;<BiLibrary/> Your Library{" "}</span>

                    </a>
                  </li>
                  <li>
                    {location.pathname === "/" && (
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          value={props.searched}
                          onChange={(e) => {
                            props.changeSearch(e.target.value);
                          }}
                        />
                        <div
                          className="input-group-append"
                          //style="margin-bottom: 4%"
                        >
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                            onClick={() => {
                              props.setCont(props.cont + 1);
                            }}
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <a href="void(0)">Cookie Policy</a> |<a href="void(0)"> Privacy</a>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
