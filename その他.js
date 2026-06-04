//隠しコマンドの設定
const secretCommand = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']; // 飛ばしたいコマンド（小文字）
let inputHistory = [];                      // プレイヤーが入力したキーの履歴を入れる箱

// キーボードが押されたときのイベントをもう一つ追加
document.addEventListener('keydown', (event) => {
    // 押されたキーの名前（アルファベットなど）を取得して小文字にする
    const key = event.key.toLowerCase();
    event.preventDefault(); // デフォルトの動作をキャンセル（矢印キーのスクロールなどを防止）

    // 履歴にキーを追加
    inputHistory.push(key);

    // 履歴がコマンドの長さより長くなったら、古いものから消す
    if (inputHistory.length > secretCommand.length) {
        inputHistory.shift(); // 先頭（一番古いキー）を削除
    }

    // 💡 履歴と隠しコマンドが完全に一致しているかチェック
    if (inputHistory.join('') === secretCommand.join('')) {
        // 💡 別のページにジャンプさせる命令
        window.location.href = 'gameHub.html'; // 飛ばしたい先のファイル名（URLでもOK）
    }
});