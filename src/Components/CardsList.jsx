import React from "react";
import social_info from "../Api/social_info.json";

const CardList = () => {
  return (
    <div className="card_container">
      {social_info.map((curEle, index) => (
        <div key = {curEle.id} className="cards">
          <section key={curEle.id} className={curEle.className}>
            <h2>{curEle.name}</h2>
            <img src={curEle.imgUrl} alt={curEle.name} />
            <br />
            <a href={curEle.siteUrl}>Visit!</a>
          </section>
          </div>
        )
      )}
    </div>
  );
};

export default CardList;
