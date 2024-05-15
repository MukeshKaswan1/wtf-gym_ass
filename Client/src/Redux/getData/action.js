import axios from "axios";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = () => ({
  type: GET_DATA_FAILURE,
});

export const getData = (payload, route) => (dispatch) => {
  dispatch(getDataRequest());
  axios
    .get(`https://devapi.wtfup.me/gym/${route}`, {
      params: {
        ...payload,
      },
    })
    .then((res) => {
      dispatch(getDataSuccess(res.data.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};
