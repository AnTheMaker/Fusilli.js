/* Fusilli.js by An - Distributed under MIT License - github.com/AnTheMaker/Fusilli.js */

const modalStyles = `
.modal{
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.6);
  justify-content: center;
  align-items: center;
  user-select: none;
  z-index: 999;
}
.modal.open{
  display: flex;
}
.modal_box{
  background: white;
  color: black;
  margin: 7px;
  padding: 18px 20px;
  border-radius: 8px;
  width: 450px;
  min-height: 200px;
  max-width: 100%;
  max-height: calc(100% - 20px);
  overflow: auto;
  box-sizing: border-box;
  z-index: 99;
  user-select: auto;
  pointer-events: auto;
}
.modal_close{
  float: right;
  margin: -6px -4px 0 10px;
  background: white;
  cursor: pointer;
  font-size: 170%;
  z-index: 999;
}
`;

window.addEventListener('load', function(){
  var modalStyleSheet = document.createElement('style');
  modalStyleSheet.type = 'text/css';
  modalStyleSheet.innerText = modalStyles;
  document.head.appendChild(modalStyleSheet);

  var modals = [...document.getElementsByClassName('modal')];
  modals.forEach(function(modal){
    modal_box = modal.querySelector('.modal_box');
    modal_box.insertAdjacentHTML('afterbegin', `<div id="close_`+modal.id+`" class="modal_close">&times;</div>`);
    document.getElementById('close_'+modal.id).addEventListener('click', function(){
      closeModal(modal);
    });
    modal.addEventListener('click', function(e){
      closeModal(modal);
    });
    modal_box.addEventListener('click', function(e){
      e.stopPropagation();
    });
  });
});

function openModal(modal){
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('open');
}
function closeModal(modal){
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('open');
}
