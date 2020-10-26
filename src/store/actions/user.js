import axios from "axios";
import { apiStatus } from "../../utils/apiStatus";
import { setFetchStatus, setUser } from "../reducer/user";

export const getHeaders = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

export const getApi = () =>
  axios.create({
    baseURL: process.env.API_BASE_URL,
    withCredentials: true,
    headers: getHeaders(),
  });

const api = getApi();

export const registerUser = (data) => {
  return (dispatch) => {
    dispatch(setFetchStatus(apiStatus.fetching));

    api
      .post("api/auth/register", data)
      .then((response) => {
        dispatch(setFetchStatus(apiStatus.completed));
        dispatch(setUser(response.data));
        window.location = "/dashboard";
      })
      .catch((error) => {
        dispatch(setFetchStatus(apiStatus.error));
      });
  };
};
