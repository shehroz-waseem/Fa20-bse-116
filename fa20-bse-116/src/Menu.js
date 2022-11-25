import React from 'react';
import "./Menu.css";
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <div className='main1'>
      <nav class="nav">
        <div >
          <button class="drop">
            ESPNCricinfo
          </button>
        </div>



        <div class="dropdown">
          <button class="dropbtn">Live Scores</button>
          <div class="dropdown-content">
            <a href="#">Live Scores Home</a>
            <Link to="/Results">
            <a href="#">Results</a>
            </Link>
            <a href="#">Seasons View</a>
            <a href="#">Desktop View</a>
            <Link to="/Schedules">
            <a href="#">Schedules</a>
            </Link>
            <a href="#">Month View</a>
            <a href="#">International Calender</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">Series</button>
          <div class="dropdown-content">
            <a href="#">IRE-W in Pakistan</a>
            <a href="#">Australia v England</a>
            <a href="#">New Zealand v India</a>
            <a href="#">England v. West Indies (W)</a>
            <a href="#">Marsh Cup</a>
            <a href="#">CSA 4-Day</a>
            <a href="#">Women's Championship</a>
            <a href="#">CWC League 2</a>
            <a href="#">-Archives-</a>
            <a href="#">OEA Trophy</a>
            <a href="#">Australia v West Indies</a>
            <a href="#">Sri Lanka v Afghanistan</a>
            <a href="#">WBBL 2022</a>
            <a href="#">Sheffield Shield</a>
            <a href="#">Test Championship</a>
            <a href="#">CWC Super League</a>
            <a href="#">-Future series-</a>

          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Teams</button>
          <div class="dropdown-content">
            <a href="#">Australia</a>
            <a href="#">Bangladesh</a>
            <a href="#">England</a>
            <a href="#">India</a>
            <a href="#">New Zealand</a>
            <a href="#">Pakistan</a>
            <a href="#">South Africa</a>
            <a href="#">Sri Lanka</a>
            <a href="#">West Indies</a>
            <a href="#">Zimbabwe</a>
            <a href="#">Afghanistan</a>
            <a href="#">Ireland</a>
            <a href="#">Namibia</a>
            <a href="#">Nepal</a>
            <a href="#">Netherlands</a>
            <a href="#">Oman</a>
            <a href="#">PNG</a>
            <a href="#">Scotland</a>
            <a href="#">UAE</a>
            <a href="#">USA</a>
          </div>
        </div>


        <div class="dropdown">
          <button class="dropbtn">News</button>
          <div class="dropdown-content">
            <a href="#">News Home</a>
            <a href="#">Future of ODIs</a>
            <a href="#">Ball-tampering</a>
            <a href="#">Technology in cricket</a>
            <a href="#">Technology in cricket</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">Features</button>
          <div class="dropdown-content">
            <a href="#">Features Home</a>
            <a href="#">Writers</a>
            <a href="#">Photo galleries</a>
            <a href="#">The Cricket Monthly</a>
          </div>
        </div>

        <div class="dropdown">

          <button class="dropbtn">Videos</button>
          <div class="dropdown-content">
            <a href="#">T20 Time Out</a>
            <a href="#">Matchday</a>
            <a href="#">News and Analysis</a>
            <a href="#">Interviews</a>
            <a href="#">Press Conference</a>
            <a href="#">T20 Time Out Hindi</a>
            <a href="#">Polite Enquiries</a>
            <a href="#">Match Analysis</a>
            <a href="#">Features</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        <div class="dropdown">

          <button class="dropbtn">Stats</button>
          <div class="dropdown-content">
            <a href="#">Stats home</a>
            <a href="#">PL 2022</a>
            <a href="#">SuperStats</a>
            <a href="#">All records</a>
            <a href="#">Grounds</a>
            <a href="#">AskCricinfo</a>
            <a href="#">Statsguru</a>
            <a href="#">2022 records</a>
            <a href="#">Players</a>
            <a href="#">Rankings</a>
          </div>
        </div>

        <div class="dropdown" >
          <button class="dropbtn" className="Menu2">Edition PK</button>
          <div class="dropdown-content" style={{marginLeft:"300px"}}>
            <a href="#">Africa</a>
            <a href="#">Bangladesh</a>
            <a href="#">India-Hindi</a>
            <a href="#">Australia</a>
            <a href="#">India</a>
            <a href="#">Pakistan</a>
            <a href="#">United Kindom</a>
            <a href="#">New Zealand</a>
            <a href="#">Sri Lanka</a>
            <a href="#">United States</a>
            <a href="#">Global</a>
          </div>
        </div>
        <div className="Menu3">
          <img src="bell.JPG" style={{ width: '23px' }}></img>
        </div>

        <div className="Menu4">
          <img src="bell2.JPG" style={{ width: '23px' }}></img>
        </div>

        <div className="Menu4">
          <img src="bell3.JPG" style={{ width: '23px' }}></img>
        </div>

        <div className="Menu4">
          <img src="bell4.JPG" style={{ width: '23px' }}></img>
        </div>
      </nav>
    </div>



  );
}


export default Menu;