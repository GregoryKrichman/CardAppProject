import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

export default function SearchBar() {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const handleChange = ({ target }) => setSearch({ q: target.value });

  return (
    <Box display="inline-flex">
      <FormControl variant="outlined" sx={{ width: "100%" }}>
        <OutlinedInput
          sx={{
            backgroundColor: isDark ? "#333333" : "#e3f2fd",
            borderRadius: "20px",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: isDark ? "#444444" : "#eaf5fe",
            },
          }}
          placeholder="Search"
          size="small"
          value={searchParams.get("q") ?? ""}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" sx={{ p: 0 }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
