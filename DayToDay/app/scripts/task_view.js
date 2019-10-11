export default function taskView (store) {

  let $taskForm = $(`
    <section id="task-form">
      <h1>Welcome to Day to Day! </h1>
      <ul>
      </ul>
      <form class="create-task" action="index.html" method="post">
        <input id='name' type="text" name="" value="" placeholder="name">
        <input id='description'type="text" name="" value="" placeholder="description">
        <input id='state'type="text" name="" value="" placeholder="state">
        <input id='important'type="text" name="" value="" placeholder="important">
        <input id='due' type="text" name="" value="" placeholder="due by:">
        <button id="new-task" type="button" name="button">New Task</button>
      </form>
      <button id="logout"type="button" name="button">Logout</button>
    </section>
    `);

  let $logout = $('#logout');
  $logout.on('click', function () {
    store.dispatch({
      type: "LOG_OUT",
    });
  })

  let taskList = $($taskForm).find('ul');
  let tasks = store.getState().tasks;
  tasks.forEach(function (task){
    console.log(task);
    taskList.prepend(`<li>${task}</li>`);
  })

  $taskForm.on('click', '#new-task', function () {
    let $name = $('#name').val();
    let $description = $('#description').val();
    let $state = $('#state').val();
    let $important = $('#important').val();
    let $due = $('#due').val();
    console.log($name, $description, $state, $important);
    store.dispatch({
      type: "ADD_TASK",
      name: $name
      // description: $description,
      // state: $state,
      // important: $important
    });
  })

  return $taskForm;
}
