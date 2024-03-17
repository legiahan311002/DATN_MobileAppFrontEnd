import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  LogBox,
  ActivityIndicator,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import * as services from "../../services/Service";
import { useSelector } from "react-redux";
import axios from "axios";

import styles from "./AddProductStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import * as ImagePicker from "expo-image-picker";

const dataSize = [
  { key: "1", value: "S" },
  { key: "2", value: "M" },
  { key: "3", value: "L" },
  { key: "4", value: "XL" },
  { key: "5", value: "2XL" },
];

const AddProduct = ({ navigation }) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [valueCategory, setValueCategory] = useState(null);
  const [itemsCategory, setItemsCategory] = useState([]);

  const [openCategoryChild, setOpenCategoryChild] = useState(false);
  const [valueCategoryChild, setValueCategoryChild] = useState(null);
  const [itemsCategoryChild, setItemsCategoryChild] = useState([]);

  const [selectedSize, setSelectedSize] = useState([]);
  const [isCateOpen, setIsCateOpen] = useState(false);

  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodColorName, setProdColorName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodNumber, setProdNumber] = useState("");
  const [prodImage, setProdImage] = useState(null);
  const [image, setImage] = useState(null);
  const [prodStyles, setProdStyles] = useState([]);
  const [prodStyleItem, setProdStyleItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingStyle, setLoadingStyle] = useState(false);

  useEffect(() => {
    //get category
    const getCategory = async () => {
      const res = await services.handleGetCategoryService();

      if (res && res.data && res.data.DT) {
        let data = res.data.DT;

        const newData = [];
        data.forEach((cate) => {
          newData.push({
            id: cate.id,
            label: cate.name_category,
            value: cate.name_category,
            child: cate.name_category_sub,
          });
        });

        setItemsCategory(newData);
      }
    };

    getCategory();

    //ignore warning scrollView
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  useLayoutEffect(() => {
    if (!valueCategory) return;

    const cateItemSelected = itemsCategory.find(
      (i) => i.value === valueCategory
    );

    if (cateItemSelected.child.length > 0) {
      const newCateChildArr = cateItemSelected.child.map((item, index) => {
        return { id: index, label: item, value: item };
      });

      setItemsCategoryChild(newCateChildArr);
    } else {
      setItemsCategoryChild([]);
    }
  }, [valueCategory]);

  useEffect(() => {
    if (prodImage) {
      setProdStyleItem((prev) => {
        return { ...prev, image: prodImage };
      });
    }
  }, [prodImage]);

  useEffect(() => {
    if (prodStyleItem && prodStyleItem.image) {
      setProdStyles((prev) => [...prev, prodStyleItem]);
    }
  }, [prodStyleItem]);

  useEffect(() => {
    if (prodStyles.some((item) => item.image === prodStyleItem.image)) {
      setProdStyleItem({});
    }
  }, [prodStyles]);

  useEffect(() => {
    if (openCategory || openCategoryChild) {
      setIsCateOpen(true);
    } else {
      setIsCateOpen(false);
    }
  }, [openCategory, openCategoryChild]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCreateStyle = async () => {
    setLoadingStyle(true);
    if (!image) {
      Alert.alert("Chọn ảnh giùm cái...");
      return;
    }

    await uploadToCloudinary(image);

    if (!prodColorName || !prodPrice || !prodNumber || !selectedSize) {
      Alert.alert("Nhập tất cả thông tin!");
      return;
    }

    setProdStyleItem({
      prodColorName,
      prodPrice,
      prodNumber,
      size: selectedSize,
    });

    setProdColorName("");
    setProdPrice("");
    setProdNumber("");
    setSelectedSize([]);
    setImage(null);
    setProdImage(null);
    setLoadingStyle(false);
  };

  // upload to cloudinary function
  const uploadToCloudinary = async (img) => {
    if (!img) {
      console.error("Image source not found");
      return;
    }

    const formData = new FormData();
    formData.append("file", {
      uri: img,
      type: "image/jpeg", // Adjust the type based on your image type
      name: "upload.jpg",
    });
    formData.append("upload_preset", "seasideImage");
    formData.append("cloud_name", "dhksjdthr");
    formData.append("folder", "seaside-app");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dhksjdthr/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setProdImage(response.data.url);
  };

  const handleBackToHomeSeller = () => {
    navigation.navigate("HomeSeller");
  };

  const reduxState = useSelector((state) => state);

  const handleCreateProd = async () => {
    setLoading(true);
    if (!valueCategoryChild) {
      Alert.alert(
        "Chọn danh mục muốn thêm sản phẩm vào,nếu chưa có ,vui lòng tạo!"
      );
      return;
    }
    if (!prodName || !prodDesc) {
      Alert.alert("Nhập tất cả thông tin!");
      return;
    }
    if (!prodStyles) {
      Alert.alert("Tạo các style của sản phẩm!");
      return;
    }

    const data = {
      nameCategoryChild: valueCategoryChild,
      prodNameShop: reduxState.nameShop || "GIÀY UMI",
      prodName,
      prodDesc,
      prodStyles,
    };

    const res = await services.handleCreateNewProduct(data);
    console.log(res.data);
    if (res && res.data && res.data.EC === 0) {
      Alert.alert("Create successful!");
      setProdName("");
      setProdDesc("");
      setProdStyles([]);
    } else {
      Alert.alert("Error.try again!");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>ADD PRODUCT</Text>
        <TouchableOpacity
          onPress={handleBackToHomeSeller}
          style={styles.btnBack}
          activeOpacity={0.7}
        >
          <FontAwesomeIcon size={28} color="#fff" icon={faLeftLong} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={false}>
        <View style={styles.addContainer}>
          <View style={[styles.cateContainer, isCateOpen && styles.fixHeight]}>
            <View style={styles.itemContainer}>
              <Text style={styles.typeTitle}>Product Type</Text>
              <DropDownPicker
                style={styles.drop1}
                open={openCategory}
                zIndex={1000}
                zIndexInverse={1000}
                value={valueCategory}
                items={itemsCategory}
                placeholder="Selected Category Type"
                setOpen={setOpenCategory}
                setValue={setValueCategory}
                setItems={setItemsCategory}
              />
            </View>
            <View style={styles.itemContainer}>
              {valueCategory !== null && itemsCategoryChild.length > 0 && (
                <View>
                  <Text style={styles.typeTitle}>Category</Text>
                  <DropDownPicker
                    open={openCategoryChild}
                    value={valueCategoryChild}
                    items={itemsCategoryChild}
                    placeholder="Selected Category Type"
                    setOpen={setOpenCategoryChild}
                    setValue={setValueCategoryChild}
                    setItems={setItemsCategoryChild}
                  />
                </View>
              )}

              {valueCategory !== null && itemsCategoryChild.length === 0 && (
                <>
                  <Text style={styles.colorRed}>
                    Chú ý: Loại sản phẩm này chưa có danh mục. Thêm danh mục
                    trước khi tạo mới sản phẩm.
                  </Text>
                </>
              )}
            </View>
          </View>

          <View style={styles.prodInfoContainer}>
            <Text style={styles.typeTitle}>Product Infomation</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setProdName}
              value={prodName}
              placeholder="Name product..."
            />

            <Text style={styles.typeTitle} onChangeText={setProdDesc}>
              Product description
            </Text>
            <TextInput
              style={styles.textInput}
              value={prodDesc}
              onChangeText={setProdDesc}
              placeholder="Name description..."
            />
          </View>

          <View style={styles.colorOption}>
            <Text style={styles.typeTitle}>Color </Text>
          </View>

          <View style={styles.colorContainer}>
            <MultipleSelectList
              setSelected={(val) => setSelectedSize(val)}
              data={dataSize}
              placeholder="Select Size"
              save="value"
              search={false}
              label="Select Size"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={setProdColorName}
              value={prodColorName}
              placeholder="Color style..."
            />
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={prodPrice}
              onChangeText={setProdPrice}
              placeholder="Price..."
            />
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={prodNumber}
              placeholder="Product number..."
              onChangeText={setProdNumber}
            />
            <View>
              <TouchableOpacity style={styles.btnAddColor} onPress={pickImage}>
                <Text style={styles.textAddColor}>
                  Pick an image from gallery
                </Text>
              </TouchableOpacity>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
            </View>

            <TouchableOpacity onPress={handleCreateStyle} style={styles.btnAdd}>
              {loadingStyle && <ActivityIndicator color="#fff" />}
              <Text style={styles.btnText}>ADD STYLE</Text>
            </TouchableOpacity>

            <View style={styles.prodInfoContainer}>
              <Text>List Styles</Text>
              {prodStyles.length > 0 &&
                prodStyles.map((item, index) => (
                  <View key={index} style={styles.orderItem}>
                    <Image
                      style={styles.orderImage}
                      source={{ uri: item.image }}
                    />
                    <View style={styles.orderNameCont}>
                      <Text style={styles.name}>{item.prodColorName}</Text>
                      <Text style={styles.desc}>price: {item.prodPrice}</Text>
                    </View>
                    <View style={styles.orderNameCont}>
                      <Text>quantity</Text>
                      <Text style={styles.name}>{item.prodNumber}</Text>
                    </View>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleCreateProd} style={styles.btnCreate}>
        {loading && <ActivityIndicator color="#fff" />}
        <Text style={styles.btnText}>CREATE PRODUCT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProduct;
