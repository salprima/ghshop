
export const isLoggedIn = function () {
    return !localStorage.getItem('loggedInUser');
}