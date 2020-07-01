import React, { useState } from "react";
import { Navbar } from "../../../src/components/Navbar";
import styled from "styled-components";
import Router from 'next/router'
import axios from "axios";

const IDS = {
  TITLE: "title",
  BODY: "body",
};

export default () => {
  const [state, setState] = useState({
    [IDS.TITLE]: "",
    [IDS.BODY]: "",
  });

  //   : React.ChangeEvent<HTMLInputElement>

  const onChange = (event) => {
    const { id, value } = event.target;

    setState((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  };

  const addPost = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(state),
      url: "https://simple-blog-api.crew.red/posts",
    }).then((res) => {
      alert("Your post has been added.")
      setState({ [IDS.TITLE]: "", [IDS.BODY]: "" });
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <h2>Add new post</h2>
        <Form onSubmit={addPost}>
          <Input
            id={IDS.TITLE}
            value={state[IDS.TITLE]}
            onChange={onChange}
            placeholder="Title..."
          />
          <Textarea
            id={IDS.BODY}
            value={state[IDS.BODY]}
            onChange={onChange}
            placeholder="Post..."
          />
          <Btn type="submit">Submit</Btn>
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding-left: 25px;
  font-size: 16px;
  width: 700px;
  height: 45px;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.2);
`;

const Textarea = styled.textarea`
  padding-left: 25px;
  padding-top: 15px;
  font-size: 16px;
  max-width: 700px;
  min-width: 700px;
  height: 100px;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.2);
`;

const Btn = styled.button`
  &:hover {
    margin-top: 27px;
  }
  cursor: pointer;
  margin-top: 30px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.35);
`;
