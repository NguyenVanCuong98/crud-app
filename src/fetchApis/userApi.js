// src/api/userApi.js
export const fetchUserData = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
};
