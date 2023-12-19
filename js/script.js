// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Step1: Add a click event listener for the save button
  $('.saveBtn').on('click', function () {
    //step2: use $(this) to reference the click save button
    var text = $(this).siblings('.description').val();
    // step3: use DOM to get hour
    var time = $(this).parent().attr('id');
    //step 4: save user input in local storage
    localStorage.setItem(time, text);
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // step 5:
  function updateBlockClasses() {
    // step 6:
    var currentHour = dayjs().hour();
    // step 7:
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('present');
      } else {
        $(this).removeClass('past Present');
        $(this).addClass('future');
      }
    });
  }

  // step 8:
  updateBlockClasses();
  // step 9:
  setInterval(updateBlockClasses, 10000);

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // step 10: function on displaying event
  function displayText() {
    // step 11: Loop over
    $('.time-block').each(function () {
      // step 12: getting the ID of timeblock
      var blockHour = $(this).attr('id');
      // step 13: set textarea of corresponding local stoartage
      $(this).children('.description').val(localStorage.getItem(blockHour));
    });
  }

  // setp 14:  call function
  displayText();

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd,MMMM D, YYYY'));
});
