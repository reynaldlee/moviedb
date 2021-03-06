import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { image_path } from "../../config/constant";

const MovieCastsTab = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <Image
          style={styles.image}
          source={{ uri: `${image_path}${item.profile_path}` }}
        />
        <View style={styles.detail}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.character}>as {item.character}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.cast_id.toString()}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    padding: 8
  },
  image: {
    height: 80,
    width: 80,
    alignSelf: "center",
    borderRadius: 40
  },
  detail: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  name: {
    color: "#fff"
  },
  character: {
    color: "#ccc"
  }
});

export default MovieCastsTab;
