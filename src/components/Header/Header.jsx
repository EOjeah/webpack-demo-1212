import React from 'react';
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import PersonIcon from '@material-ui/icons/Person';
import Icon from "../../logo.svg"

const Header = () => (
  <div className="navbar">
    <div className="container flex">
      <Link to="/" className="logo">
        <img src={Icon} alt="Home Icon"/>
        <h1>dataMeta</h1>
      </Link>

      <div className="nav-items">
        <nav>
          <ul>
            {/* <li>
              <Link className="twitter-icon" to="/certs">
                <CardMembershipIcon />
              </Link>
            </li>
            <li>
              <Link className="github-icon" to="/code">
                <CodeIcon />
              </Link>
            </li> */}
            <li>
              <Link className="person-icon" to="/login">
                <PersonIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Header;
