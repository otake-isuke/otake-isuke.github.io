window.MathJax = {
    chtml: {
    matchFontHeight: false
    },
    svg: {
    matchFontHeight: false
    },
    tex: {
        macros: {
        // \newcommand{\R}{\mathbb{R}} と同じ
        R: "{\\mathbb{R}}",
        C: "{\\mathbb{C}}",
        Z: "{\\mathbb{Z}}",
        Q: "{\\mathbb{Q}}",
        N: "{\\mathbb{N}}",
        
        dis: "{\\displaystyle}",
        bra: ["{\\left(#1\\right)}",1],
        
        L: "{\\mathcal{L}}",
        M: "{\\mathcal{M}}",
        S: "{\\mathcal{S}}",
        F: "{\\mathcal{F}}",

        a: "{\\alpha}",
        d: "{\\delta}",
        e: "{\\varepsilon}",
        wwidehat: ["{\\widehat{\\, #1 \\ }}", 1],
        wwidetilde: ["{\\widetilde{\\, #1 \\ }}", 1],
        
        // 引数を取る場合：\newcommand{\vector}[1]{\mathbf{#1}} と同じ
        // [マクロ名, 定義, 引数の数] の順に指定します
        vec: ["{\\mathbf{#1}}", 1],
        
        // 既存のコマンドを組み合わせる例
        set: ["{\\{ #1 \\}}", 1],

        // \DeclareMathOperator{\tg}{tg} と同じ
        supp: "{\\operatorname{supp}\\,}",
        }
    }
};