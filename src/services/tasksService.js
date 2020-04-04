import axios from "axios";

export const getTasks = gameId => {
  return axios({
    url: `/${gameId}/messages`,
    method: "GET"
  });
};

export const solveTask = ({ gameId, taskId }) => {
  return axios({
    url: `${gameId}/solve/${taskId}`,
    data: {},
    method: "POST"
  });
};
