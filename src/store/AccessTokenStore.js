// The token is taken out to be managed from anywhere it's required and avoid having to create the logic every time
let accessToken = window.localStorage.getItem('token') || null // First of all when the page is loaded we must check if there's a current token stored into Local Storage using .getItem() method

export const getAccessToken = () => accessToken // When this funciton is called you get the access token

export const setAccessToken = (token) => {
    window.localStorage.setItem('token', token) // .setItem() method's first arg is the name of the key we want to save into Local Storage and the second arg is the value
    accessToken = token
}

export const logout = () => {
    window.localStorage.removeItem('token') // We just use removeItem() method to delete the token and then the session will be destroyed
    window.location.assign('/signin')
}