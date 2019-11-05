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
      for(var i=0;i<text.length; i++){
        text[i].addEventListener('click', edit);
      }

      const button = document.getElementsByClassName('item__button');
      for(var i=0;i<button.length; i++){
        button[i].addEventListener('click', deleteItem);
      }


      const checkbox = document.getElementsByClassName('item__checkbox');
      for(var i=0;i<checkbox.length; i++){
        checkbox[i].addEventListener('click', finish);
      }
    

  }

  function formHandler(e) {
    
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.target.parentNode.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    e.target.parentNode.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const el = document.createElement(type);
  }

  return {
    init: init
  }
})();
