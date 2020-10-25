
// プラスボタンの取得
const addButton = document.querySelector('.fa-plus');

// プラスボタンを押した後の挙動
addButton.addEventListener('click',() => {
  // id=inputを所得します
  const input = document.getElementById('input');

  // liタグを作ります
  const li = document.createElement('li');
  // liタグの中のテキスト文字を指定します
  li.innerText = input.value;

  // 完了ボタンを作ります
  const doneButton = document.createElement('button')
  // 完了ボタンの中のテキストです
  doneButton.innerText = '完了'
  // 変数liの中に完了ボタンを入れます
  li.appendChild(doneButton);

  // 完了ボタンを押した後の挙動です
  doneButton.addEventListener('click' , () => {
    // doneButtonからの一番近い親要素のliを所得します
    const thisLi = doneButton.closest('li');
    // そのliに対しましてcompleteクラスをつけたり、離したりします
    thisLi.classList.toggle('complete');
  });

  // ulのidであるlistを取得してきます
  const ul = document.getElementById('list');
  // そのulの中にliを入れます。
  ul.appendChild(li);

  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click' , () => {
    let result = window.confirm('全ての項目を削除しますか？');
    if(result) {
      const container = document.getElementById('container');
      window.location.reload();
    }else {
      window.alert('そのままにしました');
    }

  });

});












