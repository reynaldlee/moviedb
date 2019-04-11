import React, { Component } from "react"; //imrc
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native"; //imrn

import movieData from "../mockData";
import { MovieListItem } from "../components/List";

class MovieListScreen extends Component {
  handlePress = () => {
    // this.props.navigation.navigate("MovieDetail");
  };

  renderItem = ({ item, index }) => {
    return (
      <MovieListItem
        index={index}
        movieTitle={item.title}
        overview={item.overview}
        poster={item.poster_path}
        rating={item.vote_average}
        year={new Date(item.release_date).getFullYear()}
        onPress={this.handlePress}
      />
    );
  };

  render() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        data={movieData}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  contentContainer: {}
});

export default MovieListScreen;
