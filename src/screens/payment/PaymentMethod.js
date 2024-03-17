import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import styles from "./PaymentMethodStyle";

const PaymentMethod = ({ navigation, route }) => {
    const [showCheck, setShowCheck] = useState(false);
    // const [showCheck2, setShowCheck2] = useState(false);
    const [titlePayment, setTitlePayment] = useState("");
    const { quantity } = route.params;

    const handleShowIcon = (paymentText, paymentNumber) => {
        if (paymentNumber === 1) {
            setShowCheck(!showCheck);
            // setShowCheck2(false);
        }
        setTitlePayment(paymentText);
    };

    const handleAgreePayment = () => {
        navigation.navigate("OrderProduct", { titlePayment, quantity });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Phương thức thanh toán</Text>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={() => handleShowIcon("Thanh toán khi đặt hàng", 1)}
                >
                    <View style={styles.paymentItem}>
                        <FontAwesomeIcon
                            icon={faMoneyBill}
                            color="tomato"
                            size={25}
                        />
                        <Text style={styles.titleItem}>
                            Thanh toán khi đặt hàng
                        </Text>
                        {showCheck && (
                            <FontAwesomeIcon icon={faCheck} color="tomato" />
                        )}
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.btnAgree}
                onPress={handleAgreePayment}
            >
                <Text style={styles.textArgee}>Đồng ý</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentMethod;
