import { CommentItem } from "../comment-item/comment-item.component";

import './comments-list.styles.scss';

export const CommentsList = ({ comments }) => {
    let commentsLength = comments?.length > 0;
    return (
        <div className="comments-section-container">
            {
                commentsLength
                    ? <ul className="comments-list" >
                        {comments?.map(commentElement => <CommentItem key={commentElement.text} text={commentElement.text} author={commentElement.author} />)}
                    </ul>
                    : <p>No Comments</p>
            }
        </div>
    )
};