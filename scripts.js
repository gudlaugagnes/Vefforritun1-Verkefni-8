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
    e.preventDefault();

    var input = e.target.children[0].value;
    console.log(input);
    if(input != ""){
      add(input); 
    }

    
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.target.parentNode.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    console.log(e.target.parentNode);
    var oldEl = e.target.parentNode;
    var newEl = el('li','item',null);

    var checkbox = el('input', 'item__checkbox', finish);
    var input = el('input','item__edit',commit)
    var button = el('button','item__button', deleteItem);
    

    newEl.appendChild(checkbox);
    newEl.appendChild(input);
    newEl.appendChild(button);
    oldEl.parentNode.replaceChild(newEl, oldEl);


    
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {

    var li = el('li','item',null);
    var checkbox = el('input', 'item__checkbox', finish);
    var text = el('span','item__text', edit);
    var button = el('button','item__button', deleteItem);

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
    if(className == 'item__checkbox'){
      el.type = "checkbox";
    }
    if(className == 'item__button'){
       el.innerHTML = "Eyða";
    }
    if(clickHandler){
      el.addEventListener('click', clickHandler);
    }
    
    
    return el;
  }

  return {
    init: init
  }
})();
