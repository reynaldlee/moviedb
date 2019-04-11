import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import PropTypes from "prop-types";

const RedButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 40,
    // width: 100,
    marginTop: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignSelf: "baseline", // new
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  title: {
    color: "white",
    fontSize: 14
  }
});

RedButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

export default RedButton;
