const axios = require("react-native-axios");

axios
  .get(
    "https://www.googleapis.com/drive/v2/files/1m9iviM5rmRxidgfV5LHXgjuDEAwMKFXb?fields=webContentLink%2Cid%2Ctitle&key=AIzaSyDYFKU0oeB5YqD6JQcPFbiCcBP1O8shvpg"
  )
  .then(response => console.log(response.data));
//   .catch(err => console.log(err

// <View>
// {books.map((l, i) => (
//   <ListItem
//     containerStyle={{
//       marginTop: 2,
//       marginBottom: 2,
//       marginLeft: 5,
//       marginEnd: 9,
//       borderRadius: 12,
//       borderStyle: "solid",
//       backgroundColor: "#c3cfe2"
//     }}
//     onPress={() => {
//       this.props.navigation.navigate("DrivePdf", {
//         screen: "DrivePdf",
//         bookId: l.id,
//         bookname: l.name
//       });
//     }}
//     Component={TouchableScale}
//     friction={90} //
//     tension={100} // These props are passed to the parent component (here TouchableScale)
//     activeScale={0.85} //
//     titleStyle={{ color: "white" }}
//     chevronColor="white"
//     chevron
//     linearGradientProps={{
//       colors: ["#434343", "#000000"],
//       start: [1, 0.9],
//       end: [0, 0.9]
//     }}
//     key={i}
//     s
//     title={l.name}
//   />
