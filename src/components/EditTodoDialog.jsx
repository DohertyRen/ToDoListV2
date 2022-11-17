import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function EditTodoDialog({
  open,
  dialogHandler,
  todo,
  editTodo,
}) {
  const [editedText, setEditedText] = useState(todo.text);

  const textHandler = () => {
    if(editedText != ""){
    editTodo(todo.id, editedText);
    dialogHandler();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={dialogHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">{"Editando tarefa"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          defaultValue={editedText}
          onChange={(e) => {if(e.target.value != ""){setEditedText(e.target.value)}}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancelar</Button>
        <Button autoFocus onClick={textHandler}>
          Editar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
