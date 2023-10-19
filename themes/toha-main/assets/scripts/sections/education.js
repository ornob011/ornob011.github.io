// Define an object to map the toggling state and text.
const toggleStateMap = {
  'show-more': { nextState: 'show-less', nextText: 'Show Less' },
  'show-less': { nextState: 'show-more', nextText: 'Show More' }
};

// Toogle button state and text
function toggleButtonState(button) {
  const currentState = button.dataset.toggle;
  const { nextState, nextText } = toggleStateMap[currentState];
  button.dataset.toggle = nextState;
  button.innerHTML = nextText;
}

// Show more rows in the taken courses table
function toggleCourseVisibility (elem) {
  // find the courses
  const courses = elem.parentNode.getElementsByClassName('course')
  if (courses == null) {
    return
  }

  // toggle hidden-course class from the third elements
  for (const course of courses) {
    if (course.classList.contains('hidden-course') || course.classList.contains('toggled-hidden-course')) {
      course.classList.toggle('hidden-course')
      course.classList.add('toggled-hidden-course')
    }
  }

  // toggle the buttons visibility
  const buttonsToToggle = elem.parentNode.getElementsByClassName('show-toggle-btn');
  for (const buttonToToggle of buttonsToToggle) {
    toggleButtonState(buttonToToggle);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const els = Array.from(document.getElementsByClassName('btn'));

  els.filter((el) => el != null && (el.id === 'show-more-btn' || el.id === 'show-less-btn')).forEach((el) =>
    el.addEventListener('click', ({ target }) =>
      toggleCourseVisibility(target)))
})