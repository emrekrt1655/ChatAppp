export const resolveAuthError = (code) => {
    switch (code) {
        case 'auth/wrong-password':
            return 'Invalid password'
        case 'auth/user-not-found':
            return 'User not found';
        case 'auth/null-value':
            return 'E-Mail or Password can not be empty'
        default:
            break
    }
}