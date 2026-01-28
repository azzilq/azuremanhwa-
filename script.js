// SEARCH
document.getElementById("search")?.addEventListener("input", e => {
  let q = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c => {
    c.style.display = c.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
});

// KOMENTAR
function postComment() {
  let txt = document.getElementById("comment").value;
  if(!txt) return;
  let list = JSON.parse(localStorage.getItem("comments") || "[]");
  list.push(txt);
  localStorage.setItem("comments", JSON.stringify(list));
  document.getElementById("comment").value="";
  showComments();
}

function showComments() {
  let box = document.getElementById("comments");
  if(!box) return;
  box.innerHTML="";
  let list = JSON.parse(localStorage.getItem("comments") || "[]");
  list.forEach(c => box.innerHTML += `<p>💬 ${c}</p>`);
}
