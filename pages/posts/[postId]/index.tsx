import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsById } from '../../../src/redux/actions/actions';
import { Navbar } from '../../../src/components/Navbar';
import Comments from '../../../src/components/Comments';

export default () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { postId } = router.query;

    useEffect(() => {
        dispatch(getPostsById(postId));
    }, [postId]);

    const { post } = useSelector((state) => state.reducer);

    if (!post) {
        return <h2>LOADING</h2>;
    } else {
        return (
            <>
                <Navbar />
                <Container>
                    <Title>{post.title}</Title>
                    <Description>{post.body}</Description>
                    <Comments />
                </Container>
            </>
        );
    }
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
        content: '';
        background: #000;
        height: 1px;
    }
    width: 700px;
    font-size: 22px;
`;
