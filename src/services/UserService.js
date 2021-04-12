import { create } from './BaseService';

const http = create(); // We need the token here so it must not be set to false

export const getUserInfo = () => {
    return http.get('/users/me'); // Will be used on App.js (before learning context)
}
