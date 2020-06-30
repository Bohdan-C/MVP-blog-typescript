import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getPostsById } from "../redux/actions/actions";
import { useRouter } from "next/router";
// import styled from "styled-components";
// import { InitialStateI } from "../redux/reducers/reducer";
import { CommentI } from "../redux/reducers/reducer";

export default () => {
  const [commentsArr, setCommentsArr] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(getPostsById);
    axios
      .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      .then((data) => {
        setCommentsArr(data.data.comments);
      })
      .catch((err) => {
        console.log("Error!", err);
      });
  }, [id]);
  return (
    <ul>
      {commentsArr.map((comment) => (
        <li key={comment.id}>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};
