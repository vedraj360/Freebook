import React, { Component } from "react";
import PDFReader from "rn-pdf-reader-js";
import { View, StyleSheet } from "react-native";

import { Constants } from "expo";
export default class PdfViewScreen extends React.Component {
  static navigationOptions = {
    title: "Pdf View",
    headerStyle: {
      backgroundColor: "#6AB04A "
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    const { navigation } = this.props;
    uri = navigation.getParam("uri", "uri");
    console.log(uri);
    uri.webContentLink;
    return (
      <View style={styles.container}>
        <PDFReader
          source={{
            uri: uri.webContentLink
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  }
});
