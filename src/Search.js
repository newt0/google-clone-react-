import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Search = ({ hideButtons = false }) => {
  const history = useHistory();
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button variant="outlined" type="submit" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm happy</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            variant="outlined"
            type="submit"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm happy
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
