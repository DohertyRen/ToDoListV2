import { Button, Paper, TextField } from "@mui/material";
import { flexbox } from "@mui/system";
import React from "react";
import { useState } from "react";

export default function Form({ addTodo }) {
  const [text, setText] = useState();
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    if (text != null){
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    setText(null)
  }

  };

  

  return (
    <Paper style={{ padding: "1em" }}>
      <form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="Tarefa"
            variant="outlined"
            fullWidth
            onChange={(e) => setText(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
          />
          <Button
            type="reset"
            style={{ fontSize: "20px" }}
            variant="text"
            onClick={() => todoCreate(text)}
          >
            +
          </Button>
        </div>
      </form>
    </Paper>
  );
}
