import React, { Component } from "react"; //imrc
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native"; //imrn
import Swiper from "react-native-swiper";
import ScrollableTabView from "react-native-scrollable-tab-view";
import moment from "moment";
import { connect } from "react-redux";

import MovieDetailView from "../components/Movies/MovieDetailView";
import {
  MovieCastsTab,
  MovieInfoTab,
  MovieTrailersTab
} from "../components/Tab";

import { getMovieDetail } from "../actions/movieActions";
import { image_path } from "../config/constant";

class MovieDetailScreen extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  };

  componentDidMount() {
    this.props.dispatch(getMovieDetail(this.props.navigation.state.params.id));
  }

  render() {
    let { movieDetail } = this.props;
    console.log(movieDetail);

    if (movieDetail.loading == true || !movieDetail.data.title) {
      return (
        <ActivityIndicator
          color="red"
          size="large"
          style={{ backgroundColor: "black", flex: 1 }}
        />
      );
    }

    const director = movieDetail.data.casts
      ? movieDetail.data.casts.crew.find(crew => {
          return crew.job === "Director";
        })
      : {};

    return (
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper autoplay showsPagination={false}>
            {movieDetail.data.images &&
              movieDetail.data.images.backdrops &&
              movieDetail.data.images.backdrops.map(image => {
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
          movieTitle={movieDetail.data.title}
          genres={movieDetail.data.genres}
          tagline={movieDetail.data.tagline}
          poster={{ uri: image_path + movieDetail.data.poster_path }}
          rating={movieDetail.data.vote_average}
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
            overview={movieDetail.data.overview}
            budget={movieDetail.data.budget}
            director={director.name}
            releaseDate={moment(movieDetail.data.release_date).format(
              "MMMM DD, YYYY"
            )}
          />

          <MovieCastsTab
            tabLabel="CASTS"
            data={movieDetail.data.casts && movieDetail.data.casts.cast}
          />

          <MovieTrailersTab
            tabLabel="TRAILERS"
            data={movieDetail.data.videos && movieDetail.data.videos.results}
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
const mapStateToProps = state => ({
  movieDetail: state.movieDetail
});

export default connect(mapStateToProps)(MovieDetailScreen);
