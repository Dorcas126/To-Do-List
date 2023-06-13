import './style.css';

const tasks = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'Complete To Do list',
    completed: true,
    index: 1,
  },

];

const loadTask = (arr) => {
  arr.forEach((task) => {
    const container = document.querySelector('.list-div');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input type="checkbox" name="" id="">
    <p class="task-to-be-done">${task.description}</p>
    `;
    container.appendChild(listItem);
  });
};

loadTask(tasks);