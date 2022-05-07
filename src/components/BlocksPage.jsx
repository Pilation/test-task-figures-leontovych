import { useState } from "react";
import { Container, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Description from "./Description";

import useBlocksAPI from "../hooks/useBlocksAPI";
import Form from "./Form";
import Project from "./Project";

export default function BlocksPage() {
  const { project, getProject, requestStatus, error } = useBlocksAPI();
  const { name, id, items = [], height, width } = project;

  const [projectId, setProjectId] = useState("");

  const handleBlur = (e) => {
    setProjectId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getProject(projectId);
    setProjectId("");
  };

  return (
    <Container>
      <Description />
      <Form
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        id={id}
        name={name}
        loading={requestStatus === "loading" ? true : false}
      />
      <Divider />

      {error ? (
        <Typography
          variant="h1"
          component="h1"
          sx={{ my: 10, textAlign: "center" }}
        >
          {error}
        </Typography>
      ) : (
        <>
          <Box sx={{ display: "flex", my: 2, gap: 2 }}>
            <TextField
              label="Name"
              type="text"
              value={name ? name : "Name"}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              label="ID"
              type="text"
              value={id ? id : "ID"}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>

          <Project items={items} height={height} width={width} />
        </>
      )}
    </Container>
  );
}
