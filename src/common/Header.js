import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyle}> {props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyles: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: "relative"
  },

  textStyle: {
    fontSize: 20
  }
};

export { Header };
