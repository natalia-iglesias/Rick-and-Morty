import axios from "axios";

export function getCharacters() {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/characters");
    return dispatch({
      type: "GET_CHARACTERS",
      payload: response.data,
    });
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/characters/${id}`);
      console.log("soy dispatch", json.data);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
