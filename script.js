const form = document.querySelector('form');
const workoutList = document.querySelector('#workout-list');

form.addEventListener('submit', addExercise);

function addExercise(e) {
  e.preventDefault();

  const exercise = document.querySelector('#exercise').value;
  const sets = document.querySelector('#sets').value;
  const reps = document.querySelector('#reps').value;
  const weight = document.querySelector('#weight').value;
}