import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter ,FiFacebook} from "react-icons/fi";
import Side from "./side";
import { SiLeetcode } from "react-icons/si";

// import { Side } from '@components';
// import { Icon } from '@components/icons';

const socialMedia = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/shahiduljahid71/",
    icon: <FiLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/shahiduljahid",
    icon: <FiGithub />,
  },
  {
    name: "FaceBook",
    url: "https://www.facebook.com/Shahidul.3333",
    icon: <FiFacebook />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/shahidulJahid1",
    icon: <FiTwitter />,
  },
];

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <ul className="socials">
      {socialMedia &&
        socialMedia.map(({ url, name, icon }, i) => (
          <li key={i}>
            <a
              href={url}
              aria-label={name}
              title={name}
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
    </ul>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
