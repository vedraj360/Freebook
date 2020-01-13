import React from "react";
import { ScrollView, View, Dimensions } from "react-native";
import axios from "react-native-axios";
import ExtraFolderdetails from "./ExtraFolderdetails";
import { UIActivityIndicator, BallIndicator } from "react-native-indicators";

const { width, height } = Dimensions.get("window");

c = 0;
class ExtraFolderList extends React.Component {
  state = { lists: [], loading: true };

  componentWillMount() {
    list = this.props.list;
    id = list.id;
    axios
      .get(
        `https://www.googleapis.com/drive/v3/files?q='${id}'+in+parents&fields=files(id, name, parents, thumbnailLink, mimeType)&key=AIzaSyDYFKU0oeB5YqD6JQcPFbiCcBP1O8shvpg`
      )
      .then(response =>
        this.setState({ lists: response.data.files, loading: false })
      )
      .catch(err => console.log(err));
  }
  fetchpdflist() {
    lis = this.state.lists;
    return <ExtraFolderdetails key={lis.id} list={lis} />;
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <UIActivityIndicator color="black" />
        </View>
      );
    } else {
      return <ScrollView>{this.fetchpdflist()}</ScrollView>;
    }
  }
}
const styles = {
  container: {
    marginTop: height - 120,
    flex: 1,
    justifyContent: "center"
  },

  row: {
    flex: 1,
    flexDirection: "row"
  },

  reverse: {
    transform: [
      {
        rotate: "180deg"
      }
    ]
  }
};
export default ExtraFolderList;
