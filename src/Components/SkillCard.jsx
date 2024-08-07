import React from "react";
import skill_data from "../Api/skill_data.json";

const SkillCard = () => {
  return (
    <>
      <div className="skill-container">
        {skill_data.map((curEle, index) => (
          <div key = {index}className="skill">
            <div className="skill-img">
              <img src={curEle.imgUrl} alt={curEle.name}/>
            </div>
            <div className="skill-info">
              <h3>{curEle.name}</h3>
              <p>{curEle.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillCard;
