import axios from "axios";

const API_ROOT = "https://maximum-effort-server.herokuapp.com/api";

const responseData = res => res.data;

const requests = {
  get: url => axios.get(`${API_ROOT}${url}`).then(responseData),
  post: (url, payload) =>
    axios.post(`${API_ROOT}${url}`, payload).then(responseData),
  delete: url => {
    console.log(`${API_ROOT}${url}`);
    axios.delete(`${API_ROOT}${url}`).then(responseData);
  }
};

const profiles = {
  all: page => requests.get(`/profiles`),
  add: payload => {
    console.log(payload);
    requests.post(`/profiles`, payload);
  },
  delete: id => requests.delete(`/profiles/${id}`)
};

export default { profiles };
