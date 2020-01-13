import React from "react";
import { ScrollView, Dimensions, View } from "react-native";
import axios from "react-native-axios";
import { UIActivityIndicator } from "react-native-indicators";
import PdfDeatails from "./pdfdetails";

const { width, height } = Dimensions.get("window");

class Pdflist extends React.Component {
  state = { pdf: [], loading: true };
  componentWillMount() {
    bookid = this.props.bookid;
    axios
      .get(
        `https://www.googleapis.com/drive/v3/files?q='${bookid}'+in+parents&fields=files(id, name, parents, thumbnailLink, mimeType)&key=AIzaSyDYFKU0oeB5YqD6JQcPFbiCcBP1O8shvpg`
      )
      .then(response =>
        this.setState({ pdf: response.data.files, loading: false })
      )
      .catch(err => console.log(err));
  }
  fetchpdflist() {
    pdf = this.state.pdf;
    return <PdfDeatails key={pdf.id} pdf={pdf} />;
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
export default Pdflist;
