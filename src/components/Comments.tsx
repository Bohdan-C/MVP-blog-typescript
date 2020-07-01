import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPostsById } from "../redux/actions/actions";
import { useRouter } from "next/router";
import styled from "styled-components";
import { CommentI } from "../redux/reducers/reducer";
import CreateComment from "./CreateComment";

export default () => {
  const [commentsArr, setCommentsArr] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    dispatch(getPostsById(postId));
  }, [postId]);

  // const { post } = useSelector((state: state) => { return { post: state.post } })

  return (
    <ul>
      <CreateComment />
      {commentsArr.map((comment) => (
        <Item key={comment.id}>
          <Circle></Circle>
          <div>
            <UserName>User</UserName>
            <Desc>{comment.body}</Desc>
          </div>
        </Item>
      ))}
    </ul>
  );
};

const Item = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  width: 700px;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 5px;
  background: #f7f7f7;
`;

const Desc = styled.p`
  padding-left: 20px;
`;

const UserName = styled.p`
  padding-left: 20px;
  margin-bottom: 10px;
  opacity: 65%;
`;

const Circle = styled.div`
  margin-left: 20px;
  background: #fff;
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
