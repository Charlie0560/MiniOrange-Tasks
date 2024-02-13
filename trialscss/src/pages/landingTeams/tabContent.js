import React from "react";
import teamsCSS from "../../styles/landingTeams.module.scss";
import Image from "next/image";

function tabContent({ tabdata }) {
  // console.log(tabdata)
  const t = tabdata;
  return (
    <div className={`container ${teamsCSS.tabContent}`}>
      <h1 className={teamsCSS.teamTabHeading}>{t.heading}</h1>
      <div className={teamsCSS.tabTextDiv}>
        <p>{t.text}</p>
        <a href={t.url}>Learn More</a>
      </div>
      <Image src={t.img} className={`image-fluid ${teamsCSS.tabimg}`} />
    </div>
  );
}

export default tabContent;
