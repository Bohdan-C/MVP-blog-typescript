import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPostsById } from "../../../src/redux/actions/actions";
import { Navbar } from "../../../src/components/Navbar";
import Comments from "../../../src/components/Comments";
import { IPost } from "../../../interfaces";
import { Istate } from "../../../src/redux/reducers/reducer";

export default () => {
  // const [postS, setPostS] = useState<IPost[]>([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const { postId } = router.query;

  // useEffect(() => {
  //   dispatch(getPostsById)
  //   axios
  //     .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
  //     .then((data) => {
  //       setPost(data.data);
  //     })
  //     .catch((err) => {
  //       console.log("Error!", err);
  //     });
  // }, [id]);

  useEffect(() => {
    // console.log('postId :>> ', postId);
    dispatch(getPostsById(postId));
  }, [postId]);

  // axios
  //   .get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
  //   .then((data) => {
  //     setPost(data.data);
  //   })
  //   .catch((err) => {
  //     console.log("Error!", err);
  //   });

  // const { post } = useSelector((state: state) => { return { post: state.post } })

  //   React.useEffect(() => {
  //     getPostsById(postId, dispatch)
  // }, [postId]);

  // const { post } = useSelector((state: Istate) => {
  //   return { post: state.post };
  // });

  return (
    <>
      <Navbar />
      <Container>
        {/* <Title>{post.title}</Title>
        <Description>{post.body}</Description> */}
        <Comments />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
  width: 1040px;
`;

const Title = styled.h2`
  width: 700px;
  font-size: 50px;
  margin-bottom: 40px;
`;

const Description = styled.p`
  &:after {
    margin-top: 40px;
    display: block;
    content: "";
    background: #000;
    height: 1px;
  }
  width: 700px;
  font-size: 22px;
`;
