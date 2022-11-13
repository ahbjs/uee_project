import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { IconButton } from "react-native-paper";

import Seller from "./DataAccess/Seller.Class";

const seller = new Seller();

export default function LorrySellingDetails({ navigation }) {
  const [Data, setData] = React.useState([]);

  const getAll = async () => {
    let data  = await seller.getAll();
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id  })));
  };

  React.useEffect(() => {
    getAll();

    const focusHandler = navigation.addListener('focus', () => {
      getAll();
    });
  },[navigation]);
  return (
    <View>
      {Data.map((data,index) => {
        return(
          <View key={data.id}>
            <Text style={{ fontSize: 40, top: 70, marginLeft: 20 }}>{index+1} </Text>
            <Text style={{ fontSize: 20, marginLeft: 70 }}>{data.sellerID}</Text>
            <Text style={{ fontSize: 15, marginLeft: 70 }}>{data.date}</Text>
            <Text style={{ fontSize: 30, marginLeft: 70 }}>{data.weight}kg</Text>
            <Text style={{ fontSize: 10, marginLeft: 70 }}>
              {data.address}
            </Text>
          </View>
        );
      })}
      
      <View style={{ marginLeft: 260, marginTop: 20 }}>
        <IconButton
          icon="plus-circle-outline"
          iconColor={"#09B44D"}
          size={50}
          onPress={() => navigation.navigate("AddLorrySellingDetails")}
        />
      </View>
    </View>
  );
}
