import axios from "axios";

export const start = () => {
  return axios({
    url: "/game/start",
    data: {},
    method: "POST"
  });
};
