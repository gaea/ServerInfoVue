import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSearches() {
    return apiClient.get("/searchhistory");
  },
  getHostDetail(domain) {
    return apiClient.get("/detail?domain=" + domain);
  },
  analizeDomain(domain) {
    return apiClient.get("/analize?domain=" + domain);
  }
};
