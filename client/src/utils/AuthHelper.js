const AuthHelpers = {
    isAuthenticated: () => {
        return !!localStorage.getItem("auth_token");
    }
}

export default AuthHelpers;