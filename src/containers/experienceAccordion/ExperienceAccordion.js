import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div key={section["title"]}>
              {section["experiences"].map((experience, index) => {
                return (
                  <ExperienceCard
                    index={index}
                    totalCards={section["experiences"].length}
                    experience={experience}
                    theme={theme}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
