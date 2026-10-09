import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  uiText
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{uiText.navigation.skills}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{uiText.navigation.workExperience}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#projects">{uiText.navigation.projects}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{uiText.navigation.achievements}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{uiText.navigation.blogs}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{uiText.navigation.talks}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{uiText.navigation.resume}</a>
            </li>
          )}
          <li>
            <a href="#contact">{uiText.navigation.contact}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
