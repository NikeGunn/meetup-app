import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography, Link } from "@mui/material";

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/room/${input}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" gutterBottom>
        Quick Meet
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="Enter Random Number to Join Meeting"
          fullWidth
          variant="outlined"
          name="name"
          required
          margin="normal"
          InputProps={{ style: { fontSize: 20 } }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ mt: 2 }}
        >
          Join Meeting
        </Button>
      </form>
      {/* Footer */}
      <Typography mt={4} variant="body2" color="textSecondary" align="center">
        Created with ❤️ by{" "}
        <Link href="https://github.com/NikeGunn" target="_blank" rel="noopener">
          Nikhil Bhagat
        </Link>
      </Typography>
    </Container>
  );
};

export default HomePage;
