import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./LoginStyle";
import handleLoginService from "../../services/Service";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "../../redux/actions";

const LoginSeller = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const showHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    // const userInfoFromRedux = useSelector((state) => state);

    // console.log(userInfoFromRedux);
    // const {
    //     userName,
    //     userPermissions,
    //     userAvatar,
    //     accountName,
    //     nameShop,
    //     address,
    //     phoneNumber,
    // } = userInfoFromRedux;

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            if (!email || !password) {
                Alert.alert("Missing parameter!!");
                setIsLoading(false);
                return;
            }
            const res = await handleLoginService(email, password);
            if (res.data && res.data.EC === 0) {
                if (res.data.DT.userPermissions[0] === "NguoiMua") {
                    navigation.navigate("Drawer");
                } else {
                    navigation.navigate("DrawerSeller");
                }
                dispatch(
                    UserInfo(
                        res.data.DT.userName,
                        res.data.DT.userPermissions,
                        res.data.DT.avatar,
                        res.data.DT.accountName,
                        res.data.DT.nameShop
                    )
                );

                setIsLoading(false);
            } else {
                console.log(res.data.EM);
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleLoginBuyer = () => {
        navigation.navigate("LoginBuyer");
    };

    const handleRegisterSeller = () => {
        navigation.navigate("RegisterSeller");
    };

    return (
        <View style={styles.loginContainer}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../../../assets/logo.png")}
                />
                <Text>Account Login Seller</Text>
            </View>
            <View style={styles.loginInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <View style={{ position: "relative" }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={!isShowPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        onPress={showHidePassword}
                        style={styles.icon}
                    >
                        <Icon
                            name={isShowPassword ? "eye" : "eye-slash"}
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnSignUp}
                onPress={() => handleRegisterSeller()}
            >
                <Text style={styles.btnTextSignUp}>Create new account ???</Text>
            </TouchableOpacity>
            <View style={styles.loginBtn}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btnContinue}
                    onPress={() => handleLogin()}
                >
                    <View style={styles.btnTextLoginCont}>
                        <Text style={styles.btnTextLogin}>Login</Text>
                        {isLoading && (
                            <ActivityIndicator
                                color={"#ffffff"}
                                size={"small"}
                            />
                        )}
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Hoặc</Text>
            <View style={styles.loginSocial}>
                <View style={styles.loginBtn}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btnContinue}
                        onPress={() => handleLoginBuyer()}
                    >
                        <Text style={styles.btnTextLogin}>
                            Login with Buyer
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginSeller;
