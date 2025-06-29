// // GSAP アニメーション設定
// window.addEventListener('DOMContentLoaded', () => {
//     const logoContainer = document.querySelector('.logo-container');
//     const heroArea = document.querySelector('.hero-area');

//     // ロゴを1秒間表示してフェードアウト
//     gsap.timeline()
//         .to(logoContainer, { opacity: 1, duration: 1 }) // ロゴが表示される
//         .to(logoContainer, { opacity: 0, duration: 0.5, delay: 1 }) // ロゴがフェードアウト
//         .set(logoContainer, { display: 'none' }) // ロゴコンテナを非表示
//         .set(heroArea, { display: 'block' }) // ヒーローエリアを表示
//         .from(heroArea, { opacity: 0, duration: 1 }); // ヒーローエリアをフェードイン

// });
