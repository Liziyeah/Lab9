/** @type {HTMLButtonElement} */
const think = document.querySelector("#think");
/** @type {HTMLDivElement} */
const modal = document.querySelector(".modal");
/** @type {HTMLButtonElement} */
const exit = document.querySelector("#exit");
/** @type {HTMLInputElement} */
const text = document.querySelector("#text");
/** @type {HTMLButtonElement} */
const submit = document.querySelector("#submit");

let modalActive = false;
const posts = [];

window.addEventListener("DOMContentLoaded", () => {
    submit.disabled = true;

    if (!modalActive) {
        modal.style.display = "none";
    }

    think.addEventListener("click", () => {
        if (!modalActive) {
            modal.style.display = "block";
        }

        modalActive = true;
    });

    exit.addEventListener("click", () => {
        if (modalActive) {
            modal.style.display = "none";
        }

        modalActive = false;
    });

    text.addEventListener("keyup", (e) => {
        if (text.value.trim() !== "") {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    });

    submit.addEventListener("click", () => {
        if (text.value.trim() !== "") {
            posts.push(text.value.trim());
            text.value = "";
            submit.disabled = true;
            modal.style.display = "none";
            modalActive = false;

            const htmlPosts = posts
                .map(
                    (text) => `
                    <div class="post">
                        <div class="user">
                            <span>Cara</span>
                            <h3>Mariana Bochita</h3>
                        </div>
                        <p>${text}</p>
                    </div>
                `
                )
                .join("");

            document.querySelector(".posts").innerHTML = htmlPosts;
        }
    });
});
