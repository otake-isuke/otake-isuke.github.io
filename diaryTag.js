const filterButtons = document.querySelectorAll('.filter-btn');
const articles = document.querySelectorAll('.article-card');

// 2. 各ボタンにクリックイベントを設定
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
    // アクティブ状態（見た目）の切替
    if (button.dataset.filter === 'all'  && !button.classList.contains('active')) {
        filterButtons.forEach(btn => btn.classList.add('active'));
    } else if (button.dataset.filter === 'all'  && button.classList.contains('active')) {
        button.classList.remove('active');
    } else if (button.dataset.filter === 'deleteAll') {
        filterButtons.forEach(btn => btn.classList.remove('active'));
    } else if (button.classList.contains('active')) {
        button.classList.remove('active');
        document.querySelector('.filter-btn[data-filter="all"]').classList.remove('active');
    } else {
        button.classList.add('active');
    }
    document.querySelector('.filter-btn[data-filter="deleteAll"]').classList.remove('active');

    // 選択されたフィルター値の取得
    let selectedFilters = [];
    filterButtons.forEach(btn => {
        if (btn.classList.contains('active')) {
        selectedFilters.push(btn.dataset.filter);
        }
    });

    // 3. 記事の絞り込み処理
    articles.forEach(article => {
        const articleTags = article.getAttribute('data-tags').split(' ');

        if (selectedFilters.some(filter => articleTags.includes(filter))) {
        article.classList.remove('hidden'); 
        } else {
        article.classList.add('hidden');
        }
        if (document.querySelector('.filter-btn[data-filter="all"]').classList.contains('active')) {
        article.classList.remove('hidden');
        }
    });
    });
});

//タグの中身を文末に表示したい
document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('.article-card');

  articles.forEach(article => {
    // 1. data-tags の中身を取得（例: "html css"）
    const tags = article.dataset.tags.split(' ');
    const br = document.createElement('br');
    article.prepend(br);

    // 2. タグごとに span 要素を作って見出しに追加
    //span !? divみたいなものらしい。ていうかdivも数学用語だな。
    tags.forEach(tag => {
      const badge = document.createElement('span');
      badge.classList.add('tag-badge');
      badge.textContent = "#" + tag;
      article.prepend(badge);
    });
  });
});

//日付表示
const yearButtons = document.querySelectorAll('#diary .year-buttons button');
const monthButtons = document.querySelectorAll('#diary .month-buttons button');
let selectedYear = "";
let selectedMonth = "";

const changeDisplay = (selectedYear, selectedMonth) => {
    const years = document.querySelectorAll('#diary .year');
    years.forEach(year => {year.classList.remove('hidden')});
    years.forEach(year => {
        if (!(year.dataset.year == selectedYear)) {
            year.classList.add('hidden')
        } else {
            const months = year.querySelectorAll('.month');
            months.forEach(month => month.classList.remove('hidden'));
            months.forEach(month => {
                if (!(month.dataset.month == selectedMonth)) {
                    month.classList.add('hidden')
                }
            }
            );
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(parseInt(currentDate.getMonth())+1);

    selectedYear = currentYear;
    selectedMonth = currentMonth;
    
    yearButtons.forEach(btn => {
        if (btn.textContent==currentYear) {
            btn.classList.add('active')
        }
    });
    monthButtons.forEach(btn => {
        if (btn.textContent==currentMonth) {
            btn.classList.add('active')
        }
    });
    changeDisplay(selectedYear,selectedMonth);
});

//ボタンの見た目
yearButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        selectedYear = btn.textContent;
        yearButtons.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        
        changeDisplay(selectedYear,selectedMonth);
    })
});
monthButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        selectedMonth = btn.textContent;
        monthButtons.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        
        changeDisplay(selectedYear,selectedMonth);
    })
});