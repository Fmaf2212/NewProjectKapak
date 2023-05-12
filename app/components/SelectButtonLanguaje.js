"use client";

import React, { useState } from "react";

const SelectButtonLanguaje = () => {
  const [isSelected, setIsSelected] = useState(true);
  const styles = {
    buttonUnderline1:{
      textDecoration: isSelected ? "underline" : "none"
    },
    buttonUnderline2:{
      textDecoration: isSelected ? "none" : "underline"
    }
  };

  return (
    <div
      style={{
        color: "white",
        fontFamily: "arial",
        fontSize: "22px",
        display: "flex",
        gap: "5px",
        marginTop: "10px",
      }}
    >
      <button
        // style={{ textDecoration: `${isSelected} ? underline : none` }}
        style={styles.buttonUnderline1}
        onClick={()=>setIsSelected(!isSelected)}
      >
        Español
      </button>
      <span>/</span>
      <button 
        style={styles.buttonUnderline2}
        onClick={()=>setIsSelected(!isSelected)}
      >
        Ingles
      </button>
    </div>
  );
};

export default SelectButtonLanguaje;
