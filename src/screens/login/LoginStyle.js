import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        paddingHorizontal: 30,
        marginTop: 30,
        backgroundColor: "#fff",
    },
    logoContainer: {
        alignItems: "center",
    },
    logo: {
        width: 190,
        height: 50,
        marginTop: 50,
        marginBottom: 10,
    },
    loginInput: {
        marginTop: 30,
        gap: 20,
    },
    textInput: {
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "#ccc",
        paddingLeft: 20,
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 10,
    },
    btnContinue: {
        backgroundColor: "#45849f",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    btnTextLogin: {
        textAlign: "center",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
        marginHorizontal: 15,
    },
    btnTextSignUp: {
        fontSize: 15,
        color: "#45849f",
        marginLeft: 130,
        marginTop: 10,
    },
    text: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
    },
    btnTextLoginCont: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
