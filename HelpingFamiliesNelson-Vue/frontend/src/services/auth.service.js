import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
      address: user.address
    });
  }

  upload(data) {
    return axios.post(API_URL + 'uploadItem', {
      user: data.user,
      categoryName: data.category,
      size: data.size,
      gender: data.gender,
      age: data.age,
      other: data.other
    })
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.data.updatedUser));
      return response.data.message;
    })
  }

  redeem(user) {
    return axios.post(API_URL + 'redeem', {
      username: user.username
    })
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.data.updatedUser));
      return response.data.message;
    })
    
  }

  getItems(data) {
    return axios.post(API_URL + "getItems", {
      user: data
    })
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.data.updatedUser));
      return response.data.message;
    })
  }
}

export default new AuthService();
