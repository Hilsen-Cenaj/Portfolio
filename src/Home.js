import React from "react";
import MainImg from "./images/main.jpg";
import MeImg from "./images/me.jpg";
import CrImg from "./images/cr-icon.png";

const Home = () => {
  return (
    <div>
      <div className="header">
        {/* <div className="home-img"></div> */}
        <img src={MainImg} className="home-img" alt="main-image" />

        <div className="home-container">
          <h1>Hilsen Cenaj</h1>
          <h2>Welcome to my Portfolio</h2>
          <h2 id="soft-eng">Software Engineering</h2>

          <button
            className="more-btn"
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            More
          </button>
        </div>
      </div>

      <div className="main">
        <table>
          <tr>
            <td>
              <h3>About Me</h3>
              <p>
                I am a student at Athens University of Economics and Bussiness
                (AUEB).
              </p>
              <p></p>
            </td>
            <th>
              <img
                className="ps-img"
                src={MeImg}
                width="200"
                height="270"
                alt="Personal image"
              />
            </th>
            <td>
              <h3>Personal Info</h3>
              <ul>
                <li>Name: Hilsen Cenaj</li>
                <li>Birth: 28/02/1998</li>
                <li>E-mail: christsenaj@gmail.com</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>

      <hr />
      <div className="footer">
        <p>
          Copyright
          <img src={CrImg} alt="copyright-icon" width="15" height="15" /> 2020 -
          Hilsen Cenaj
        </p>
      </div>
    </div>
  );
};

export default Home;
