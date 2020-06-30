import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/actions";
import axios from 'axios';

const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  //Get posts
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
    axios
    .get("https://simple-blog-api.crew.red/posts")
    .then((data) => {
      setPosts(data.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log("Error!", err);
    });
  })
    return (
        <>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <p>{post.id}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default connect(null, { getPosts })(Home);