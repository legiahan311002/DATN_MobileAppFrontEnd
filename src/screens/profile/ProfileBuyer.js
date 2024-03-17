import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./ProfileStyle";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowRight,
    faReorder,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
const ProfileBuyer = ({ navigation }) => {
    const dispatch = useDispatch();
    const userInfoFromRedux = useSelector((state) => state);

    const { accountName, userAvatar } = userInfoFromRedux;
    const handleLogout = () => {
        dispatch(resetState());
        navigation.navigate("LoginBuyer");
    };
    const handleOrderPlaced = () => {
        navigation.navigate("OrderPlaced");
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                {userAvatar ? (
                    <Image
                        source={{ uri: userAvatar }}
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: 100,
                            borderRadius: 50,
                        }}
                    />
                ) : (
                    <Text style={styles.noImageText}>
                        User hasn't uploaded an image.
                    </Text>
                )}
                <Text style={styles.accountName}>{accountName}</Text>
            </View>
            <View style={styles.profileContent}>
                <View style={styles.order}>
                    <FontAwesomeIcon
                        icon={faReorder}
                        size={20}
                        style={styles.icon}
                    />
                    <Text style={styles.orderTitle}>Đơn đặt hàng</Text>
                    <TouchableOpacity
                        onPress={handleOrderPlaced}
                        activeOpacity={0.5}
                    >
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size={20}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
                <View style={styles.order}>
                    <FontAwesomeIcon
                        icon={faRightToBracket}
                        size={20}
                        style={styles.icon}
                    />
                    <Text style={styles.orderTitle}>Logout</Text>
                    <TouchableOpacity
                        onPress={handleLogout}
                        activeOpacity={0.5}
                    >
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size={20}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
            </View>
        </View>
    );
};

export default ProfileBuyer;
