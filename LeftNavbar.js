import React, { useState } from 'react';
import './LeftNavbar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Divider } from '@mui/material';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import MicExternalOnOutlinedIcon from '@mui/icons-material/MicExternalOnOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';


const LeftNavbar = () => {
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isInternetCultureOpen, setIsInternetCultureOpen] = useState(false); 
  const [isGamesOpen, setIsGamesOpen] = useState(false);  
  const [isQnAOpen, setIsQnAOpen] = useState(false); 
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(false); 
  const [isPopCultureOpen, setIsPopCultureOpen] = useState(false); 
  const [isMoviesAndTvOpen, setIsMoviesAndTvOpen] = useState(false); 
  const [isRecentOpen, setIsRecentOpen] = useState(false); 


  const toggleAccordion = (accordion) => {
    if (accordion === 'topic') {
      setIsTopicOpen(!isTopicOpen);
    } else if (accordion === 'resources') {
      setIsResourcesOpen(!isResourcesOpen);
    }else if (accordion === 'games') {
        setIsGamesOpen(!isGamesOpen);
      }else if (accordion === 'internetCulture') {
        setIsInternetCultureOpen(!isInternetCultureOpen); 
      } else if (accordion === 'qna') {
        setIsQnAOpen(!isQnAOpen); 
      } else if (accordion === 'technology') {
        setIsTechnologyOpen(!isTechnologyOpen); 
      } else if (accordion === 'popCulture') {
        setIsPopCultureOpen(!isPopCultureOpen); 
      } else if (accordion === 'moviesAndTv') {
        setIsMoviesAndTvOpen(!isMoviesAndTvOpen); 
      } else if (accordion === 'recent') {
        setIsRecentOpen(!isRecentOpen); 
      }

  };

  return (
    <div className="left-navbar">
      <ul className="nav-links">
        <li><a href="#home"><HomeOutlinedIcon className="nav-icon"/>Home</a></li>
        <li><a href="#about"><OutboundOutlinedIcon className="nav-icon"/>Popular</a></li>
        <li className="accordion">
          <button className="accordion-button" onClick={() => toggleAccordion('recent')}>
            Recent
            {isRecentOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
          </button>
          {isRecentOpen && (
            <ul className="accordion-content">
              <li className="recent-item">
             
            <a href="#recent-item1"><ExplicitOutlinedIcon/>r/explainlikeimfive</a></li>
            </ul>
          )}
        </li>
        <li className="accordion">
          <button className="accordion-button" onClick={() => toggleAccordion('topic')}>
            Topic
            {isTopicOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
          </button>
          {isTopicOpen && (
            <>
              <ul className="accordion-content">
              <li className="accordion">
                  <button className="accordion-button" onClick={() => toggleAccordion('internetCulture')}>
                    <TagFacesOutlinedIcon />Internet Culture (Viral)
                    {isInternetCultureOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
                  </button>

                 
                  {isInternetCultureOpen && (
                    <ul className="accordion-content">
                      <li><a href="#memes">Amazing</a></li>
                      <li><a href="#viral-videos">Animals & Pets</a></li>
                      <li><a href="#influencers">Cringe & Facepalm</a></li>
                      <li><a href="#trends">Funny</a></li>
                      <li><a href="#trends">Intersting</a></li>
                      <li><a href="#trends">Memes</a></li>
                      <li><a href="#trends">Oddly Satisying</a></li>
                      <li><a href="#trends">Reddit Meta</a></li>
                      <li><a href="#trends">Wholesome & Heartwarming</a></li>
                    </ul>
                  )}
                </li>
                <li className="accordion">
                  <button className="accordion-button" onClick={() => toggleAccordion('games')}>
                    Games
                    {isGamesOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
                  </button>
                  {isGamesOpen && (
                    <ul className="accordion-content">
                      <li><a href="#game1">Action Games</a></li>
                      <li><a href="#game2">Adventure Games</a></li>
                      <li><a href="#game3">Esports</a></li>
                      <li><a href="#game1">Gaming Consoles & Gears</a></li>
                      <li><a href="#game1">Gaming News & Discussion</a></li>
                      <li><a href="#game1">Mobile Games</a></li>
                      <li><a href="#game1">Other Games</a></li>
                      <li><a href="#game1">Role Playing Games</a></li>
                      <li><a href="#game1">Simulation Games</a></li>
                      <li><a href="#game1">Sports & Racing Games</a></li>
                      <li><a href="#game1">Strategy Games</a></li>
                      <li><a href="#game1">Tablestop Games</a></li>
                    </ul>
                  )}
                </li>
                <li className="accordion">
                  <button className="accordion-button" onClick={() => toggleAccordion('qna')}>
                    <TagFacesOutlinedIcon />Q&As
                    {isQnAOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
                  </button>

                  
                  {isQnAOpen && (
                    <ul className="accordion-content">
                      <li><a href="#general-qa">Q&As</a></li>
                      <li><a href="#technical-qa">Stories & Confessions</a></li>
                      
                    </ul>
                  )}
                </li>
                <li className="accordion">
                  <button className="accordion-button" onClick={() => toggleAccordion('technology')}>
                    <TagFacesOutlinedIcon />Technology
                    {isTechnologyOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
                  </button>
                  {isTechnologyOpen && (
                    <ul className="accordion-content">
                      <li><a href="#software">3D Printing</a></li>
                      <li><a href="#hardware">Atificial Intelligence & Machine Learning</a></li>
                      <li><a href="#ai-ml">Computers & Hardware</a></li>
                      <li><a href="#innovation">Consumer Electronics</a></li>
                      <li><a href="#software">DIY Electrinics</a></li>
                      <li><a href="#hardware">Programming</a></li>
                      <li><a href="#ai-ml">Software & Apps</a></li>
                      <li><a href="#innovation">Streaming Services</a></li>
                      <li><a href="#innovation">Tech News & Discussion</a></li>
                      <li><a href="#innovation">Virtual & Augumented Reality</a></li>
                    </ul>
                  )}
                </li>
                <li className="accordion">
                  <button className="accordion-button" onClick={() => toggleAccordion('popCulture')}>
                    <TagFacesOutlinedIcon />Pop Culture
                    {isPopCultureOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
                  </button>
                  {isPopCultureOpen && (
                    <ul className="accordion-content">
                      <li><a href="#movies">Celebrities</a></li>
                      <li><a href="#tv-shows">Creaters & Influencers</a></li>
                      <li><a href="#music">Generations 7 Nostalgia</a></li>
                      <li><a href="#celebrities">Podcasts</a></li>
                      <li><a href="#music">Streamers</a></li>
                      <li><a href="#celebrities">Tarot & Astrology</a></li>
                    </ul>
                  )}
                </li>
                <li className="accordion">
                  <button className="accordion-button" onClick={() => toggleAccordion('moviesAndTv')}>
                    <MovieFilterOutlinedIcon/>Movies & TV
                    {isMoviesAndTvOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
                  </button>
                  {isMoviesAndTvOpen && (
                    <ul className="accordion-content">
                      <li><a href="#latest-movies">Actions Movies & Series</a></li>
                      <li><a href="#tv-series">Animated Movies & Series</a></li>
                      <li><a href="#streaming-platforms"></a>Comedy Movies & Series</li>
                      <li><a href="#reviews">Crime, Mysstery,&Thriller Movies & Series</a></li>
                      <li><a href="#latest-movies">Documentary Movies & Series</a></li>
                      <li><a href="#tv-series">Drama Movies & series</a></li>
                      <li><a href="#streaming-platforms">Fantasy Movies & Series</a></li>
                      <li><a href="#reviews">Horror Movies & Series</a></li>
                      <li><a href="#latest-movies">Movie News & Discussion</a></li>
                      <li><a href="#tv-series">Reality TV</a></li>
                      <li><a href="#streaming-platforms">Romance Movies & Series</a></li>
                      <li><a href="#reviews">Sci-Fi Movies & Series</a></li>
                      <li><a href="#reviews">Superhero Movies & Series</a></li>
                      <li><a href="#reviews">TV News & Discussion</a></li>
                    </ul>
                  )}
                </li>
              </ul>
              <button variant="outlined" className="see-more-button">See more</button>
              <Divider  flexItem sx={{ mx: 1 }} /> 
            </>
          )}
        </li>
        <li className="accordion">
          <button className="accordion-button" onClick={() => toggleAccordion('resources')}>
            Resources
            {isResourcesOpen ? <ExpandLessIcon className="accordion-icon" /> : <ExpandMoreIcon className="accordion-icon" />}
          </button>
          {isResourcesOpen && (
            <ul className="accordion-content">
              <li><a href="#resource1"><WhatshotOutlinedIcon sx={{mr:1}}/>About Reddit</a></li>
              <li><a href="#resource2"><CampaignOutlinedIcon sx={{mr:1}}/>Advertise</a></li>
              <li><a href="#resource2"><HelpOutlineOutlinedIcon sx={{mr:1}}/>Help</a></li>
              <li><a href="#resource3"><AutoStoriesOutlinedIcon sx={{mr:1}}/>Blog</a></li>
              <li><a href="#resource3"><BuildOutlinedIcon sx={{mr:1}}/>Careers</a></li>
              <li><a href="#resource3"><MicExternalOnOutlinedIcon sx={{mr:1}}/>Press</a></li>
              <Divider  flexItem sx={{ mx: 1 }} /> 
              <li><a href="#resource3"><Diversity1OutlinedIcon sx={{mr:1}}/>Communities</a></li>
              <li><a href="#resource3"><HourglassTopOutlinedIcon sx={{mr:1}}/>Best of Reddit</a></li>
              <li><a href="#resource3"><WidgetsOutlinedIcon sx={{mr:1}}/>Topic</a></li>
              <Divider  flexItem sx={{ mx: 1 }} /> 
              <li><a href="#resource3"><ContentPasteOutlinedIcon sx={{mr:1}}/>Content Policy</a></li>
              <li><a href="#resource3"><BalanceOutlinedIcon sx={{mr:1}}/>Privacy Policy</a></li>
              <li><a href="#resource3"><HandshakeOutlinedIcon sx={{mr:1}}/>User Agreement</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default LeftNavbar;
