import { CommentsForm } from "../comments-form/comment-form.component";
import { CommentsList } from "../comments-list/comments-list.component";

import './comments.styles.scss';

export const Comments = ({ comments, shoeID, user }) => {
    return (
        <>
            <h3 className="details-comments-title">Comments</h3>
            <div className="details-comments-container">
                {user && <CommentsForm shoeID={shoeID} comments={comments} />}
                <CommentsList comments={comments} />
            </div>
        </>
    );
};