import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    upload({ commit }, data) {
      return AuthService.upload(data).then(
        data => {
          console.log(data.updatedUser)
          commit('uploadSuccess', data.updatedUser);
          return Promise.resolve(data);
        },
        error => {
          commit('uploadFailure');
          return Promise.reject(error);
        },
      );
    },
    redeem({ commit }, submission) {
      console.log(submission)
      return AuthService.redeem(submission).then(
        data => {
          commit('redeemSuccess', submission.user);
          return Promise.resolve(data);
        },
        error => {
          commit('redeemFailure');
          return Promise.reject(error);
        },
      );
    },
    getItems({commit}, user) {
      return AuthService.getItems(user).then(
        data => {
          commit('getItemSuccess', user);
          return Promise.resolve(data);
        },
        error => {
          commit('getItemFailure');
          return Promise.reject(error);
        },
      )
    }

  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      if (user.userType == "Charity") {
        state.status.charity = true;
      } else if (user.userType == "Beneficiary") {
        state.status.beneficiary = true;
      }
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.status.charity = false;
      state.status.beneficiary = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    uploadSuccess(state, user) {
      state.status.uploaded = true;
      state.user = user;
    },
    uploadFailure(state) {
      state.status.uploaded = false;
    },
    redeemSuccess(state, user) {
      state.status.redeemed = true;
      state.user = user;
    },
    redeemFailure(state) {
      state.status.redeemed = false;
    },
    getItemSuccess(state, user) {
      state.status.gotItems = true;
      state.user = user;
    },
    getItemFailure(state) {
      state.status.gotItems = false;
    }
  }
};
