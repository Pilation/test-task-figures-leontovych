import { Box } from "@mui/material";
import ProjectItem from "./ProjectItem";

export default function Project({ items, height, width }) {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        backgroundColor: "#a0bcac",
        mx: "auto",
        position: "relative",
        transformOrigin: "center",
      }}
    >
      {items.map((el, index) => (
        <ProjectItem key={index + el.id} data={el} />
      ))}
    </Box>
  );
}
