import jwtDecode from 'jwt-decode';
const Authenticate={

    isLoggedIn(){
        try{
            let token=jwtDecode(sessionStorage.getItem('Token'))
            return token.user_id
        }
        catch(e){
            return false
        }    
    },
    Logout() {
        return sessionStorage.clear();
    
      }

}
export default Authenticate;