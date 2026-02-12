// ヒーローエリアのGSAPアニメーション

// テキストを1文字ずつ分解
const catchText = document.querySelector(".hero__catch");
const text = catchText.textContent;

catchText.innerHTML = text
    .split("")
    .map(char => `<span class="char">${char}</span>`)
    .join("");

const tl = gsap.timeline({ delay: 0.5 });

// テキストを一文字ずつ表示
tl.from(".char", {
        opacity: 0,
        y: 20,
        duration: 0.05,
        stagger: 0.08,
        ease: "power2.out"
    }, 
    "+=0.3"
);

// 画像を浮き上がらせる
tl.fromTo(".hero__decoration",
    {
        y: 0,
        opacity: 0,
        scale: 0.9
    },
    {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 3.2,
        ease: "power3.inOut",
    },
    ">-0.3"
);


