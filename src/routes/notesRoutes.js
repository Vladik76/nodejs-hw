import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import {
  createNoteSchema,
  noteIdSchema,
  updateNoteSchema,
  getNotesSchema,
} from '../validations/notesValidation.js';

const router = Router();

router.get('/notes', celebrate(getNotesSchema), getNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.post('/notes', celebrate(createNoteSchema), createNote);
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
