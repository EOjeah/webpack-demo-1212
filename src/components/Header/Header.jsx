import React from 'react';
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => (
  <div className="navbar">
    <div className="container flex">
      <Link to="/" className="logo">
        <h1>dataMeta</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link className="twitter-icon" to="/certs">
              <CardMembershipIcon />
            </Link>
          </li>
          <li>
            <Link className="github-icon" to="/code">
              <CodeIcon />
            </Link>
          </li>
          <li>
            <Link className="linkedin-icon" to="/dashboard">
              <LinkedInIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
