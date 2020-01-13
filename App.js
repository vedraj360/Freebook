import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DrivefolderScreen from "./screens/DrivefolderScreen";
import DrivePdfScreen from "./screens/DrivePdfScreen";
import DriveExtraScreen from "./screens/DriveExtraScreen";
import PdfViewScreen from "./screens/PdfViewScreen";

export default class App extends Component {
  render() {
    const MainNavigator = createStackNavigator({
      Drivefolder: { screen: DrivefolderScreen },
      DrivePdf: { screen: DrivePdfScreen },
      DriveExtra: { screen: DriveExtraScreen },
      PdfView: { screen: PdfViewScreen }
    });
    const MainContainer = createAppContainer(MainNavigator);
    return (
      <View style={styles.container}>
        <MainContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
