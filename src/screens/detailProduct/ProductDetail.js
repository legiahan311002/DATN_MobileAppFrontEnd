import React from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import styles from "./ProductDetailStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart, faStar, faLocation } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AlertOrder from "../../components/alertOrder/AlertOrder";
import { useSelector } from "react-redux";

const ProductDetail = ({ route, navigation }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const selectedProduct = useSelector((state) => state.selectedProduct);

  const toggleAlert = () => {
    setIsAlertVisible(true);
  };

  const handleToggle = () => {
    toggleAlert();
  };

  const handleCloseModal = () => {
    setIsAlertVisible(false);
  };

  const product = selectedProduct;
  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image
          style={styles.image}
          source={{
            uri: product.url_image,
          }}
        />
        <View style={styles.productDetail}>
          <Text style={styles.productName}>{product.name_product}</Text>
          <Text style={styles.productPrice}>{product.price} đ</Text>
          <View style={styles.productStar}>
            <View style={styles.iconStar}>
              <FontAwesomeIcon
                style={[styles.icon, { color: "#FFD700" }]}
                icon={faStar}
              />
              <FontAwesomeIcon
                style={[styles.icon, { color: "#FFD700" }]}
                icon={faStar}
              />
              <FontAwesomeIcon
                style={[styles.icon, { color: "#FFD700" }]}
                icon={faStar}
              />
              <FontAwesomeIcon
                style={[styles.icon, { color: "#FFD700" }]}
                icon={faStar}
              />
              <FontAwesomeIcon
                style={[styles.icon, { color: "#FFD700" }]}
                icon={faStar}
              />
            </View>
            <View style={styles.line}></View>
            <Text>Đã bán 10</Text>
            <FontAwesomeIcon icon={faHeart} />
          </View>

          <View style={styles.productShop}>
            <Image style={styles.imgShop} source={{ uri: product.avt }} />
            <View style={styles.shopInfo}>
              <Text>{product.name_shop}</Text>
              <Text>Online</Text>
              <View style={styles.addressShop}>
                <FontAwesomeIcon icon={faLocation} />
                <Text>{product.address}</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnShop}>
              <Text style={styles.btnTextShop}>Xem Shop</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buyContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnBuy}
          onPress={handleToggle}
        >
          <Text style={styles.btnTextBuy}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
      <AlertOrder
        isVisible={isAlertVisible}
        toggleAlert={toggleAlert}
        handleCloseModal={handleCloseModal}
        navigation={navigation}
      />
    </View>
  );
};

export default ProductDetail;
