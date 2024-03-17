import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import LoginBuyer from "./src/screens/login/LoginBuyer";
import HomeBuyer from "./src/screens/home/HomeBuyer";
import LoginSeller from "./src/screens/login/LoginSeller";
import RegisterBuyer from "./src/screens/register/RegisterBuyer";
import HomeSeller from "./src/screens/home/HomeSeller";
import RegisterSeller from "./src/screens/register/RegisterSeller";
import Drawer from "./src/components/drawerNav/Drawer";
import DrawerSeller from "./src/components/drawerNav/DrawerSeller";
import DrawerSellerContent from "./src/components/drawerNav/drawerSellerContent/DrawerSellerContent";
import AddCategory from "./src/screens/addCategory/AddCategory";
import AddProduct from "./src/screens/addProduct/AddProduct";
import ProfileBuyer from "./src/screens/profile/ProfileBuyer";
import ProductDetail from "./src/screens/detailProduct/ProductDetail";
import OrderProduct from "./src/screens/orderProduct/OrderProduct";
import PaymentMethod from "./src/screens/payment/PaymentMethod";
import OrderPlaced from "./src/screens/orderPlaced/OrderPlaced";

const Stack = createNativeStackNavigator();

const App = () => {
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: 0,
        },
    });

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator: forFade,
                    }}
                    initialRouteName="LoginBuyer"
                >
                    <Stack.Screen
                        name="LoginBuyer"
                        component={LoginBuyer}
                        options={{ cardStyleInterpolator: forFade }}
                    />
                    <Stack.Screen name="LoginSeller" component={LoginSeller} />
                    <Stack.Screen
                        name="RegisterBuyer"
                        component={RegisterBuyer}
                    />
                    <Stack.Screen
                        name="RegisterSeller"
                        component={RegisterSeller}
                    />
                    <Stack.Screen name="HomeBuyer" component={HomeBuyer} />
                    <Stack.Screen name="Drawer" component={Drawer} />
                    <Stack.Screen name="HomeSeller" component={HomeSeller} />
                    <Stack.Screen
                        name="DrawerSeller"
                        component={DrawerSeller}
                    />
                    <Stack.Screen
                        name="DrawerSellerContent"
                        component={DrawerSellerContent}
                    />
                    <Stack.Screen name="AddCategory" component={AddCategory} />
                    <Stack.Screen name="AddProduct" component={AddProduct} />
                    <Stack.Screen
                        name="ProfileBuyer"
                        component={ProfileBuyer}
                    />
                    <Stack.Screen
                        name="ProductDetail"
                        component={ProductDetail}
                    />
                    <Stack.Screen
                        name="OrderProduct"
                        component={OrderProduct}
                    />
                    <Stack.Screen
                        name="PaymentMethod"
                        component={PaymentMethod}
                    />
                    <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
