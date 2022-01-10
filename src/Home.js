import React from "react";
import CopyRight from "./CopyRight";
import MainImg from "./images/main.jpg";
import MeImg from "./images/me.jpg";

const Home = () => {
  return (
    <>
      <header>
        <img src={MainImg} className="home-img" alt="main" />

        <div className="home-container">
          <h1>Hilsen Cenaj</h1>
          <h2>Welcome to my Portfolio</h2>
          <h3>Software Engineering</h3>

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
      </header>

      <main>
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
                alt="Personal"
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
      </main>

      <hr />
      <footer>
        <CopyRight />
      </footer>
    </>
  );
};

export default Home;
