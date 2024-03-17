import { SET_USER_INFO, RESET_STATE, SET_SELECTED_PRODUCT } from "./actions";

const initialState = {
    userName: "",
    userPermissions: [],
    userAvatar: "",
    accountName: "",
    nameShop: "",
    phoneNumber: "",
    address: "",
    idShippingAddress: "",
    selectedProduct: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userName: action.payload.userName,
                userPermissions: action.payload.userPermissions,
                userAvatar: action.payload.userAvatar,
                accountName: action.payload.accountName,
                nameShop: action.payload.nameShop,
                address: action.payload.address,
                phoneNumber: action.payload.phoneNumber,
                idShippingAddress: action.payload.idShippingAddress,
            };
        case RESET_STATE:
            return initialState;
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
