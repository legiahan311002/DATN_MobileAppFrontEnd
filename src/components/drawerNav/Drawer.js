import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeBuyer from "../../screens/home/HomeBuyer";
import ProfileBuyer from "../../screens/profile/ProfileBuyer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
const DrawerNav = createDrawerNavigator();
const Drawer = () => {
    const getIcon =
        (icon) =>
        ({ color, size }) =>
            <FontAwesomeIcon icon={icon} color={color} size={size} />;
    return (
        <DrawerNav.Navigator initialRouteName="HomeBuyer">
            <DrawerNav.Screen
                name="Home"
                component={HomeBuyer}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                    drawerIcon: getIcon(faHome),
                }}
            />
            <DrawerNav.Screen
                name="Profile"
                component={ProfileBuyer}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                    drawerIcon: getIcon(faUser),
                }}
            />
        </DrawerNav.Navigator>
    );
};

export default Drawer;
