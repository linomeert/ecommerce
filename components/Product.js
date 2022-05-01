import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
export function Product({
  product_name,
  product_id,
  orderable,
  price,
  onPress,
}) {
  let image = `https://www.lolaliza.com/on/demandware.static/-/Sites-lolaliza-catalog/default/dwbf4891e3/images/${product_id}_01.jpg`;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product_name}</Text>
        <Text style={orderable ? styles.instock : styles.outstock}>
          {orderable ? "In stock" : "Out of stock"}
        </Text>

        <Text style={styles.price}>{price} EUR</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 400,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  instock: {
    color: "green",
    paddingTop: 5,
    paddingBottom: 5,
  },
  outstock: {
    color: "red",
    paddingTop: 5,
    paddingBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
