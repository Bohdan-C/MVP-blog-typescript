import React, { useState, useEffect } from "react";
import { Navbar } from "../../../src/components/Navbar";
import Router from "next/router";
// import styled from "styled-components";
import axios from "axios";

// import { addPost } from "../../../src/redux/actions/actions";

const IDS = {
  TITLE: "title",
  BODY: "body",
};

export default () => {
  const [state, setState] = useState({
    [IDS.TITLE]: "",
    [IDS.BODY]: "",
  });

  console.log("state :>> ", state);

  //   : React.ChangeEvent<HTMLInputElement>

  const onChange = (e) => {
    const { id, value } = e.target;

    setState((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  };

  const addPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(state),
      url: "https://simple-blog-api.crew.red/posts",
    }).then((res) => {
        alert('Done')
      setTimeout(() => {
        if (res) Router.push("/");
      }, 1000);
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={addPost}>
          <input
            id={IDS.TITLE}
            value={state[IDS.TITLE]}
            onChange={onChange}
            placeholder="Title..."
          />
          <input
            id={IDS.BODY}
            value={state[IDS.BODY]}
            onChange={onChange}
            placeholder="Post..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
