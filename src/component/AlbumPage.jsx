import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { headers } from "./Home";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { addSong } from "../redux/actions";
import Footer from "./Footer";

const AlbumPage = () => {
  const params = useParams().id;
  const [albumDetails, setAlbumDetails] = useState(null);
  const dispatch = useDispatch();
  //console.log(params)

  const getAlbumFetch = () => {
    return fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + params,
      {
        method: "GET",
        headers,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("ERROR during fetch");
        }
      })
      .then((dato) => {
        // console.log(dato);
        setAlbumDetails(dato);
      });
  };

  useEffect(() => {
    getAlbumFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Sidebar />
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
          <div className="col-md-3 pt-5 text-center" id="img-container">
            {albumDetails && (
              <>
                <img
                  src={albumDetails.cover}
                  className="card-img img-fluid"
                  alt="Album"
                />
                <div className="mt-4 text-center">
                  <p className="album-title">{albumDetails.title}</p>
                </div>
                <div className="text-center">
                  <p className="artist-name">{albumDetails.artist.name}</p>
                </div>
                <div className="mt-4 text-center">
                  <button
                    id="btnPlay"
                    className="btn btn-success"
                    type="button"
                  >
                    Play
                  </button>
                </div>
                `
              </>
            )}
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {albumDetails &&
                  albumDetails.tracks.data.map((track) => {
                    return (
                      <div
                        key={track.id}
                        className="py-3 trackHover"
                        onClick={() => {
                          dispatch(addSong(track));
                        }}
                      >
                        <span
                          className="card-title trackHover px-3"
                          style={{ color: "white" }}
                        >
                          {track.title}
                        </span>
                        <small className="duration" style={{ color: "white" }}>
                          {Math.floor(
                            parseInt(track.duration) / 60
                          )}
                          :
                          {parseInt(track.duration) % 60 < 10
                            ? "0" + (parseInt(track.duration) % 60)
                            : parseInt(track.duration) % 60}
                        </small>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AlbumPage;
