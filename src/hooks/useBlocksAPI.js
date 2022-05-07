import { useState, useCallback } from "react";
import { initGet, projectGet } from "../api/api";

export default function useBlocksAPI() {
  const [project, setProject] = useState({});
  const [requestStatus, setRequestStatus] = useState("");
  const [error, setError] = useState("");

  const getProject = useCallback((insertedId = false) => {
    setRequestStatus("loading");
    initGet()
      .then(({ data }) => {
        return data.id;
      })
      .then((id) => {
        projectGet(insertedId ? insertedId : id)
          .then(({ data }) => {
            setProject(data.project);
            setRequestStatus("done");
          })
          .catch((error) => {
            setError(error.message);
            setTimeout(() => {
              setError("");
            }, 2000);
            setRequestStatus("error");
          });
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, 2000);
        setRequestStatus("error");
      });
  }, []);

  return {
    getProject,
    requestStatus,
    project,
    error,
  };
}
