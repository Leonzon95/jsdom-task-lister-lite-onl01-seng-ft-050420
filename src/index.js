document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let input = document.getElementById('new-task-description').value;
    const li = document.createElement('li');
    const tasks = document.querySelector('#list');
    li.innerHTML = input; 
    tasks.appendChild(li);
    input = "";
  });


});
