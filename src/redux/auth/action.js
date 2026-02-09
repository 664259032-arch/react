import { LOGIN, LOGOUT } from "./actionTypes";

export const login = (data) => ({
    type: LOGIN,
    payload: {
        token: data.token,
        name: data.name,
        isAuthenticated: true,
    },
});

export const logout = () => ({
    type: LOGOUT,
});
