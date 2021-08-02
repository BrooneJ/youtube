const commentList = document.getElementById("jsCommentList");

const removeComment = (commentId) => {
    const videoComments = document.querySelector(".video__comments ul");
    const child = document.querySelector(`[data-id='${commentId}']`);
    videoComments.removeChild(child);
}

const handelCancel = async (event) => {
    if (event.target.innerText !== "❌") {
        return;
    }
    const commentId = event.target.parentElement.dataset.id;

    removeComment(commentId);
    await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    })
}

if (commentList) {
    commentList.addEventListener("click", handelCancel);
}
