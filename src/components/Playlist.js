import React from 'react';
import trackOne from '../audio/if-only-the-rain.mp3'
import trackTwo from '../audio/everybody-needs-a-name.mp3'
import trackThree from '../audio/window-pane.mp3'
// import albumCover from '../images/album-cover.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faFacebookF, faInstagram, faYoutube, faItunesNote } from '@fortawesome/free-brands-svg-icons'



function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

const TRACKS = [
  { id: 1, title: "If Only the Rain", duration: '3:20' },
  { id: 2, title: "Everybody Needs a Name", duration: '4:19' },
  { id: 3, title: "Window Pane", duration: '3:16' }
];

class Playlist extends React.Component {
  state = {
    selectedTrack: "If Only the Rain",
    player: "paused",
    currentTime: '0',
    duration: '200.66'
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => { });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "If Only the Rain":
          track = trackOne;
          break;
        case "Everybody Needs a Name":
          track = trackTwo;
          break;
        case "Window Pane":
          track = trackThree;
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: "If Only the Rain" });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
    if (
      this.state.duration &&
      !isNaN(this.state.duration) &&
      this.state.duration === this.state.currentTime
    ) {
      const currentTrackIndex = TRACKS.findIndex(
        track => track.title === this.state.selectedTrack
      );
      const tracksAmount = TRACKS.length - 1;
      if (currentTrackIndex === tracksAmount) {
        this.setState({
          selectedTrack: null,
          player: "stopped",
          currentTime: null,
          duration: null
        });
      } else {
        this.handleSkip("next");
      }
    }
  }

  handleSkip = direction => {
    const currentTrackIndex = TRACKS.findIndex(
      track => track.title === this.state.selectedTrack
    );
    const tracksAmount = TRACKS.length - 1;
    if (direction === "previous") {
      const previousTrack =
        currentTrackIndex === 0 ? tracksAmount : currentTrackIndex - 1;
      const trackToPlay = TRACKS[previousTrack];
      this.setState({ selectedTrack: trackToPlay.title });
    } else if (direction === "next") {
      const nextTrack =
        currentTrackIndex === tracksAmount ? 0 : currentTrackIndex + 1;
      const trackToPlay = TRACKS[nextTrack];
      this.setState({ selectedTrack: trackToPlay.title, duration: null });
    }
  };

  setTime = time => {
    this.player.currentTime = time;
  };



  render() {
    const list = TRACKS.map(item => {
      return (
        <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
          style={{
            color: item.title === this.state.selectedTrack && "red"
          }}
          tabIndex='0'
        >
          <span>{item.title}</span>
          <span>{item.duration}</span>
        </li>
      );
    });

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
      <div className="playlist">
        {/* <img src={albumCover} className="App-logo" alt="logo" /> */}
        <div className="player">
          {this.state.player !== "stopped" && (
            <div className="buttons">
              <button onClick={() => this.handleSkip("previous")} aria-label="previous track">
                <FontAwesomeIcon icon={faBackward} />
              </button>
              {this.state.player === "paused" && (
                <button onClick={() => this.setState({ player: "playing" })} aria-label="play">
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              )}
              {this.state.player === "playing" && (
                <button onClick={() => this.setState({ player: "paused" })} aria-label="pause">
                  <FontAwesomeIcon icon={faPause} />
                </button>
              )}
              {/* <button onClick={() => this.setState({ player: "stopped" })}>
                <FontAwesomeIcon icon={faStop} />
              </button> */}
              <button onClick={() => this.handleSkip("next")} aria-label="next track"                   >
                <FontAwesomeIcon icon={faForward} />
              </button>
            </div>
          )}
          <TimeBar
            setTime={this.setTime}
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />
          <h2>Trish Robb Music</h2>
          <ul className="tracklist" aria-label="Trish Robb Music trak list                                    ">{list}</ul>
        </div>
        <audio ref={ref => (this.player = ref)} />
        <ul className="social-follow">
          <li><a href="https://www.instagram.com/trishrobbmusic/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://www.youtube.com/watch?v=jytfVOUUxnw&feature=youtu.be" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="https://open.spotify.com/artist/7tC9Blhmr3PSmrWwwNG9sl" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSpotify} /></a></li>
          <li><a href="https://ca.tunecore.com/sell-your-music-online?ref=c_9061009&cmp=b_1t1&utm_content=192369383501_&utm_term=%2Bget%20music%20on%20%2Bapple%20%2Bmusic&utm_source=google&utm_medium=cpc&utm_campaign=ca_md_am&gclid=CjwKCAiAis3vBRBdEiwAHXB29OJhc__q_OcPEkxKihKCLEnb3nOqyeVmGeUBNr-upYKtcenY8-IUkBoCFr0QAvD_BwE" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faItunesNote} /></a></li>
          <li><a href="https://www.facebook.com/Trish-Robb-65027745673/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        </ul>
      </div>
    );
  }
}

function TimeBar({ currentTime, duration, setTime }) {
  const sBits = [];
  let count = 0;
  while (count < duration) {
    sBits.push(count);
    count++;
  }
  const seconds = sBits.map(second => {
    return (
      <div
        key={second}
        onClick={() => setTime(second)}
        style={{
          float: "left",
          cursor: "pointer",
          height: "5px",
          width: `${300 / Math.round(duration)}px`,
          background:
            currentTime && Math.round(currentTime) === second
              ? "white"
              : "black",
          transition: "all 0.5s ease-in-out"
        }}
      />
    );
  });
  return (
    <div className="timebar">
      <div className="bar">{seconds}</div>
    </div>
  );
}

export default Playlist;
