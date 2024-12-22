import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { Controlled as CodeMirror } from "react-codemirror2";
// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/javascript/javascript";
// import "codemirror/theme/dracula.css";

const CodingPlayground = () => {
  const [code, setCode] = useState("// Write your code here...");

  const handleRunCode = () => {
    // Placeholder for running code logic
    alert("Code executed!");
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          backgroundColor: "#0288D1",
          color: "#fff",
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Code Clash: Coding Playground
        </Typography>
      </Box>

      <Grid container sx={{ flexGrow: 1 }}>
        {/* Left Panel: Problem Description */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            backgroundColor: "#f9f9f9",
            overflowY: "scroll",
            padding: 2,
            borderRight: "1px solid #ddd",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Problem Statement
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Title:</strong> Two Sum
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Description:</strong> Given an array of integers, return
            indices of the two numbers such that they add up to a specific
            target. You may assume that each input would have exactly one
            solution, and you may not use the same element twice.
          </Typography>
          <Typography variant="body2">
            <strong>Input:</strong> nums = [2, 7, 11, 15], target = 9
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Output:</strong> [0, 1]
          </Typography>
          <Typography variant="body2">
            <strong>Constraints:</strong>
          </Typography>
          <ul>
            {/* <li>2 <= nums.length <= 10⁴"</li>
            <li>-10⁹ <= nums[i] <= 10⁹</li>
            <li>-10⁹ <= target <= 10⁹</li> */}
          </ul>
        </Grid>

        {/* Right Panel: Coding IDE */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#282a36",
            padding: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
          >
            Code Editor
          </Typography>
          <Paper
            sx={{
              flexGrow: 1,
              marginBottom: 2,
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* <CodeMirror
              value={code}
              options={{
                mode: "javascript",
                theme: "dracula",
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => setCode(value)}
            /> */}
          </Paper>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRunCode}
            sx={{ alignSelf: "flex-end" }}
          >
            Run Code
          </Button>
        </Grid>
      </Grid>

      {/* Bottom Section: Chat and Opponent's Activity */}
      <Grid container sx={{ height: "25vh", borderTop: "1px solid #ddd" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid #ddd",
            padding: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Chat
          </Typography>
          <Box sx={{ flexGrow: 1, overflowY: "scroll", mb: 1 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Opponent: Hey, how's it going?
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              You: Almost done with the solution.
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            placeholder="Type a message..."
            size="small"
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Opponent's Activity
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Test Cases Passed: 3/5
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Time Taken: 8 mins
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Current Status: Debugging
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CodingPlayground;
