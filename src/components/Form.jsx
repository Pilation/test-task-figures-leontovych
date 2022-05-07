import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Form({ handleBlur, handleSubmit, loading }) {
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", my: 2, gap: 2 }}>
        <TextField
          id="user-name"
          label="Project ID"
          type="text"
          onBlur={handleBlur}
        />
        <LoadingButton
          type="submit"
          loading={loading}
          variant="outlined"
          color="primary"
          size="medium"
        >
          Fetch
        </LoadingButton>
      </Box>
    </form>
  );
}
