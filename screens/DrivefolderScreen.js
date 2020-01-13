import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Booklist from "../src/Booklist";

class DrivefolderScreen extends Component {
  static navigationOptions = {
    title: "Books folder",
    headerStyle: {
      backgroundColor: "#6AB04A"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation);
    return (
      <View style={styles.headerContentStyle}>
        <Booklist />
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default DrivefolderScreen;
