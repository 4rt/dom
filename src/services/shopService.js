import axios from "axios";

export const getItems = gameId => {
  return axios({
    url: `/${gameId}/shop`,
    method: "GET"
  });
};

export const buyItem = ({ gameId, itemId }) => {
  return axios({
    url: `${gameId}/shop/buy/${itemId}`,
    data: {},
    method: "POST"
  });
};
