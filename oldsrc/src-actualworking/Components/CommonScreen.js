import { useCallback, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { List } from "@mui/material";
import StickyHeadTable from "./StickyHeadTable";

export default function CommonScreen() {
  const [fact, setFact] = useState("Loading...");

  const fetchFact = useCallback(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
      .catch(() => setFact("Failed to load fact!"));
  }, [setFact]);

  useEffect(() => {
    fetchFact();
  }, [fetchFact]);

  const handleRefreshClick = () => {
    fetchFact();
  };

  return (
    <center>
      <h2>Live Table of Request and Service</h2>
      <StickyHeadTable/>
      <br></br>
      <Button variant="contained" onClick={handleRefreshClick}>
        Refresh Table
      </Button>
    </center>
  );
}
