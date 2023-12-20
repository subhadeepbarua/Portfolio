import React from "react";
import "./projects.css";
import sail from "./icon/SAIL_Logo.png";
import POS from "./icon/POS_Logo.png";
import bill from "./icon/BILL_Logo.png";
import BOOKG from "./icon/BOOKG_Logo.png";

const Projects = () => {
  return (
    <section id="projects">
      <span className="projectHeading">Projects</span>

      <div className="projectBlock">
      <div className="projectItem">
          <div className="projectItemCom">
            <img src={BOOKG} alt="" className="projectImg" />
          </div>
          <div className="projectText">
            <h2><a className="projectLink" rel="noreferrer" href='https://celadon-brioche-879672.netlify.app/' target="_blank">Book Reccommendation </a></h2>
            <p>
              Book Reccommendation APP for suggesting books based on user's profile and plot preference
            </p>
            <p>
              {" "}
              <b>Technologies:</b> React.js, Node.js, Express, MongoDB
            </p>
          </div>
        </div>
        <div className="projectItem">
          <div className="projectItemCom">
            <img src={POS} alt="" className="projectImg" />
          </div>
          <div className="projectText">
            <h2><a className="projectLink" rel="noreferrer" href='https://super-maamoul-3d007e.netlify.app/' target="_blank">Point of Sale webApp </a></h2>
            <p>
              Inventory window for managing sales transactions, inventory, and
              other business-related tasks.
            </p>
            <p>
              {" "}
              <b>Technologies:</b> React.js, Node.js, Express, MongoDB
            </p>
          </div>
        </div>
        <div className="projectItem">
        <div className="projectItemCom">
            <img src={bill} alt="" className="projectImg" />
          </div>
          <div className="projectText">
            <h2><a className="projectLink" rel="noreferrer" href='https://super-bavarois-3ab780.netlify.app/' target="_blank">Billing webApp</a> </h2>
            <p>
              To Store and retrive bills and customer details in imports and
              exports{" "}
            </p>
            <p>
              {" "}
              <b>Technologies:</b> React.js, AppScript, G-Sheet
            </p>
          </div>
        </div>
        <div className="projectItem">
          <div className="projectItemCom">
            <img src={sail} alt="" className="projectImg" />
          </div>
          <div className="projectText">
            <h2> Maintenance Scheduler </h2>
            <p>
              To keep track of the internal machines on the Production dept. and
              schedule there Maintenance{" "}
            </p>
            <p>
              {" "}
              <b>Technologies:</b> Html, CSS, js, BootStrap, AppScript, G-Sheet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
