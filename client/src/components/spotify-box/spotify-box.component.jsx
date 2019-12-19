import React from "react";
import SpotifyPlayer from "../../components/spotify-player/spotify-player.component";

class SpotifyBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }
  async componentDidMount() {
    const response = await fetch("http://www.onabeat.com/api/songs/all");
    const songs = await response.json();

    this.setState({ songs: songs });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {this.state.songs.map(song => {
          return (
            <div key={song.name}>
              {" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: 20,
                    paddingBottom: 20
                  }}
                >
                  {song.name} by {song.artist}
                </span>
              </div>
              <SpotifyPlayer key={song.name} songUrl={song.songUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SpotifyBox;
