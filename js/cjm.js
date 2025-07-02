// cjm-modal用モーダル機能の実装
document.addEventListener("DOMContentLoaded", () => {
    const cjmModal = document.createElement("div");
    cjmModal.className = "cjm-modal";
    cjmModal.innerHTML = `
    <div class="cjm-modal-content">
        <button class="cjm-modal-close">&times;</button>
        <img src="" alt="拡大画像">
    </div>
    `;
    document.body.appendChild(cjmModal);

    const modalImg = cjmModal.querySelector("img");
    const closeModal = () => {
    cjmModal.classList.remove("open");
    };

    // 画像クリックでモーダル表示
    document.querySelectorAll(".concept-cjm__img, .concept-media__img").forEach((img) => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            cjmModal.classList.add("open");
        });
    });
    
    // モーダルを閉じる
    cjmModal.querySelector(".cjm-modal-close").addEventListener("click", closeModal);
    cjmModal.addEventListener("click", (e) => {
    if (e.target === cjmModal) closeModal();
    });
});
