const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka

    const text = document.getElementsByClassName('item__text');
    for (var i = 0; i < text.length; i++) {
      text[i].addEventListener('click', edit);
    }

    const button = document.getElementsByClassName('item__button');
    for (var i = 0; i < button.length; i++) {
      button[i].addEventListener('click', deleteItem);
    }

    const checkbox = document.getElementsByClassName('item__checkbox');
    for (var i = 0; i < checkbox.length; i++) {
      checkbox[i].addEventListener('click', finish);
    }

  }

  function formHandler(e) {
    e.preventDefault();
    var input = e.target.children[0].value;

    if (input.replace(/\s/g, '') != 0) {
      add(input);
      e.target.children[0].value = "";
    }
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.target.parentNode.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    var taskText = e.target.parentNode.children[1].innerHTML;
    var listItemEl = e.target.parentNode;
    var inputField = el('input', 'item__edit', commit);

    inputField.value = taskText;
    listItemEl.replaceChild(inputField, listItemEl.children[1]);
    inputField.focus();
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if (e.keyCode == ENTER_KEYCODE) {
      var taskText = e.target.value;
      var listItemEl = e.target.parentNode;
      var span = el('span', 'item__text', edit);

      span.innerHTML = taskText;
      listItemEl.replaceChild(span, listItemEl.children[1]);
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {

    var li = el('li', 'item', null);
    var checkbox = el('input', 'item__checkbox', finish);
    var text = el('span', 'item__text', edit);
    var button = el('button', 'item__button', deleteItem);

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    li.children[1].innerHTML = value;
    items.appendChild(li);


  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    e.target.parentNode.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    var el = document.createElement(type);
    el.setAttribute('class', className);
    if (className == 'item__checkbox') {
      el.type = "checkbox";
    }
    if (className == 'item__button') {
      el.innerHTML = "Eyða";
    }
    if (clickHandler == commit) {
      el.addEventListener('keydown', commit);
    }
    if (clickHandler) {
      el.addEventListener('click', clickHandler);
    }


    return el;
  }

  return {
    init: init
  }
})();
