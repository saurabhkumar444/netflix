import React from "react";
import Banner from "./Banner";
import "./HomePage.css";
import NavBar from "./NavBar";
import Row from "./Row";
import requests from "../Requests";

function HomePage() {
  return (
    <div className="homePage">
      {/* navBar */}
      <NavBar />

      {/* Banner */}
      <Banner />

      {/* row */}
      <Row
        title="NetFlix Orignal"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopReted} />
      <Row title="Action Moive" fetchUrl={requests.fetchActionMoives} />
      <Row title="Comedy Moive" fetchUrl={requests.fetchComedyMoives} />
      <Row title="Horror Moive" fetchUrl={requests.fetchHorrorMoives} />
      <Row title="Romance Moive" fetchUrl={requests.fetchRomanceMoives} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
