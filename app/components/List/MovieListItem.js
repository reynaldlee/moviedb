import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { image_path } from "../../config/constant";

const MovieListItem = ({
  movieTitle,
  overview,
  poster,
  rating,
  year,
  onPress,
  index
}) => {
  const containerStyle = [styles.container];
  if (index % 2 == 0) {
    containerStyle.push({
      flexDirection: "row-reverse"
    });
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyle}>
        <Image style={styles.poster} source={{ uri: image_path + poster }} />
        <View style={styles.detailWrapper}>
          <Text numberOfLines={2} style={styles.title}>
            {movieTitle}
          </Text>
          <Text style={styles.year}>{year}</Text>
          <Text style={styles.text}>{rating}</Text>
          <Text numberOfLines={3} style={styles.text}>
            {overview}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    height: 170,
    marginTop: 10,
    borderRadius: 5,
    overflow: "hidden"
  },
  poster: {
    height: 170,
    width: 140
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "600"
  },
  text: {
    color: "black"
  },
  year: {
    fontSize: 18
  },
  detailWrapper: {
    flex: 1,
    padding: 16
  }
});

export default MovieListItem;
