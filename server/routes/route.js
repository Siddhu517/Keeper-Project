import express from "express";
import {
  addNotes,
  getNotes,
  deleteNotes,
  getNote,
  editNote,
} from "../controllers/auth";

const router = express.Router();

router.post("/", addNotes);
router.get("/", getNotes);
router.delete("/:id", deleteNotes);
router.get("/:id", getNote);
router.put("/:id", editNote);

export default router;
