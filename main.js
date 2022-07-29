let comment = document.getElementById("com");
let add = document.getElementById("add");
let com = document.querySelectorAll("comments");
let delett = document.getElementById("delete");
let deletc = document.getElementById("delet");

delett.onclick = function(){
    comment.value = '';
}

let comments;
if (localStorage.commentt != null) {
    comments = JSON.parse(localStorage.commentt)
}else{
    comments = [];
}

add.onclick = function(){
    let data = {
        comment:comment.value,
    }
    comments.push(data);
    localStorage.setItem('commentt',    JSON.stringify(comments)    );
    location.reload()
}

function show() {
    let tabel = '';
    for (let i = 0; i < comments.length; i++) {
        tabel += `
        <div class="comment">
            <button onclick="delet(${i})" id="delet">Delet</button>
            <h2>${comments[i].comment}</h2>
        </div>
        `;
    }
    document.getElementById("comments").innerHTML = tabel;
}

show()

