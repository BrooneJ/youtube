import { async } from "regenerator-runtime";

const commentList = document.getElementById("jsCommentList");

const handelCancel = async (event) => {
    if (event.target.innerText !== "❌") {
        return;
    }
    const commentId = event.target.parentElement.dataset.id;
    console.log(commentId);

    await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    })
}

if (commentList) {
    commentList.addEventListener("click", handelCancel);
}
