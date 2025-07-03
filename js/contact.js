// js/contact.js

(() => {
    const form = document.getElementById('contactForm');
    if (!form) {
        console.error('contactForm が見つかりません');
        return;
    }

    form.addEventListener('submit', e => {
        e.preventDefault();

        const callbackName = 'contactCB';
        const params = new URLSearchParams({
        callback: callbackName,
        name:     form.name.value.trim(),
        email:    form.email.value.trim(),
        message:  form.message.value.trim(),
        });

        const deployId = 'AKfycbxPK1wXqg64er5aAAugo4FR2cKpbgSRHCi3ZN4La6YmopMuJgtRwJGBsa_J6tzqekb_';
        const s = document.createElement('script');
        s.src = `https://script.google.com/macros/s/${deployId}/exec?${params}`;
        document.body.appendChild(s);
    });
    })();

    // JSONP 用コールバック
    function contactCB(res) {
    console.log('contactCB:', res);
    const form = document.getElementById('contactForm');
    if (res.status === 'success') {
        alert('送信が完了しました！');
        form.reset();
    } else {
        alert('エラー: ' + res.message);
    }
}
