import Keeper from "../models/notes";

export const addNotes = async (req, res) => {
  const { title, note } = req.body;
  try {
    if (title && note) {
      await new Keeper({
        title: req.body.title,
        body: req.body.note,
        footer: new Date(),
      })
        .save()
        .catch(() => console.log("data save error"));
    } else {
      res.json({ status: "error", message: "Data not store" });
    }
    res.json({ status: "OK" });
  } catch (err) {
    res.json({ status: "error", message: err });
  }
};

export const getNotes = async (req, res) => {
  try {
    const data = await Keeper.find({});
    res.status(200).json(data);
  } catch (err) {
    res.json({ status: "error", message: err });
  }
};

export const deleteNotes = async (req, res) => {
  try {
    await Keeper.findByIdAndDelete({ _id: req.params.id });
    res.json({ status: "Ok", message: "Deleted Successfully" });
  } catch (err) {
    res.json({ status: "error", message: err });
  }
};

export const getNote = async (req, res) => {
  try {
    const data = await Keeper.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

export const editNote = async (req, res) => {
  const { title, body } = req.body;
  const editNotes = {
    title,
    body,
    footer: new Date(),
  };
  try {
    await Keeper.findByIdAndUpdate(req.params.id, editNotes);
    res.json({ status: "OK" });
  } catch (err) {
    res.json({ status: "error" });
  }
};
