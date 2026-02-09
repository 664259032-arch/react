import { LOGIN, LOGOUT } from "./actionTypes";

const initialState = {
    token: null,
    name: null,
    isAuthenticated: false,
};

// Check storage for initial state
const storedAuth = sessionStorage.getItem("auth") || localStorage.getItem("auth");
if (storedAuth) {
    try {
        const parsed = JSON.parse(storedAuth);
        initialState.token = parsed.token;
        initialState.name = parsed.name;
        initialState.isAuthenticated = true;
    } catch (e) {
        console.error("Failed to parse auth storage", e);
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.payload.token,
                name: action.payload.name,
                isAuthenticated: action.payload.isAuthenticated,
            };
        case LOGOUT:
            localStorage.removeItem("auth");
            sessionStorage.removeItem("auth");
            return {
                ...state,
                token: null,
                name: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
