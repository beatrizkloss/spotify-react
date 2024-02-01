import React from "react";

import "./Reset.css";
import "./Vars.css";
import "./Main.css";
import "./Media-queries.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import artista1 from "../assets/playlist/1.jpeg";
import artista2 from "../assets/playlist/2.png";
import artista3 from "../assets/playlist/3.jpeg";
import artista4 from "../assets/playlist/4.jpeg";
import artista5 from "../assets/playlist/5.jpeg";
import artista6 from "../assets/playlist/6.jpeg";
import artista7 from "../assets/playlist/7.jpeg";
import artista8 from "../assets/playlist/8.jpeg";
import artista9 from "../assets/playlist/9.jpeg";
import artista10 from "../assets/playlist/10.jpeg";
import artista11 from "../assets/playlist/11.jpeg";
import artista12 from "../assets/playlist/12.jpeg";
import artista13 from "../assets/playlist/13.jpeg";
import artista14 from "../assets/playlist/14.jpeg";
import artista15 from "../assets/playlist/15.jpeg";

const Main = ({ data, showCards }) => {
  return (
    <div>
      {showCards ? (
        <div className="playlist-container">
          <div id="result-playlist">
            <div className="playlist">
              <h1 id="greeting">Boas vindas</h1>
              <h2 className="session">Navegar por todas as seções</h2>
            </div>
          </div>

          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">
                <a href="" className="cards">
                  <div className="cards card1">
                    <img src={artista1} alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card2">
                    <img src={artista2} alt="" />
                    <span>Feitos para você</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card3">
                    <img src={artista3} alt="" />
                    <span>Lançamentos</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card4">
                    <img src={artista4} alt="" />
                    <span>Creators</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card5">
                    <img src={artista5} alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card6">
                    <img src={artista6} alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card7">
                    <img src={artista7} alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card8">
                    <img src={artista8} alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card9">
                    <img src={artista9} alt="" />
                    <span>Funk</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card10">
                    <img src={artista10} alt="" />
                    <span>MPB</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card11">
                    <img src={artista11} alt="" />
                    <span>Rock</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card12">
                    <img src={artista12} alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card13">
                    <img src={artista13} alt="" />
                    <span>Indie</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card14">
                    <img src={artista14} alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card15">
                    <img src={artista15} alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
              </section>
            </div>
          </div>
          <div className="scroll-footer">
            <div className="scroll-footer__container">
              <div className="scroll-footer_um">
                <div className="footer-contatos">
                  <h2>Empresas</h2>
                  <ul>
                    <li>
                      <a href="">Sobre</a>
                    </li>
                    <li>
                      <a href="">Empregos</a>
                    </li>
                    <li>
                      <a href="">For The Record</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-contatos">
                  <h2>Comunidades</h2>
                  <ul>
                    <li>
                      <a href="">Para Artistas</a>
                    </li>
                    <li>
                      <a href="">Desenvolvedores</a>
                    </li>
                    <li>
                      <a href="">Publicidade</a>
                    </li>
                    <li>
                      <a href="">Fornecedores</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-contatos">
                  <h2>Links Úteis</h2>
                  <ul>
                    <li>
                      <a href="">Suporte</a>
                    </li>
                    <li>
                      <a href="">Aplicativo Móvel Grátis</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="scrool-footer_fim">
              <hr />
              <div className="copy-footer">
                <p>© 2024 Feito por Beatriz Kloss | Imersão Alura</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {!showCards && data && data.length > 0 ? (
        <div id="result-artist" className={data ? "" : "hidden"}>
          <div className="grid-container">
            {data &&
              data.map((artist, index) => (
                <div className="artist-card" key={index}>
                  <div className="card-img">
                    <img
                      id="artist-img"
                      className="artist-img"
                      src={artist.urlImg}
                      alt=""
                    />
                    <div className="play">
                      <span>
                        <FontAwesomeIcon icon={faPlay} />
                      </span>
                    </div>
                  </div>
                  <div className="card-text">
                    <a title={artist.name} className="vst" href=""></a>
                    <span className="artist-name" id="artist-name">
                      {artist.name}
                    </span>
                    <span className="artist-categorie">artista</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Main;
