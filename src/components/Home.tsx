import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/actions';
import axios from 'axios';
import Link from 'next/link';

const Home: React.FC = () => {
    const [posts, setPosts] = useState([]);

    //Get all posts
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts);
        axios
            .get('https://simple-blog-api.crew.red/posts')
            .then((data) => {
                setPosts(data.data);
            })
            .catch((err) => {
                console.log('Error!', err);
            });
    }, []);

    return (
        <>
            <List>
                {posts.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
                        <Item key={post.id}>
                            <PostLink>
                                <Title>{post.title}</Title>
                                <Description>{post.body}</Description>
                            </PostLink>
                        </Item>
                    </Link>
                ))}
            </List>
        </>
    );
};

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 1040px;
    margin: 0 auto;
    margin-top: 25px;
    padding: 0;
`;

const PostLink = styled.a`
    cursor: pointer;
    display: block;
    height: 300px;
`;

const Item = styled.li`
    margin: 20px;
    min-height: 300px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h2`
    margin: 0;
    padding: 24px;
    font-size: 22px;
    font-family: 'Blinker', sans-serif;
    font-weight: 600;
`;

const Description = styled.p`
    margin: 0;
    padding: 24px;
    font-family: 'Blinker', sans-serif;
    font-weight: 100;
`;

export default connect(null, { getPosts })(Home);
