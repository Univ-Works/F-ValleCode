export const setAuthHeader = (header, data) => {
    if (data !== null) {
        window.localStorage.setItem(header, data);
    } else {
        window.localStorage.removeItem(header);
    }
}