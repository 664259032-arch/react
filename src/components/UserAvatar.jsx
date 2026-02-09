import React from 'react';
import { useSelector } from 'react-redux';

const UserAvatar = ({ onClick }) => {
    // 1. Get from Redux
    const nameFromRedux = useSelector((state) => state.auth.name);

    // 2. Check Storage if Redux is empty
    const getStoredName = () => {
        const storedAuth = localStorage.getItem("auth") || sessionStorage.getItem("auth");
        if (storedAuth) {
            try {
                const parsed = JSON.parse(storedAuth);
                return parsed.name;
            } catch (e) {
                return null;
            }
        }
        return null;
    };

    const name = nameFromRedux || getStoredName();

    const initial = name?.charAt(0)?.toUpperCase() || "?";

    return (
        <div
            onClick={onClick}
            className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer select-none"
            title={name}
            style={{
                width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', cursor: 'pointer'
            }}
        >
            {initial}
        </div>
    );
};

export default UserAvatar;
