export default function warbleFeed (store) {

  let $html = $(`
    <div class="warble_feed" id="warble-feed">
      <h2>FIND YOUR HARMONY AND SING YOUR NOTES!</h2>
    </div>
    `);

      // let taskList = $($html).find('.warble_feed');
      // let tasks = store.getState().tasks;
      // tasks.forEach(function (task){
      //   console.log(task);
      //   taskList.prepend(`<li>${task}</li>`);
      // })
  return $html;

}
