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

import { handleRegisterBuyerService } from "../../services/Service";

const RegisterBuyer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [accountName, setAccountName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegisterBuyer = async () => {
        try {
            setIsLoading(true);
            if (
                !email ||
                !password ||
                !username ||
                !phoneNumber ||
                !accountName
            ) {
                Alert.alert("Missing parameter!!");
                return;
            }
            const res = await handleRegisterBuyerService(
                email,
                username,
                password,
                phoneNumber,
                accountName
            );
            if (res.data.EC === 0) {
                Alert.alert(
                    "Register success",
                    "Please check your email to complete the registration."
                );
                navigation.navigate("LoginBuyer");
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
                <Text style={styles.title}>Register Buyer</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Account Name"
                    value={accountName}
                    onChangeText={(text) => setAccountName(text)}
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
                    onPress={() => handleRegisterBuyer()}
                >
                    <Text style={styles.registerButtonText}>
                        Register buyer
                    </Text>
                    {isLoading && (
                        <ActivityIndicator color={"#ffffff"} size={"small"} />
                    )}
                </TouchableOpacity>
            </View>
        </>
    );
};

export default RegisterBuyer;
