import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./OrderPlacedStyle";
const OrderPlaced = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đơn đặt hàng</Text>
            <Text style={styles.titleDetail}>Tất cả đơn hàng</Text>
        </View>
    );
};

export default OrderPlaced;
