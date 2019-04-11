import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";

import { image_path } from "../../config/constant";

//slr => stateless return
const MovieListHorizontal = ({ title, onPressSeeAll, onPressItem, data }) => {
  const renderMovieItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPressItem(item)}>
        <View style={styles.movieItem}>
          <Image
            style={styles.poster}
            source={{ uri: image_path + item.poster_path }}
          />
          <Text numberOfLines={2} style={styles.movieTitle}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPressSeeAll}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatList}
        renderItem={renderMovieItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300
  },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "600"
  },
  seeAllText: {
    color: "white",
    fontSize: 20
  },
  flatList: {
    height: 300
  },
  movieItem: {
    borderRadius: 5,
    marginLeft: 16,
    overflow: "hidden"
  },
  poster: {
    height: 170,
    width: 140
  },
  movieTitle: {
    width: 140,
    height: 50,
    fontWeight: "600",
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    backgroundColor: "white",
    alignSelf: "center",
    padding: 2
  }
});

export default MovieListHorizontal;
