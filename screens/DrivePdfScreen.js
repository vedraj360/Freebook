import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import Pdflist from "../src/Pdflist";

class DrivePdfScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam("bookname", "name")}`,
      headerStyle: {
        backgroundColor: "#6AB04A"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };
  render() {
    const { state, navigate } = this.props.navigation;
    const { navigation } = this.props;
    const bookid = navigation.getParam("bookId", "id");
    console.log("id " + bookid);
    return (
      <View style={styles.headerContentStyle}>
        <Pdflist bookid={bookid} />
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

export default DrivePdfScreen;
