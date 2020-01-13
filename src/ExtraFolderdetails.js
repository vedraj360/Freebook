import React, { Component } from "react";
import { View } from "react-native";
import { Image, ListItem } from "react-native-elements";
import axios from "react-native-axios";

import { withNavigation } from "react-navigation";
import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from "expo";

class ExtraFolderdetails extends Component {
  state = { link: {}, flag: false };

  onPress(l) {
    if (l.mimeType === "application/vnd.google-apps.folder") {
      // this.props.navigation.navigate("DriveExtra", {
      //   screen: "DriveExtra",
      //   list: l,
      //   flag: 1
      // });
      this.props.navigation.push("DriveExtra", {
        screen: "DriveExtra",
        list: l
      });
    } else {
      this.linkfetch(l);
    }
  }
  linkfetch(l) {
    axios
      .get(
        `https://www.googleapis.com/drive/v2/files/${
          l.id
        }?fields=webContentLink%2Cid%2Ctitle&key=AIzaSyDYFKU0oeB5YqD6JQcPFbiCcBP1O8shvpg`
      )
      .then(response =>
        this.setState({ link: response.data, flag: true }).catch(err =>
          console.log(err)
        )
      );
    console.log(this.state.link);
    if (this.state.flag) {
      this.props.navigation.navigate("PdfView", {
        screen: "PdfView",
        uri: this.state.link
      });
    }
  }
  imageView(l) {
    if (l.mimeType === "application/vnd.google-apps.folder") {
    } else {
      return (
        <View style={styles.subtitleView}>
          <Image source={{ uri: l.thumbnailLink }} style={styles.imageStyle} />
        </View>
      );
    }
  }
  name(l) {
    if (l.mimeType === "application/vnd.google-apps.folder") {
      return l.name;
    } else {
      name = l.name.split(".");
      return name[0];
    }
  }
  render() {
    const list = this.props.list;
    return (
      <View style={{ backgroundColor: "#DAE0E2" }}>
        {list.map((l, i) => (
          <ListItem
            containerStyle={{
              marginTop: 12,
              marginBottom: 12,
              marginLeft: 15,
              marginEnd: 15,
              borderRadius: 14,
              borderStyle: "solid",
              backgroundColor: "#6ab04c"
            }}
            subtitle={this.imageView(l)}
            onPress={() => this.onPress(l)}
            leftAvatar={{ source: require("../assets/pdf.png") }}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.85} //
            titleStyle={{ color: "black", fontWeight: "bold" }}
            chevronColor="white"
            chevron
            linearGradientProps={{
              colors: ["#fff", "#fff"],
              start: [1, 0.9],
              end: [0, 0.9]
            }}
            key={i}
            s
            title={this.name(l)}
          />
        ))}
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
    height: 180,
    flex: 1,
    width: null
  }
};

export default withNavigation(ExtraFolderdetails);
