import { async } from "regenerator-runtime";

const commentList = document.getElementById("jsCommentList");

const handelCancel = async (event) => {
    if (event.target.innerText !== "❌") {
        return;
    }
    const commentId = event.target.parentElement.dataset.id;
    console.log(commentId);

    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    })
    if (response.status === 200) {
        console.log("Good");
    }


}

if (commentList) {
    commentList.addEventListener("click", handelCancel);
}
