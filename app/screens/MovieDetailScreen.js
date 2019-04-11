import React, { Component } from "react"; //imrc
import { View, Text, Image, StyleSheet } from "react-native"; //imrn
import Swiper from "react-native-swiper";
import ScrollableTabView from "react-native-scrollable-tab-view";
import moment from "moment";

import MovieDetailView from "../components/Movies/MovieDetailView";
import {
  MovieCastsTab,
  MovieInfoTab,
  MovieTrailersTab
} from "../components/Tab";

import movieDetail from "../mockDataDetail";
import { image_path } from "../config/constant";

class MovieDetailScreen extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const director = movieDetail.casts
      ? movieDetail.casts.crew.find(crew => {
          return crew.job === "Director";
        })
      : {};

    return (
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper autoplay showsPagination={false}>
            {movieDetail.images.backdrops.map(image => {
              return (
                <Image
                  style={styles.image}
                  key={image.file_path}
                  source={{ uri: image_path + image.file_path }}
                />
              );
            })}
          </Swiper>
        </View>
        <MovieDetailView
          movieTitle={movieDetail.title}
          genres={movieDetail.genres}
          tagline={movieDetail.tagline}
          poster={{ uri: image_path + movieDetail.poster_path }}
          rating={movieDetail.vote_average}
        />

        <ScrollableTabView
          tabBarTextStyle={{ color: "white" }}
          tabBarActiveTextColor={"white"}
          tabBarUnderlineStyle={{ backgroundColor: "red" }}
          tabBarBackgroundColor={"#222"}
          initialPage={0}
        >
          <MovieInfoTab
            tabLabel="INFO"
            overview={movieDetail.overview}
            budget={movieDetail.budget}
            director={director.name}
            releaseDate={moment(movieDetail.releaseDate).format(
              "MMMM DD, YYYY"
            )}
          />

          <MovieCastsTab tabLabel="CASTS" data={movieDetail.casts.cast} />

          <MovieTrailersTab
            tabLabel="TRAILERS"
            data={movieDetail.videos.results}
          />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  swiper: {
    height: 200
  },
  image: {
    height: 200,
    opacity: 0.5
  }
});

export default MovieDetailScreen;
