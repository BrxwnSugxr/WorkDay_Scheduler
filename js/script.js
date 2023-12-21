const timeBlockEl = $('.timeblock');
const buttonEl = $('.btn');
const blockCount = timeBlockEl.children().length;

function setDate() {
  const timeDisplay = moment();
  $('#currentDay').text(timeDisplay.format('dddd, MMMM Do YYYY'));
}

function checkTimeBlock() {
  const currentHour = moment().format('MM-DD-YYYY h:mm A');

  for (let i = 0; i < blockCount; i++) {
    const timeBlockID = $('.timeblock div textarea').eq(i).attr('id');
    const timeBlock = moment(
      moment().format('MM-DD-YYYY') +
        ' ' +
        moment(timeBlockID, 'hA').format('h:mm A'),
      'MM-DD-YYYY h:mm A'
    );
    const timeDiff = checkTimeDiff(currentHour, timeBlock);

    if (timeDiff < 0) {
      $(`#${timeBlockID}`).addClass('bg-success');
    } else if (timeDiff > 1) {
      $(`#${timeBlockID}`).addClass('bg-secondary');
    } else {
      $(`#${timeBlockID}`).addClass('bg-danger');
    }
  }
}

function checkTimeDiff(currentHour, timeBlock) {
  return moment(currentHour, 'MM-DD-YYYY h:mm A').diff(
    timeBlock,
    'hours',
    true
  );
}

function printSavedSched() {
  const currDate = moment().format('MM-DD-YYYY');

  for (let i = 0; i < blockCount; i++) {
    const textArea = $('.timeblock div textarea').eq(i).attr('id');
    const storedVal = localStorage.getItem(`${currDate} ${textArea}`);

    if (storedVal) {
      $(`#${textArea}`).val(storedVal);
    }
  }
}

// timer
function setCurrentDateTime() {
  var currentDateTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  $('#currentDay').text(currentDateTime);
}

setCurrentDateTime();

setInterval(setCurrentDateTime, 1000);

timeBlockEl.on('click', '.btn', function (event) {
  const timeBlock = $(event.target).data('time');
  const currDate = moment().format('MM-DD-YYYY');
  const textAreaValue = $(`#${timeBlock}`).val();
  localStorage.setItem(`${currDate} ${timeBlock}`, textAreaValue);

  // Use removeClass to show the alert
  $('.alert').removeClass('d-none');
  setTimeout(() => {
    // Use addClass to hide the alert
    $('.alert').addClass('d-none');
  }, 3000);
});

function init() {
  setDate();
  checkTimeBlock();
  printSavedSched();
}

// Use document ready function for better compatibility
$(document).ready(init);
