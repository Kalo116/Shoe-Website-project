import './comment-item.styles.scss';

export const CommentItem = ({ text, author }) => {
    return (
        <li className="comment-item">
            {`${author} : ${text}`}
        </li>
    )
}