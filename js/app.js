// step 1: container element id "timeBlockContainer"
var timeBlockContainer = document.getElementById('timeBlocksContainer');
// step 2: creating the hours
var workingHours = Array.from({ length: 9 }, (_, index) => index + 9);
// step 3: looping through the hours
for (var i = 0; i < workingHours.length; i++) {
  // create a time with div
  var timeBlock = document.createElement('div');
  timeBlock.id = 'hour-' + workingHours[i];
  timeBlock.classList.add('row', 'time-block');
  //   create the textarea for user input
  var textarea = document.createElement('div');
  hourDisplay.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
  hourDisplay.textContent = workingHours[i] + 'AM';
  
}
