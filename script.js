const creatorForm = document.querySelector('.message-creator')
const dragZone = document.querySelector('.drag-zone')
const node = document.querySelector('.drag-zone__node')

// for (let dragZone of dragZones) {
//
// }

dragZone.addEventListener(`dragstart`, (e) => {
    e.target.classList.add(`selected`);
})

dragZone.addEventListener(`dragend`, (e) => {
    e.target.classList.remove(`selected`);
});

dragZone.addEventListener(`dragover`, (e) => {
    // Разрешаем сбрасывать элементы в эту область
    e.preventDefault();

    // Находим перемещаемый элемент
    const activeElement = dragZone.querySelector(`.selected`);

    // Находим элемент и зону, над которыми в данный момент находится курсор
    const currentElement = e.target;
    const currentZone = e.target.closest('[data-js="dropZone"]');

    // Проверяем, что событие сработало не на том элементе, который мы перемещаем, а именно на элементе списка
    const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`drag-zone__node`);


    if (!isMoveable) {
        return;
    }

    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;

    currentZone.insertBefore(activeElement, nextElement);
});

// сохранение дерева

const saveBtn = document.querySelector('.message-creator__save')


saveBtn.addEventListener('click', () => {

})


// node.addEventListener('mousedown', (e)=> {
//     // сброс дефолтного выделения текста
//     e.preventDefault()
//
//     e.target.style.position = 'absolute';
//     e.target.style.zIndex = 1000;
//
//     let left = e.pageX - e.target.getBoundingClientRect().left
//     let top = e.pageY - e.target.getBoundingClientRect().top
//
//     function moveAt(pageX, pageY) {
//         node.style.left = pageX - left + 'px';
//         node.style.top = pageY - top + 'px';
//     }
//
//     function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//     }
//
//     // перемещать по экрану
//     document.addEventListener('mousemove', onMouseMove)
//
//     // положить, удалить более ненужные обработчики событий
//     document.addEventListener('mouseup', () => {
//         document.removeEventListener('mousemove', onMouseMove)
//         document.onmouseup = null
//     })
// })
//
// // дерево сообщений
//
// const messageTree = {
//     value: 1,
//     next: {
//         value: 2,
//         next: 3
//     }
// }




// fetch("https://polls.apiblueprint.org/questions")
//     .then(res => res.json())
//     .then(questions => console.log(questions))


//
// creatorForm.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const messageText = document.querySelector('.message-creator__text').value
//     const treeNode = document.createElement("div")
//
//     treeNode.className = "drag-zone__node";
//     treeNode.innerHTML = `${messageText}`;
//
//     dragZone.prepend(treeNode)
//     console.log(messageText)
//
//     treeNode.addEventListener('mousedown', mouseDownListener)
//
// })

// возможно стоит использовать рекурсиию, но не эту(переполнение стэка, где то накосячил с выходом)
// function treeCreator(node) {
//     console.log(node.nextElementSibling)
//     if (node.nextElementSibling === null) {
//         console.log('yo')
//         return {
//             value: node.innerHTML,
//             next: null
//         }
//     } else {
//         return {
//             value: node.innerHTML,
//             next: treeCreator(node)
//         }
//     }
// }
