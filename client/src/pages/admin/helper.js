import jwt_decode from 'jwt-decode';
import setAuthToken from '../../api/setAuthToken';

export function isAuthenticated() {
    
    if (localStorage.jwtToken) {
        setAuthToken(`Bearer ${localStorage.jwtToken}`);
        const decoded = jwt_decode(localStorage.jwtToken);
        
        const currentTime = Date.now() / 1000;
        
        if (decoded.exp < currentTime) {
          localStorage.removeItem('jwtToken');
          setAuthToken(false);
          return false; 
        }

        if(decoded) {
            return true; 
        } 

        return false; 

      }

      return false; 
}


export function logOut() {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
} 