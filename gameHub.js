// 🗺️ 今回はマップの要素を取得して動かします！
const map = document.getElementById('map');

// プレイヤーの「世界の中での現在地」（最初はマップの真ん中あたり）
let mapX = 500;
let mapY = 400;

let speed = 5;

const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false, Shift: false };
document.addEventListener('keydown', (e) => { if (e.key in keys) { keys[e.key] = true; e.preventDefault(); } });
document.addEventListener('keyup', (e) => { if (e.key in keys) keys[e.key] = false; });

function gameLoop() {
    if (keys.Shift) {
        speed = 5;
    } else if (keys.ArrowDown + keys.ArrowLeft + keys.ArrowRight + keys.ArrowUp == 2) {
        speed = 50;
    } else {
        speed = 15;
    }

    // 💡 プレイヤーの座標を更新
    if (keys.ArrowUp)    mapY -= speed; // 上に行きたい
    if (keys.ArrowDown)  mapY += speed; // 下に行きたい
    if (keys.ArrowLeft)  mapX -= speed; // 左に行きたい
    if (keys.ArrowRight) mapX += speed; // 右に行きたい

    // 💡【壁判定】6000x4500pxのマップから飛び出さないようにする
    // カメラのレンズ幅（800x600）を考慮した限界値です
    if (mapX < 0) mapX = 0;
    if (mapY < 0) mapY = 0;
    if (mapX > 5200) mapX = 5200; // 6000 - 800
    if (mapY > 3900)  mapY = 3900;  // 4500 - 600

    // 💡【超重要】マップを「プレイヤーの移動と逆方向」にズラす！
    // 自分が右（プラス）に行くなら、景色は左（マイナス）に流れる
    map.style.left = -mapX + 'px';
    map.style.top = -mapY + 'px';

    requestAnimationFrame(gameLoop);
}

gameLoop();