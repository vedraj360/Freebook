import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Image, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { FlatGrid } from "react-native-super-grid";

import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from "expo";

const cs = require("../assets/cs.png");
const biomass = require("../assets/biomass.png");
const cc = require("../assets/embedded.png");
const dd = require("../assets/mona-lisa.png");
const pm = require("../assets/pm.png");
const mb = require("../assets/mb.png");
const fc = require("../assets/fuel-station.png");
const mv = require("../assets/mv.png");
const cv = require("../assets/cv.png");
const ws = require("../assets/ws.png");
const psy = require("../assets/psy.png");
const astro = require("../assets/astro.png");
const ros = require("../assets/ros.png");
const to = require("../assets/to.png");
const write = require("../assets/write.png");
const nano = require("../assets/nano.png");
const exoskeleton = require("../assets/exoskeleton.png");
const pp = require("../assets/pp.png");
const magazine = require("../assets/magazine.png");
const block = require("../assets/block.png");
const augmentedreality = require("../assets/augmented-reality.png");
const aim = require("../assets/aim.png");
const agronomy = require("../assets/agronomy.png");
const aib = require("../assets/aib.png");
const customerbehavior = require("../assets/customer-behavior.png");
const dl = require("../assets/dl.png");
const artificialintelligence = require("../assets/artificial-intelligence.png");
const math = require("../assets/math.png");
const physis = require("../assets/physis.png");

const images = [
  cs,
  biomass,
  cc,
  dd,
  pm,
  mb,
  fc,
  mv,
  cv,
  ws,
  psy,
  astro,
  ros,
  to,
  write,
  nano,
  exoskeleton,
  pp,
  magazine,
  block,
  augmentedreality,
  aim,
  agronomy,
  aib,
  customerbehavior,
  dl,
  artificialintelligence,
  math,
  physis
];

class Bookdetails extends Component {
  onPress(l) {
    this.props.navigation.navigate("DrivePdf", {
      screen: "DrivePdf",
      list: l,
      bookId: l.id,
      bookname: l.name
    });
  }
  render() {
    const books = this.props.books;
    console.log(books);
    return (
      <View style={{ backgroundColor: "#DAE0E2" }}>
        <FlatGrid
          itemDimension={130}
          items={books}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => this.onPress(item)}>
              <View style={[styles.itemContainer]}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={images[index]}
                />
                <Text style={styles.itemCode}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
  gridView: {
    marginTop: 10,
    flex: 1
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
    backgroundColor: "#fff"
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#000"
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

export default withNavigation(Bookdetails);
