import styles from "./listings.module.scss";
import { useSelector } from "react-redux";
import Card from "../UI/card/card";
import Button from "../UI/button/button";

const Listings = (props) => {
  const searchResults = useSelector((state) => state.searchResults);

  const category = props.category;

  console.log(searchResults.albums);

  const renderArtists = () => {
    if (category === "Artists") {
      return searchResults.artists.map((artist) => (
        <Card key={artist.id}>
          <div className={styles.cardContainer}>
            <div className={styles.listingImage}>
              {artist.images.length ? (
                <img
                  width={"100%"}
                  src={artist.images[0].url}
                  alt="artists image"
                />
              ) : (
                <img
                  width={"100%"}
                  src={require("../../images/spotify-logo.png")}
                  alt="spotify"
                />
              )}
            </div>

            <div className={styles.listingText}>{artist.name}</div>
            <div className={styles.listingButton}>
              <a href={artist.external_urls.spotify} target="_blank">
                <Button>Listen On Spotify</Button>
              </a>
            </div>
          </div>
        </Card>
      ));
    }
    if (category === "Albums") {
      return searchResults.albums.map((album) => (
        <Card key={album.id}>
          <div className={styles.cardContainer}>
            <div className={styles.listingImage}>
              {album.images.length ? (
                <img width={"100%"} src={album.images[0].url} alt="album" />
              ) : (
                <img
                  width={"100%"}
                  src={require("../../images/spotify-logo.png")}
                  alt="spotify"
                />
              )}
            </div>

            <div className={styles.listingText}>{album.name}</div>
            <div className={styles.listingButton}>
              <a href={album.external_urls.spotify} target="_blank">
                <Button>Listen On Spotify</Button>
              </a>
            </div>
          </div>
        </Card>
      ));
    }
    if (category === "Playlists") {
      return searchResults.playlists.map((playlist) => (
        <Card key={playlist.id}>
          <div className={styles.cardContainer}>
            <div className={styles.listingImage}>
              {playlist.images.length ? (
                <img
                  width={"100%"}
                  src={playlist.images[0].url}
                  alt="Playlist"
                />
              ) : (
                <img
                  width={"100%"}
                  src={require("../../images/spotify-logo.png")}
                  alt="spotify"
                />
              )}
            </div>

            <div className={styles.listingText}>{playlist.name}</div>
            <div className={styles.listingButton}>
              <a href={playlist.external_urls.spotify} target="_blank">
                <Button>Listen On Spotify</Button>
              </a>
            </div>
          </div>
        </Card>
      ));
    }
  };

  return <div className={styles.listingsContainer}>{renderArtists()}</div>;
};

export default Listings;
