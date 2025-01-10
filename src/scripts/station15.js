function displayList(){
    const fruits = document.getElementById('fruits');

    const list = document.createElement('ul');
    for(const child of fruits.children){
        const li = document.createElement('li');
        li.innerText = child.innerText;
        list.appendChild(li);
    }

    fruits.innerHTML = '';
    fruits.appendChild(list);
}