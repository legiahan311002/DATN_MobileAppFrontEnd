import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { resetState } from "../../../redux/actions";
import styles from "./DrawerSellerContentStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const DrawerSellerContent = ({ navigation, open }) => {
    const dispatch = useDispatch();

    const handleDirectHome = () => {
        open();
    };

    const handleLogout = () => {
        dispatch(resetState());
        open();
        navigation.navigate("LoginSeller");
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={handleDirectHome}
                    activeOpacity={0.5}
                    style={styles.itemContainer}
                >
                    <FontAwesomeIcon size={26} icon={faHome} />
                    <Text style={styles.itemTitle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleLogout}
                    activeOpacity={0.5}
                    style={styles.itemContainer}
                >
                    <FontAwesomeIcon size={26} icon={faUser} />
                    <Text style={styles.itemTitle}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DrawerSellerContent;
