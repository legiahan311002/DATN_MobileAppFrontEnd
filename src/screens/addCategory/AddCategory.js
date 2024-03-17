import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as services from "../../services/Service";
import { useSelector } from "react-redux";

import styles from "./AddCateStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const AddCategory = ({ navigation }) => {
  const [cateName, setCateName] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(false);

  const userNameRedux = useSelector((state) => state.userName);
  // get category
  useEffect(() => {
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

        setItems(newData);
      }
    };

    getCategory();
  }, []);

  const handleAddNew = async () => {
    if (!userNameRedux) {
      Alert.alert("Không tìm thấy thông tin shop!");
      return;
    }
    if (cateName.trim() === "" || !cateName.trim()) {
      Alert.alert("Nhập tên danh mục!");
      return;
    }

    if (value === null) {
      Alert.alert("Chọn loại danh mục!");
      return;
    }

    const itemSelected = items.find((i) => i.value === value);

    if (itemSelected.value === cateName.trim()) {
      Alert.alert("Tên danh mục mới trùng với loại danh mục.Chọn tên khác!");
      return;
    }

    if (itemSelected.child.length > 0) {
      const found = itemSelected.child.find(
        (element) => element === cateName.trim()
      );
      if (found) {
        Alert.alert("Đã có danh mục này!");
        return;
      }
    }

    try {
      setloading(true);
      const userName = userNameRedux;
      const res = await services.handleAddNewCategory(
        cateName,
        itemSelected.id,
        userName
      );
      if (res && res.data && res.data.EC === 0) {
        Alert.alert("Thêm thành công!");
      }
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  const handleBackToHomeSeller = () => {
    navigation.navigate("HomeSeller");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>ADD CATEGORY</Text>
        <TouchableOpacity
          onPress={handleBackToHomeSeller}
          style={styles.btnBack}
          activeOpacity={0.7}
        >
          <FontAwesomeIcon size={28} color="#fff" icon={faLeftLong} />
        </TouchableOpacity>
      </View>
      <View style={styles.addContainer}>
        <View style={styles.addInfo}>
          <Text style={styles.typeTitle}>Category Type</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            placeholder="Selected Category Type"
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

          <Text style={styles.typeTitle}>New Category</Text>
          <TextInput
            style={styles.cateInput}
            onChangeText={setCateName}
            placeholder="Type Category..."
          />

          <TouchableOpacity
            onPress={handleAddNew}
            style={styles.btnAdd}
            activeOpacity={0.7}
          >
            {loading && <ActivityIndicator size={26} color={"#fff"} />}
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddCategory;
