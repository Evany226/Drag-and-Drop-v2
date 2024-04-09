import axios from "axios";
const baseUrl = "http://localhost:3001/api/contents";

const getAll = async (accessToken) => {
  const request = axios.get(baseUrl, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return request.then((response) => response.data);
};

const create = (newObject, paramId, accessToken) => {
  const request = axios.post(baseUrl, newObject, {
    "content-type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    params: {
      noteId: paramId,
    },
  });

  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject, {
    headers: {
      "content-type": "application/json",
    },
  });
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove,
};
