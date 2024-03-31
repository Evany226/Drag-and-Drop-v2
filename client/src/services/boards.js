import axios from "axios";
const baseUrl = "http://localhost:3001/api/boards";

const getAll = async (accessToken) => {
  const request = axios.get(baseUrl, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return request.then((response) => response.data);
};

const create = (newObject, accessToken) => {
  const request = axios.post(baseUrl, newObject, {
    "content-type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  });

  return request.then((response) => response.data);
};

export default {
  getAll: getAll,
  create: create,
};
