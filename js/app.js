// step 1: container element id "timeBlockContainer"
var timeBlocksContainer = document.getElementById('timeBlocksContainer');

// step 2: creating the hours
var workingHours = Array.from({ length: 9 }, (_, index) => index + 9);

// step 3: looping through the hours
for (var i = 0; i < workingHours.length; i++) {
  // create a time with div
  var timeBlock = document.createElement('div');
  timeBlock.id = 'hour-' + workingHours[i];
  timeBlock.classList.add('row', 'time-block');
  // hour display
  var hourDisplay = document.createElement('div');
  hourDisplay.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
  hourDisplay.textContent = workingHours[i] + 'AM';
  //   create the textarea for user input
  var textarea = document.createElement('textarea');
  textarea.classList.add('col-8', 'col-md-10', 'description');
  textarea.rows = 3;

  //   save bttn
  var saveBtn = document.createElement('button');
  saveBtn.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
  saveBtn.setAttribute('aria-label', 'save');
  saveBtn.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i>';
  //   appending elelements to the time blokc
  timeBlock.appendChild(hourDisplay);
  timeBlock.appendChild(textarea);
  timeBlock.appendChild(saveBtn);

  //   append time block to container
  timeBlockContainer.appendChild(timeBlock);
}
