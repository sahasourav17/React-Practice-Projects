let input = document.querySelector('.entered-list');
let addButton = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if(input.value.trim() !== 0) {
        addButton.classList.add('active')
    }
    else {
        addButton.classList.remove('active')
    }
})

// adding new tasks

addButton.addEventListener('click',()=>{
    if (input.value.trim() !== 0){
        let newTask = document.createElement('div');
        newTask.classList.add('item');
        newTask.innerHTML = `
            <p> ${input.value} </p>
            <div class="item-btn">
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
            `
            tasks.appendChild(newTask);
            input.value = '';
        }
        else{
            alert('Please enter a valid task name!')
        }
    }
)

