import "../styles/leftnav.css";
import React from 'react';
import home from "../assets/home.png";
import shorts from "../assets/shorts.png";
import bag from "../assets/bag.png";
import shop from "../assets/clothes.png";
import games from "../assets/games.png";
import live from "../assets/live.png";
import learning from "../assets/lightbulb.png";
import news from "../assets/news.png";
import trending from "../assets/trending.png";
import trophy from "../assets/trophy.png";
import video from "../assets/video.png";
import podcast from "../assets/podcast.png";
import music from "../assets/music.png";



const Leftnav = () => {
  return (
    <>
      <div className="container">
        <div className="first">
          <div className="home flex">
            <img src={home} alt="" />
            <h3>Home</h3>
          </div>
          <div className="shorts flex">
            <img src={shorts} alt="" />
            <h3>Shorts</h3>
          </div>
          <div className="subscription flex">
            <img src={home} alt="" />
            <h3>Subscriptions</h3>
          </div>
        </div>
        <div className="gap"></div>
        <div className="second">
          <h2>Explore</h2>
          <div className="trending flex">
            <img src={trending} alt="" />
            <h3>Trending</h3>
          </div>
          <div className="shopping flex">
            <img src={shop} alt="" />
            <h3>Shopping</h3>
          </div>
          <div className="music flex">
            <img src={music} alt="" />
            <h3>Music</h3>
          </div>
          <div className="movies flex">
            <img src={video} alt="" />
            <h3>Movies</h3>
          </div>
          <div className="live flex">
            <img src={live} alt="" />
            <h3>Live</h3>
          </div>
          <div className="gaming flex">
            <img src={games} alt="" />
            <h3>Gaming</h3>
          </div>
          <div className="news flex">
            <img src={news} alt="" />
            <h3>News</h3>
          </div>
          <div className="learning flex">
            <img src={learning} alt="" />
            <h3>Learning</h3>
          </div>
          <div className="sports flex">
            <img src={trophy} alt="" />
            <h3>Sports</h3>
          </div>
          <div className="fashion flex">
            <img src={bag} alt="" />
            <h3>Fashion and Beauty</h3>
          </div>
          <div className="podcast flex">
            <img src={podcast} alt="" />
            <h3>Podcasts</h3>
          </div>
          <div className="gap"></div>
        </div>
      </div>
    </>
  )
};

export default Leftnav;