import axios from 'axios';

const HOST = 'http://localhost:3000';

const load = async (contentType, slug) => {
  const response = await axios.get(`${HOST}/_api/content/${contentType}/${slug}`);
  return response.data;
}

const save = async (contentType, slug, data) => {
  const response = await axios.post(`${HOST}/_api/content/${contentType}/${slug}`, data);
  return response.data;
}

const list = async (contentType) => {
  const response = await axios.get(`${HOST}/_api/content/${contentType}`);
  return response.data;
}

const loadTypeSchema = async (contentType) => {
  const response = await axios.get(`${HOST}/_api/content-type/${contentType}`);
  return response.data;
}

module.exports = {
  save,
  load,
  list,
};
