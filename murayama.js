// モーダルウィンドウの取得
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementsByClassName("close")[0];

// 画像をクリックしたときにモーダルを表示
document.querySelectorAll(".slider-item img").forEach((img) => {
    img.onclick = function () {
        modal.style.display = "block"; // モーダルを表示
        modalImage.src = this.src; // 画像をモーダルに表示

        // data-description属性から説明を取得して表示
        modalDescription.textContent = this.getAttribute("data-description") || "説明はありません。";
    };
});

// 閉じるボタンをクリックしたときにモーダルを閉じる
closeModal.onclick = function () {
    modal.style.display = "none";
};

// モーダルの外側をクリックしたときに閉じる
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

