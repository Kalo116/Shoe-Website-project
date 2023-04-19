import { useState, useContext } from "react";
import { UserContext } from "../../../contexts/user.context";


import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import './comment-form.styles.scss';

export const CommentsForm = ({
    shoeID,
    comments
}) => {

    const [comment, setComment] = useState('');
    const [newComment, setNewComment] = useState({
        author: '',
        text: ''
    });
    const { currentUser } = useContext(UserContext);

    const onChangeHandler = (e) => {
        setComment(e.target.value);
        setNewComment({
            author: currentUser.email,
            text: e.target.value
        })
    };

    const onCommentSubmitHandler = (e) => {
        e.preventDefault();
        if (comment === '') {
            return alert('You should enter text if you want to comment');
        }
        if (!currentUser) {
            return alert('You need to be logged to create shoe card!');
        };

        const docRef = doc(db, 'shoes', shoeID);
        updateDoc(docRef, {
            comments: [...comments, newComment]
        })
            .then(() => {
                setComment('');
            })
    };

    return (
        <form onSubmit={onCommentSubmitHandler} className="comment-form">
            <input
                type="text"
                value={comment}
                onChange={onChangeHandler}
                className="comment-input"
                placeholder="Type your comment"
            />
            <button type="submit" className="comment-submit-btn">Comment Now!</button>
        </form>
    )
}