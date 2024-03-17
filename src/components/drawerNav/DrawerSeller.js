import { Drawer } from "react-native-drawer-layout";
import { useState } from "react";

import HomeSeller from "../../screens/home/HomeSeller";
import DrawerSellerContent from "./drawerSellerContent/DrawerSellerContent";

const DrawerSeller = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [openHomeSeller, setOpenHomeSeller] = useState(true);

    const handleToggleDrawer = () => {
        setOpen(!open);
    };

    const handleOpenHomeSeller = () => {
        setOpenHomeSeller(true);
        setOpen(!open);
    };

    return (
        <Drawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            renderDrawerContent={() => {
                return (
                    <>
                        {openHomeSeller && (
                            <DrawerSellerContent
                                navigation={navigation}
                                open={handleOpenHomeSeller}
                            />
                        )}
                    </>
                );
            }}
        >
            <HomeSeller
                navigation={navigation}
                handleToggleDrawer={handleToggleDrawer}
            />
        </Drawer>
    );
};

export default DrawerSeller;
