import React, { Component } from "react"; //imrc
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  StyleSheet
} from "react-native"; //imrn
import Swiper from "react-native-swiper";

import { SwiperItem } from "../components/Swiper";
import moviesData from "../mockData";
import { MovieListHorizontal } from "../components/List";
import { ButtonWithIcon } from "../components/Buttons";

class MoviesScreen extends Component {
  goToDetail = () => {
    this.props.navigation.navigate("MovieDetail");
  };
  handlePressItem = item => {
    console.log("You Clicked ", item);
  };

  handlePressSeeAll = () => {
    alert("Clicked");
  };

  goToList = () => {
    this.props.navigation.navigate("MovieList");
  };

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.swiperWrapper}>
          <Swiper showsPagination={false} autoplay>
            {moviesData.map(movie => {
              return (
                <SwiperItem
                  key={movie.id}
                  movieTitle={movie.title}
                  overview={movie.overview}
                  rating={movie.vote_average}
                  poster={movie.poster_path}
                  backdrop={movie.backdrop_path}
                  genre="Action"
                  onPressDetail={this.goToDetail}
                />
              );
            })}
          </Swiper>
        </View>
        <MovieListHorizontal
          title="Popular"
          data={moviesData}
          onPressSeeAll={this.handlePressSeeAll}
          onPressItem={this.handlePressItem}
        />
        <ButtonWithIcon
          iconName="md-play"
          title="Now Playing"
          onPress={this.goToList}
        />
        <ButtonWithIcon iconName="md-trending-up" title="Top Rated" />
        <ButtonWithIcon iconName="md-recording" title="Upcoming" />
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

export default MoviesScreen;
