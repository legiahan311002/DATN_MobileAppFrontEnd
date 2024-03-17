import React from "react";

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState, useEffect } from "react";
import styles from "./AlertOrderStyle";
import { useSelector } from "react-redux";
const AlertOrder = ({
    isVisible,
    toggleAlert,
    handleCloseModal,
    navigation,
}) => {
    const selectedProduct = useSelector((state) => state.selectedProduct);
    const product = selectedProduct;
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (product.size) {
            const sizeArray = Array.isArray(product.size)
                ? product.size
                : [product.size];
            const sizeItems = sizeArray.map((size) => ({
                label: size,
                value: size,
            }));
            setItems(sizeItems);
        }
    }, [product.size]);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleOrder = () => {
        navigation.navigate("OrderProduct", {
            quantity: quantity,
        });
    };
    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="slide"
            onRequestClose={toggleAlert}
        >
            <View style={styles.container}>
                <View style={styles.overlay}></View>
                <View style={styles.content}>
                    <TouchableOpacity onPress={handleCloseModal}>
                        <Text style={styles.closeModalText}>Đóng</Text>
                    </TouchableOpacity>
                    <View style={styles.contentHeader}>
                        <Image
                            style={styles.img}
                            source={{ uri: product.url_image }}
                        />
                        <View style={styles.priceProduct}>
                            <Text style={styles.textPrice}>
                                {product.price}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                Kho: {product.product_number}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.contentCenter}>
                        <View style={styles.contentSize}>
                            <Text style={{ fontSize: 15 }}>Kích cỡ</Text>
                            <DropDownPicker
                                style={styles.dropdownSize}
                                open={open}
                                value={value}
                                items={items}
                                placeholder="Size"
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        </View>
                        <View style={styles.contentQuantity}>
                            <Text style={{ fontSize: 15 }}>Số lượng</Text>
                            <View style={styles.inputQuantity}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleDecrement}
                                >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>

                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    value={quantity.toString()}
                                    onChangeText={(text) =>
                                        setQuantity(parseInt(text) || 0)
                                    }
                                />

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleIncrement}
                                >
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.btnOrder}
                        onPress={handleOrder}
                    >
                        <Text style={styles.btnOrderText}>Mua ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default AlertOrder;
