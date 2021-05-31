import axios from 'axios';

//sets API_URL to that of the backend auth
const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  //handles login request using user data submitted
  login(user) {
    return axios
    //requests signin from backend using API_URL and the username and password entered
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        //tokenises data
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        //returns user data received from backend
        return response.data;
      });
  }

  // removes user from local storage to clear cache
  logout() {
    localStorage.removeItem('user');
  }

  //handles register request using user data submitted
  register(user) {
    //requests signup from backend using API_URL and the user data entered
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
      address: user.address,
      userType: user.userType,
    });
  }

  // handles upload request using the data submitted
  upload(data) {
    //requests uploadItem from backend using API_URL and the user and item data entered
    return axios.post(API_URL + 'uploadItem', {
      user: data.user,
      categoryName: data.category,
      size: data.size,
      gender: data.gender,
      age: data.age,
      other: data.other
    })
    .then(response => {
      //sets browsers user to match returned user
      localStorage.setItem('user', JSON.stringify(response.data.updatedUser));
      return response.data.message;
    })
  }

  // handles redeem request using the user submitted
  redeem(user) {
    //requests redeem from backend using API_URL and the username of the data entered
    return axios.post(API_URL + 'redeem', {
      username: user.username
    })
    .then(response => {
      //sets browsers user to match returned user
      localStorage.setItem('user', JSON.stringify(response.data.updatedUser));
      return response.data.message;
    })
    
  }

  // handles getItems request using the user submitted
  getItems(data) {
    //requests getitems from backend using API_URL and the user data entered
    return axios.post(API_URL + "getItems", {
      user: data
    })
    .then(response => {
      //sets browsers user to match returned user
      localStorage.setItem('user', JSON.stringify(response.data.updatedUser));
      return response.data.message;
    })
  }
}

export default new AuthService();
