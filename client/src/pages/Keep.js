import React from "react";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { getData, DeleteNotes, editNote, getNote } from "../services/api";
import { useState, useEffect } from "react";
import { NotesForm } from "../services/api";
import { toast } from "react-toastify";

export const Keeper = () => {
  // form
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  //header
  const [data, setData] = useState([]);

  //edit data
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  //fetch data database
  const getNotes = async () => {
    const res = await getData();
    setData(res.data);
  };

  // SearchBox data filter
  const handleSearch = async (e) => {
    if (e.target.value === "") {
      await getNotes();
    } else {
      await getNotes();
      const filterResult = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterResult);
    }
  };

  //new Notes added databse
  const SubmitHandle = async (e) => {
    e.preventDefault();
    if (!title || !note) {
      toast.error("Empty Field");
    } else {
      const res = await NotesForm({ title, note });
      const data = await res.data;
      if (data.status === "OK") {
        toast.success("Notes added Successfully");
        setTitle("");
        setNote("");
        getNotes();
      } else {
        toast.error("Note not stores");
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await DeleteNotes(id);
      getNotes();
      toast.success("Deleted Successfully");
    } catch (err) {
      toast.error("Error Delete Notes");
      console.log(err);
    }
  };

  //update data
  const handleEdit = async (id) => {
    const getNotes = await getNote(id);
    setEdit(getNotes.data);
  };

  const OnValueChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const editNotesData = async (id) => {
    let { title, body } = edit;
    if (!title || !body) {
      toast.error("Empty Field");
    } else {
      await editNote(edit, id);
      toast.success("Update notes Successfully");
      await getNotes();
    }
  };
  // sider

  //footer

  return (
    <div
      className="container-fluid m-0 p-0"
     /*  style={{
        backgroundImage: "url('https://picsum.photos/200')",
        backgroundSize: "cover",
      }} */
    >
      <Header handleSearch={handleSearch} />
      <div className="container-fluid d-flex flex-column min-vh">
        <div className="row">
          <div className="col-12 mt-5">
            <Form
              SubmitHandle={SubmitHandle}
              title={title}
              setTitle={setTitle}
              note={note}
              setNote={setNote}
              data={data}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              OnValueChange={OnValueChange}
              edit={edit}
              editNotesData={editNotesData}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
