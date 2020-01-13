import React from "react";
import { View, Text } from "react-native";
import ExtraFolderList from "../src/ExtraFolderList";
import { BarIndicator } from "react-native-indicators";

class DriveExtraScreen extends React.Component {
  static navigationOptions = {
    title: "DriveExtra",
    headerStyle: {
      backgroundColor: "#6AB04A"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  //  <BarIndicator color="blue" count={6} />

  render() {
    const { navigation } = this.props;
    list = navigation.getParam("list", "lis");
    looplist = navigation.getParam("looplist", "l");
    console.log("First " + JSON.stringify(list));

    return (
      <View>
        <ExtraFolderList list={list} />
      </View>
    );
  }
}

export default DriveExtraScreen;
