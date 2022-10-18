export function authHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token');
    if (token) {
        return  {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
          };
    } else {
        return {};
    }
}