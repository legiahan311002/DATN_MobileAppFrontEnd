import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import ScrollingButtonMenu from "react-native-scroll-menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faCartShopping,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import * as services from "../../services/Service";
import { useDispatch } from "react-redux";
import styles from "./HomeBuyerStyles";
import { setSelectedProduct } from "../../redux/actions";

const HomeBuyer = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [dataProduct, setDataProduct] = useState([]);
  const [isFocusSearch, setIsFocusSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryArray, setCategoryArray] = useState([]);
  const [subCategoryArray, setsubCategoryArray] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSubIndex, setSelectedSubIndex] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(!isLoading);

    const getProducts = async () => {
      const res = await services.handleGetProducts();

      if (res && res.data && res.data.DT) {
        const dataProd = res.data.DT;

        const resultData = [];
        const idContain = [];
        dataProd.forEach((prod) => {
          if (!idContain.includes(prod.product_id)) {
            idContain.push(prod.product_id);
            resultData.push(prod);
          }
        });

        setDataProduct(resultData);
      }
    };

    getProducts();
    setIsLoading(!isLoading);
  }, []);

  // get category
  useEffect(() => {
    const getCategory = async () => {
      const res = await services.handleGetCategoryService();

      if (res && res.data && res.data.DT) {
        let data = res.data.DT;

        const categoryArr = data.map((item) => ({
          id: item.id,
          name: item.name_category,
          sub_category: item.name_category_sub,
        }));

        setCategoryArray(categoryArr);
      }
    };

    getCategory();
  }, []);

  const handleSelectCategory = (e) => {
    if (selectedIndex === e.id) {
      setSelectedIndex(0);
      return;
    }

    setSelectedIndex(e.id);
  };

  //get category child
  useEffect(() => {
    if (selectedIndex === 0) {
      setsubCategoryArray([]);
      return;
    }
    if (categoryArray && categoryArray[selectedIndex - 1]) {
      const cateItem = categoryArray[selectedIndex - 1];

      setsubCategoryArray(cateItem.sub_category);
    }
  }, [selectedIndex]);

  const handleToggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const handleProductDetail = (item) => {
    dispatch(setSelectedProduct(item));
    navigation.navigate("ProductDetail");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
        <TouchableOpacity
          onPress={handleToggleDrawer}
          style={styles.barsIconContainer}
        >
          <FontAwesomeIcon style={styles.barsIcon} icon={faBars} />
        </TouchableOpacity>
        <View style={styles.search_container}>
          <FontAwesomeIcon icon={faSearch} />
          <TextInput
            style={styles.search_input}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
            onFocus={() => setIsFocusSearch(true)}
            onBlur={() => setIsFocusSearch(false)}
          />

          <FontAwesomeIcon icon={faClose} />
        </View>
        {!isFocusSearch && (
          <View>
            <FontAwesomeIcon icon={faCartShopping} />

            <View style={styles.item_cart_numb}>
              <Text>1</Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.cateMain}>
        <ScrollingButtonMenu
          items={categoryArray ? categoryArray : []}
          onPress={(e) => handleSelectCategory(e)}
          selected={selectedIndex}
        />
      </View>

      <ScrollView>
        <View style={styles.content}>
          {subCategoryArray.length > 0 && (
            <View style={styles.category}>
              <Text>Category</Text>
              <ScrollView
                horizontal={true}
                style={{
                  flex: 1,
                  width: "100%",
                  maxWidth: "500",
                }}
              >
                {subCategoryArray.map((item, index) => (
                  <View
                    key={index}
                    onPress={() => handleSelectSubCategory(item)}
                    style={styles.category_item}
                  >
                    <View style={styles.cate_item_icon}>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </View>
                    <Text style={styles.cate_item_title}>{item}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
          <Text>Suggestions for today</Text>
          <View style={styles.category}>
            <ScrollView>
              <TouchableOpacity style={styles.prod_cont}>
                {dataProduct &&
                  dataProduct.map((item, index) => {
                    return (
                      <View key={index} style={styles.product_item}>
                        <TouchableOpacity
                          onPress={() => handleProductDetail(item)}
                        >
                          <View style={styles.prod_img_cont}>
                            <Image
                              style={styles.prod_image}
                              source={{
                                uri: item.url_image,
                              }}
                            />
                          </View>
                          <Text style={styles.cate_item_title}>
                            {item.name_product}
                          </Text>
                          <View>
                            <Text>{item.price}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeBuyer;
