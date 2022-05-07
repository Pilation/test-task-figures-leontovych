import { Box } from "@mui/system";

export default function ProjectItem({ data }) {
  let { width, height, color, y, x, rotation } = data;
  if (color.length < 7) color = "#ff8c69";

  // const [boundingParams, setBoundingParams] = useState({});
  // const ref = useRef(null);
  // useEffect(() => {
  //   const BoundingParamsUpdate = setTimeout(() => {
  //     setBoundingParams(ref.current.getBoundingClientRect());
  //   }, 500);
  //   return () => {
  //     return clearTimeout(BoundingParamsUpdate);
  //   };
  // }, []);

  let angle = rotation * (Math.PI / 180);
  const borderWidth =
    Math.abs(width * Math.cos(angle)) + Math.abs(height * Math.sin(angle));
  const borderHeigth =
    Math.abs(width * Math.sin(angle)) + Math.abs(height * Math.cos(angle));

  return (
    <Box
      sx={{
        position: "absolute",
        left: x - borderWidth / 2,
        top: y - borderHeigth / 2,
        width: borderWidth,
        height: borderHeigth,
        border: "1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s",
        zIndex: 1,
        boxSizing: "border-box",
        ":before": {
          position: "absolute",
          content: '"' + rotation + ' \\00b0"',
          top: "calc(50% - 25px)",
          left: "50%",
          zIndex: 1,
          color: "white",
        },
        ":after": {
          position: "absolute",
          content: '""',
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#FFF",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          // ref={ref}
          border: "1px solid #000",
          height: height,
          width: width,
          backgroundColor: color,
          transformOrigin: "center",
          transform: "rotate(" + rotation + "deg)",
          boxSizing: "border-box",
        }}
      />
    </Box>
  );
}
