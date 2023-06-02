import React from "react";

import "./backgroundTopPage.css";

const BackgroundTopPage = ({ text, img, left }) => {
  // function cambiandoBackgroundImage() {
  //   var elemento = document.getElementById("backgroundImage");
  //   elemento.style.setProperty(
  //     "background-image",
  //     " url(../../../public/img/QuienesSomosPortada.png);"
  //   );
  // }
  // cambiandoBackgroundImage();

  return (
    <div id="backgroundImage" className="backgroundImage" style={{ backgroundImage: `url(/img/${img})` }}>
      <div className="backgroundImage__blockText">
        <h2 style={{marginLeft: `${left}`}}>{text}</h2>
        <h1>
          KAPAK <br />
          HUAYTA
        </h1>
      </div>
    </div>
  );
};

export default BackgroundTopPage;
