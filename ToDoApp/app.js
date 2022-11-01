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
                <i class="fa-solid fa-check"></i>
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

// Deletion of tasks from tasks list

tasks.addEventListener('click',(e)=>{
    if (e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

// mark task as completed

tasks.addEventListener('click',(e)=>{
    if (e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
