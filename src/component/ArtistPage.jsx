import { useState } from 'react'
import { Container, Row, Col, Form, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'


const ArtistPage = () => {
      return (
        <div>
          <div className="container-fluid">
            <div className="row">
              {/*SIDEBAR VERTICAL*/}
              <div className="col-2">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
                  <div className="nav-container">
                    <a className="navbar-brand" href="index.html">
                      <img src="logo/Spotify_Logo.png" alt="Spotify_Logo" width={131} height={40} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <ul>
                          <li>
                            <a className="nav-item nav-link" href="index.html"><i className="fas fa-home fa-lg" />&nbsp; Home
                            </a>
                          </li>
                          <li>
                            <a className="nav-item nav-link" href="#"><i className="fas fa-book-open fa-lg" />&nbsp; Your
                              Library</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="nav-btn">
                    <button className="btn signup-btn" type="button">Sign Up</button>
                    <button className="btn login-btn" type="button">Login</button>
                    <a href="#">Cookie Policy</a> |
                    <a href="#"> Privacy</a>
                  </div>
                </nav>
              </div>
              {/*END SIDEBAR VERTICAL*/}
              {/*MAIN*/}
              <div className="col-12 col-md-9 offset-md-3 mainPage">
                <div className="row mb-3">
                  <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-10 col-lg-10 mt-5">
                    <h2 className="titleMain" />
                    <div id="followers" />
                    <div className="d-flex justify-content-center" id="button-container">
                      <button className="btn btn-success mr-2 mainButton d-none" id="playButton">
                        PLAY
                      </button>
                      <button className="btn btn-outline-light mainButton d-none" id="followButton">
                        FOLLOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                    <div className="mt-4 d-flex justify-content-start">
                      <h2 className="text-white font-weight-bold">Tracks</h2>
                    </div>
                    <div className="pt-5 mb-5">
                      <div className="row" id="apiLoaded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*END MAIN*/}
          {/*NAVBAR FLEX-BOTTOM*/}
          <div className="container-fluid fixed-bottom bg-container pt-1">
            <div className="row">
              <div className="col-lg-10 offset-lg-2">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                    <div className="row">
                      <a href="#">
                        <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src="playerbuttons/Previous.png" alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src="playerbuttons/Play.png" alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src="playerbuttons/Next.png" alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src="playerbuttons/Repeat.png" alt="shuffle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center playBar py-3">
                  <div className="col-8 col-md-6">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*END NAVBAR BOTTOM*/}
        </div>
      );
    }
  export default ArtistPage