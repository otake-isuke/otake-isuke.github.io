customElements.define('proof-block', class extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;
    this.innerHTML = `
        <div class="panel proof">
            <details open>
                <summary>表示</summary>
                ${content}
                <br>
            </details>
        </div>
    `;
  }
});
// <button type="button" onclick="this.closest('details').removeAttribute('open')">▲ 閉じる</button>