import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const ButtonWithIcon = ({ iconName, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name={iconName} size={24} color={"lightgrey"} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  title: {
    color: "lightgrey",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20
  }
});

export default ButtonWithIcon;
