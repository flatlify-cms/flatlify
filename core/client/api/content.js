import axios from 'axios';

const HOST = 'http://localhost:3000';

const load = async (slug) => {
  const response = await axios.get(`${HOST}/_api/content/${slug}`);
  return response.data;
}

const save = async (slug, data) => {
  const response = await axios.post(`${HOST}/_api/content/${slug}`, data);
  return response.data;
}

const list = async () => {
  const response = await axios.get(`${HOST}/_api/content`);
  return response.data;
}

module.exports = {
  save,
  load,
  list,
};
