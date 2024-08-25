import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "탕후루",
        comment:"안녕하세요 도희입니다.",
    },
    {
        name: "김도희",
        comment:"리액트 재미있어요",
    },
    {
        name: "마라탕",
        comment:"저도 리액트 배워보고 싶어요",
    },
]


function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;