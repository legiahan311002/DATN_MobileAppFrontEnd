// actions.js
export const SET_USER_INFO = "SET_USER_INFO";
export const RESET_STATE = "RESET_STATE";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";

export const setSelectedProduct = (productData) => ({
    type: SET_SELECTED_PRODUCT,
    payload: productData,
});
export const UserInfo = (
    userName,
    userPermissions,
    userAvatar,
    accountName,
    nameShop,
    address,
    phoneNumber,
    idShippingAddress
) => ({
    type: SET_USER_INFO,
    payload: {
        userName,
        userPermissions,
        userAvatar: userAvatar || null,
        accountName: accountName || null,
        nameShop: nameShop || null,
        address: address || null,
        phoneNumber: phoneNumber || null,
        idShippingAddress: idShippingAddress || null,
    },
});

export const resetState = () => ({
    type: RESET_STATE,
});
