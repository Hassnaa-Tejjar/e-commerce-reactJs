import React from "react";
import Accordion1 from "./Accordion1";



import illustration__woman_desktop from "../assets/illustration-woman-online-desktop.svg";


const questionsAnswers = [
  {
    question: "BEN'SMODERNHR",
    answer:
      "Pour plus d'informations, visitez le site http://www.bensmodernhr.com/",
  },
  {
    question: "JILweb",
    answer:
      "Pour plus d'informations, visitez le site http://www.jilweb.com/",
  },
  {
    question: "Complexe touristique Azzahrae",
    answer: ``,
  },
 
];

const References = () => {
  return (
    <div className="pagee">
    <div className="containerr">
      <div className="component">
        <div className="illustration">
        

          <img
            className="illustration__woman-desktop"
            src={illustration__woman_desktop}
            alt="illustration with woman"
          />

        </div>
        <Accordion1 questionsAnswers={questionsAnswers} />
      </div>

    </div>
    </div>
  );
};

export default References;