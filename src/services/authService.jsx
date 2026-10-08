import api from '../axios'

//Handle login

export const loginService = async (credentials) => {
    const response = await api.post('/login', credentials);
    return response;

}

//Handle Register

export const RegisterService = async (data) => {
    const response = await api.post('/register', data);
    return response
}


//Handle Logout
export const logoutService = async (token) => {
    const response = await api.post('/logout', {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
}