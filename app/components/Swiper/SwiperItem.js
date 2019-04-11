import React from "react";
import PropTypes from "prop-types";

import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import { RedButton } from "../Buttons";

import { image_path } from "../../config/constant";

const SwiperItem = ({
  movieTitle,
  overview,
  genre,
  rating,
  poster,
  backdrop,
  onPressDetail
}) => {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.containerImage}
      resizeMode="cover"
      source={{ uri: image_path + backdrop }}
    >
      <View style={styles.posterWrapper}>
        <Image
          style={styles.poster}
          resizeMode={"cover"}
          source={{ uri: image_path + poster }}
        />
      </View>
      <View style={styles.movieDetail}>
        <Text numberOfLines={2} style={[styles.text, styles.title]}>
          {movieTitle}
        </Text>
        <Text style={styles.text}>{genre}</Text>
        <Text style={styles.text}>{rating}</Text>
        <Text numberOfLines={3} style={styles.text}>
          {overview}
        </Text>
        <RedButton title={"View Detail"} onPress={onPressDetail} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: 250,
    backgroundColor: "black",
    flexDirection: "row"
  },
  containerImage: {
    opacity: 0.5
  },
  posterWrapper: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: "900"
  },
  poster: {
    height: 150,
    width: 100,
    borderRadius: 5
  },
  movieDetail: {
    flex: 0.6,
    padding: 16,
    justifyContent: "center"
  }
});

SwiperItem.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  overview: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  poster: PropTypes.string,
  backdrop: PropTypes.string,
  onPressDetail: PropTypes.func
};

export default SwiperItem;
