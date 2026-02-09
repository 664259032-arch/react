export const loginService = async (credentials) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.email && credentials.password) {
                // Mock success
                resolve({
                    token: "mock-jwt-token-123456",
                    // API might return other user data
                });
            } else {
                reject({
                    response: {
                        data: {
                            message: "Invalid credentials"
                        }
                    }
                });
            }
        }, 1000);
    });
};
