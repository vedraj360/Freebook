import React from "react";
import axios from "react-native-axios";
import { ScrollView, View, Dimensions } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import Bookdetails from "./Bookdetails";

const { width, height } = Dimensions.get("window");
// "https://www.googleapis.com/drive/v2/files?q='1m9iviM5rmRxidgfV5LHXgjuDEAwMKFXb'+in+parents&fields=files(id, name, parents, thumbnailLink,webContentLink)&key=AIzaSyDYFKU0oeB5YqD6JQcPFbiCcBP1O8shvpg"
class Booklist extends React.Component {
  state = { books: [], loading: true };
  componentWillMount() {
    axios
      .get(
        "https://www.googleapis.com/drive/v3/files?q='1T5PzAXCFtivZwYyegKeYKvSH5viX1SR3'+in+parents&fields=files(id, name, parents, thumbnailLink)&key=AIzaSyDYFKU0oeB5YqD6JQcPFbiCcBP1O8shvpg"
      )
      .then(response =>
        this.setState({ books: response.data.files, loading: false }).catch(
          err => console.log(err)
        )
      );
  }
  fetchbooklist() {
    book = this.state.books;
    return <Bookdetails key={book.id} books={book} />;
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <UIActivityIndicator color="black" />
        </View>
      );
    } else {
      return <ScrollView>{this.fetchbooklist()}</ScrollView>;
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
export default Booklist;
