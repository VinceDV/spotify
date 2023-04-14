import { useState } from 'react'
import { Container, Row, Col, Form, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BiLibrary } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai'
import React from 'react'

let rockArtists = [
    'queen',
    'u2',
    'thepolice',
    'eagles',
    'thedoors',
    'oasis',
    'thewho',
    'bonjovi',
  ]

  let popArtists = [
    'maroon5',
    'coldplay',
    'onerepublic',
    'jamesblunt',
    'katyperry',
    'arianagrande',
  ]

  let hipHopArtists = [
    'eminem',
    'snoopdogg',
    'lilwayne',
    'drake',
    'kanyewest',
  ]

  let headers = new Headers({
    // sets the headers
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
  })

 let search = async () => {
    let div = document.querySelector('#searchResults .row')
    div.innerHTML = ''
    let searchQuery = document.querySelector('#searchField').value // gets the value from the search box

    if (searchQuery.length > 2) {
      //if there's a value in the search box => fetch the information from rapidapi & display the result
      document.querySelector('#searchResults').style.display = 'block'

      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
            searchQuery,
          {
            method: 'GET',
            headers,
          }
        ) // gets the information

        if (response.ok) {
          let result = await response.json() // transforms the response to json
          let songs = result.data // gets the songs info

          for (let x = 0; x < result.data.length; x++) {
            div.innerHTML += albumCard(result.data[x])
          }
        } else {
          console.log('error')
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      //else just hide the section!
      document.querySelector('#searchResults').style.display = 'none'
    }
  }

  function albumCard(songInfo) {
    // songInfo represents the info for the current song
    // creating the wrapper div
    return `
      <div class="col text-center" id=${songInfo.id}>
        <a href="/album_page.html?id=${songInfo.album.id}">
          <img class="img-fluid" src=${
            songInfo.album.cover_medium
          } alt="1" />
        </a>
        <p>
          <a href="/album_page.html?id=${songInfo.album.id}">
            Album: "${
              songInfo.album.title.length < 16
                ? `${songInfo.album.title}`
                : `${songInfo.album.title.substring(0, 16)}...`
            }"<br>
          </a>
          <a href="/artist_page.html?id=${songInfo.artist.id}">
            Artist: ${songInfo.artist.name}
          </a>
        </p>
      </div>`
  }

 let handleArtist = async (artistName, domQuerySelector) => {
    // artistName = "eminem", "metallica", etc...
    // domQuerySelector = "#rockSection" etc...
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
          artistName,
        {
          method: 'GET',
          headers,
        }
      ) // gets the information
      if (response.ok) {
        let result = await response.json() // transforms the response to json
        let songInfo = result.data
        let div = document.querySelector(domQuerySelector)
        div.innerHTML += albumCard(songInfo[0]) // create a new album tyle
      } else {
        console.log('error')
      }
    } catch (err) {
      console.log(err)
    }
  }

  window.onload = async () => {
    let rockRandomArtists = []
    let popRandomArtists = []
    let hipHopRandomArtists = []

    document.querySelector('#searchField').value = '' // empties search field on page load

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist =
        rockArtists[Math.floor(Math.random() * rockArtists.length)] // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist) // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist)
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist)
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      await handleArtist(rockRandomArtists[j], '#rockSection')

    for (let k = 0; k < popRandomArtists.length; k++)
      await handleArtist(popRandomArtists[k], '#popSection')

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      await handleArtist(hipHopRandomArtists[l], '#hipHopSection')
  }

const Home = () => {
      return (
        <div>
          <div className="container-fluid">
            <div className="row">
              {/*SIDEBAR VERTICAL*/}
              <div className="col-2">
                <div className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
                  <div className="nav-container">
                    <a className="navbar-brand" href="index.html">
                      <img src="/Spotify_Logo.png" alt="Spotify_Logo" width={131} height={40} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <ul>
                          <li>
                            <a className="nav-item nav-link" href="index.html"><i className="fas fa-home fa-lg" />&nbsp;<AiFillHome/> Home
                            </a>
                          </li>
                          <li>
                            <a className="nav-item nav-link" href="#"><i className="fas fa-book-open fa-lg" />&nbsp;<BiLibrary/> Your
                              Library</a>
                          </li>
                          <li>
                            <div className="input-group mt-3">
                              <input type="text" className="form-control mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                              <div className="input-group-append" style={{marginBottom: '4%'}}>
                                <button className="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" onclick="search()">
                                  GO
                                </button>
                              </div>
                            </div>
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
                </div>
              </div>
              {/*END SIDEBAR VERTICAL*/}
              {/*MAIN*/}
              <div className="col-12 col-md-9 offset-md-3 mainPage">
                <div className="row">
                  <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div id="searchResults" style={{display: 'none'}}>
                      <h2>Search Results</h2>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div id="rock">
                      <h2>Rock Classics</h2>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div id="pop">
                      <h2>Pop Culture</h2>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div id="hiphop">
                      <h2>HipHop</h2>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection" />
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
                        <img src="/Shuffle.png" alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src="/Previous.png" alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src="/Play.png" alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src="/Next.png" alt="shuffle" />
                      </a>
                      <a href="#">
                        <img src="/Repeat.png" alt="shuffle" />
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


  export default Home