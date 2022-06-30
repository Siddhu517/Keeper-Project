import axios from "axios";
const Url = "http://127.0.0.1:8000";

export const NotesForm = async ({ title, note }) => {
  try {
    return await axios.post(`${Url}/`, { title, note });
  } catch (err) {
    console.log(err);
  }
};

export const getData = async () => {
  try {
    return await axios.get(`${Url}/`);
  } catch (err) {
    console.log(err);
  }
};

export const DeleteNotes = async (id) => {
  try {
    return await axios.delete(`${Url}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const getNote = async (id) => {
  try {
    return await axios.get(`${Url}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const editNote = async (edit, id) => {
  try {
    return await axios.put(`${Url}/${id}`,edit);
  } catch (err) {
    console.log(err);
  }
};
