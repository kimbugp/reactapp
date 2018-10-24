import jwt_decode from 'jwt-decode';

let token=localStorage.getItem('token')
let decoded=jwt_decode(token)


export default decoded;