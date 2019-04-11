import React, { Component } from "react"; //imrc
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from "react-native"; //imrn

import movieData from "../mockData";
import { MovieListItem } from "../components/List";
import { getMovieDetail } from "../actions/movieActions";
import { getMoviesAPI } from "../api/movies";

class MovieListScreen extends Component {
  state = {
    movieList: [],
    loading: false,
    error: null
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  };

  handlePress = () => {
    // this.props.navigation.navigate("MovieDetail");
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    getMoviesAPI({
      category: this.props.navigation.state.params.category
    })
      .then(response => {
        const result = response.data;
        this.setState({
          movieList: result.results,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  }

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
    console.log(this.state);

    if (this.state.loading) {
      return (
        <ActivityIndicator
          color="red"
          size="large"
          style={{ backgroundColor: "black", flex: 1 }}
        />
      );
    }

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        data={this.state.movieList}
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
