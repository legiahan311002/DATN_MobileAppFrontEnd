import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";

import styles from "./RegisterStyle";

import { handleRegisterSellerService } from "../../services/Service";

const RegisterSeller = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nameShop, setNameShop] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegisterSeller = async () => {
        try {
            setIsLoading(true);
            if (!email || !password || !username || !phoneNumber || !nameShop) {
                Alert.alert("Missing parameter!!");
                return;
            }
            const res = await handleRegisterSellerService(
                email,
                username,
                password,
                phoneNumber,
                nameShop
            );
            if (res.data.EC === 0) {
                Alert.alert(
                    "Register success",
                    "Please check your email to complete the registration."
                );
                navigation.navigate("LoginSeller");
                setIsLoading(false);
            } else {
                Alert.alert("Register error ", res.data.EM);
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Something went wrong.");
        }
    };

    return (
        <>
            <View style={styles.RegisterBuyerContainer}>
                <Text style={styles.title}>Register Seller</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name Shop"
                    value={nameShop}
                    onChangeText={(text) => setNameShop(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    secureTextEntry
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    keyboardType="phone-pad"
                />

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handleRegisterSeller}
                >
                    <Text style={styles.registerButtonText}>
                        Register Seller
                    </Text>
                    {isLoading && (
                        <ActivityIndicator color={"#ffffff"} size={"small"} />
                    )}
                </TouchableOpacity>
            </View>
        </>
    );
};

export default RegisterSeller;
