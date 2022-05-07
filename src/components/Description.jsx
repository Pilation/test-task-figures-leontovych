import { Typography } from "@mui/material";

export default function Description() {
  return (
    <>
      <Typography variant="body2" component="p" sx={{ my: 2 }}>
        Hi! Thank you for such an interesting test task :)
      </Typography>
      <Typography variant="body2" component="p" sx={{ my: 2 }}>
        I resolved it both by calculating the bounding box and using the
        getBoundingClientRect() method (this way is commented){" "}
      </Typography>

      <Typography variant="body2" component="p" sx={{ my: 2 }}>
        I realize all points, except the scaling of elements, but I did my best:
      </Typography>
      <Typography variant="body2" component="p" sx={{ my: 2 }}>
        Custom hook for dynamic scaling (I left it in the project), but scaling
        doesn't change the real size of the element. Tried sizes in %, but it
        doesn't work correctly with absolute positioned elements.
      </Typography>
      <Typography variant="body2" component="p" sx={{ my: 2 }}>
        My comment to API is to check the color HEX code length and try to work
        without an Init request, it seems excessive.
      </Typography>
    </>
  );
}
