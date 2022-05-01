import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from "react-native";
import { getProduct } from "../services/ProductsService.js";
import { CartContext } from "../CartContext";
import Alert from "../components/Alert";

export function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const [isShowAlert, setIsShowAlert] = useState(false);

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  function onAddToCart() {
    addItemToCart(product.product_id);
    setIsShowAlert(true);
  }

  let images = Array.from(Array(4).keys()).map((id) => {
    return `https://www.lolaliza.com/on/demandware.static/-/Sites-lolaliza-catalog/default/dwbf4891e3/images/${
      product.product_id
    }_0${id + 1}.jpg`;
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <Alert
          message="Product added to basket!"
          isShowAlert={isShowAlert}
          setIsShowAlert={setIsShowAlert}
        />
        <Image style={styles.image} source={{ uri: images[0] }} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.product_name}</Text>
          <Button onPress={onAddToCart} title="Add to cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
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
  image: {
    height: 500,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
