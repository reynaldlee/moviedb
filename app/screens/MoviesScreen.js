import React, { Component } from "react"; //imrc
import {
  View,
  ActivityIndicator,
  Text,
  ScrollView,
  StyleSheet
} from "react-native"; //imrn
import Swiper from "react-native-swiper";
import { connect } from "react-redux";

import { SwiperItem } from "../components/Swiper";
import { MovieListHorizontal } from "../components/List";
import { ButtonWithIcon } from "../components/Buttons";
import { getNowPlaying, getPopular } from "../actions/movieActions";

class MoviesScreen extends Component {
  componentDidMount() {
    this.props.dispatch(getNowPlaying());
    this.props.dispatch(getPopular());
  }

  componentDidUpdate() {
    if (this.props.nowPlaying.error) {
      alert(this.props.nowPlaying.error);
    }
  }

  goToDetail = id => {
    this.props.navigation.navigate("MovieDetail", {
      id: id
    });
  };
  handlePressItem = item => {
    console.log("You Clicked ", item);
  };

  handlePressSeeAll = () => {
    alert("Clicked");
  };

  goToList = (category, title) => {
    this.props.navigation.navigate("MovieList", {
      category,
      title
    });
  };

  renderSwiper = () => {
    return (
      <View style={styles.swiperWrapper}>
        <Swiper showsPagination={false} autoplay>
          {this.props.nowPlaying.results.map(movie => {
            return (
              <SwiperItem
                key={movie.id}
                movieTitle={movie.title}
                overview={movie.overview}
                rating={movie.vote_average}
                poster={movie.poster_path}
                backdrop={movie.backdrop_path}
                genre="Action"
                onPressDetail={() => this.goToDetail(movie.id)}
              />
            );
          })}
        </Swiper>
      </View>
    );
  };

  render() {
    if (this.props.nowPlaying.loading == true || this.props.popular.loading) {
      return (
        <ActivityIndicator
          color="red"
          size="large"
          style={{ backgroundColor: "black", flex: 1 }}
        />
      );
    }

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {this.renderSwiper()}

        <MovieListHorizontal
          title="Popular"
          data={this.props.popular.results}
          onPressSeeAll={this.handlePressSeeAll}
          onPressItem={this.handlePressItem}
        />
        <ButtonWithIcon
          iconName="md-play"
          title="Now Playing"
          onPress={() => this.goToList("now_playing", "Now Playing")}
        />
        <ButtonWithIcon
          iconName="md-trending-up"
          title="Top Rated"
          onPress={() => this.goToList("top_rated", "Top Rated")}
        />
        <ButtonWithIcon
          iconName="md-recording"
          title="Upcoming"
          onPress={() => this.goToList("upcoming", "Upcoming")}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  swiperWrapper: {
    height: 250
  }
});

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
  popular: state.popular
});

export default connect(mapStateToProps)(MoviesScreen);
