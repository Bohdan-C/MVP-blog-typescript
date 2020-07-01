import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';
import { CommentI } from '../redux/reducers/reducer';
import Router from 'next/router';

export default () => {
    const router = useRouter();
    const { postId } = router.query;

    const IDS: CommentI = {
        BODY: 'body',
        POST_ID: 'postId',
    };

    const [state, setState] = useState({
        [IDS.BODY]: '',
        [IDS.POST_ID]: +postId,
    });

    const onChange = (event) => {
        const { id, value } = event.target;

        setState((currentState) => ({
            ...currentState,
            [id]: value,
        }));
    };

    const addComment = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(state),
            url: 'https://simple-blog-api.crew.red/comments',
        }).then((res) => {
            alert('Your comment has been added.');
            setState({ [IDS.BODY]: '' });
            Router.push(`/posts/${postId}`);
        });
    };

    return (
        <form onSubmit={addComment}>
            <Input id={IDS.BODY} value={state[IDS.BODY]} onChange={onChange} placeholder="Comment..." />
            <Btn type="submit">Send comment</Btn>
        </form>
    );
};

const Input = styled.input`
    padding-left: 25px;
    font-size: 16px;
    width: 549px;
    height: 45px;
    margin-top: 40px;
    border: none;
    border-radius: 10px;
    box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.2);
`;

const Btn = styled.button`
    margin-left: 12px;
    border: none;
    border-radius: 10px;
    background: #fff;
    width: 110px;
    height: 45px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
`;
