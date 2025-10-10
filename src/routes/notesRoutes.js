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
  noteIdParamSchema,
  updateNoteSchema,
  getNotesSchema,
} from '../validations/notesValidation.js';

const router = Router();

router.get('/notes', celebrate(getNotesSchema), getNotes);
router.get('/notes/:noteId', celebrate(noteIdParamSchema), getNoteById);
router.post('/notes', celebrate(createNoteSchema), createNote);
router.delete('/notes/:noteId', celebrate(noteIdParamSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
