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
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {this.state.songs.map(song => {
          return (
            <div
              key={song.name}
              style={{
                width: "33%",
                minWidth: 320,
                height: 400,
                marginTop: 15
              }}
            >
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
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 20,
                    paddingBottom: 20
                  }}
                >
                  {song.name}
                </span>
                <span
                  style={{
                    color: "black",

                    fontSize: 15,
                    paddingBottom: 20
                  }}
                >
                  {song.artist}
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
