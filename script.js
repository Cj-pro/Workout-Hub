// script.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("workout-detail");

  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan");

  const workouts = {
    beginner: {
      title: "Beginner Workout Plan",
      description: "Perfect for those just starting out.",
      exercises: [
        "10 Push-ups",
        "15 Squats",
        "20-second Plank",
        "10 Crunches",
        "Rest: 60 seconds between sets",
        "Tips: Do it all for three to four sets each workout"
      ]
    },
    intermediate: {
      title: "Intermediate Workout Plan",
      description: "Take your fitness to the next level.",
      exercises: [
        "15 Push-ups",
        "20 Lunges",
        "30-second Plank",
        "15 Burpees",
        "Rest: 45 seconds between sets",
        "Tips: Do it all for three to four sets each workout"

      ]
    },
    advanced: {
      title: "Advanced Workout Plan",
      description: "For experienced fitness enthusiasts.",
      exercises: [
        "20 Push-ups",
        "25 Jump Squats",
        "1-minute Plank",
        "20 Mountain Climbers",
        "Rest: 30 seconds between sets",
        "Tips: Do it all for four sets until near to failure each workout",
        
      ],
      img:"https://www.shutterstock.com/search/push-muscles-anatomy"
    }
  };

  if (!plan || !workouts[plan]) {
    container.innerHTML = `<h2>Workout Plan Not Found</h2><p>Please select a valid workout program.</p>`;
    return;
  }

  const workout = workouts[plan];

  container.innerHTML = `
    <h2>${workout.title}</h2>
    <p>${workout.description}</p>
    <ul>
      ${workout.exercises.map(ex => `<li>${ex}</li>`).join("")}
    </ul>
  `;
});
// Example workout data with images
const workouts = [
  {
    title: "Yoga Stretch",
    description: "Improve flexibility and calm your mind with this yoga routine.",
    steps: [
      "Begin with basic breathing exercises.",
      "Move into downward dog for 1 minute.",
      "Follow with sun salutations for 5 minutes.",
      "Finish with seated meditation."
    ],
    image: "https://images.unsplash.com/photo-1554344056-2b1d8d92f2e4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cardio Blast",
    description: "Boost your heart rate and burn calories with this cardio routine.",
    steps: [
      "Start with a 5-minute warm-up jog.",
      "Do jumping jacks for 3 minutes.",
      "High knees for 2 minutes.",
      "Finish with a 5-minute cool down walk."
    ],
    image: "https://images.unsplash.com/photo-1594737625785-dfbd5a9928c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Strength Training",
    description: "Build muscle and strength using bodyweight and weights.",
    steps: [
      "Push-ups: 3 sets of 12 reps",
      "Dumbbell curls: 3 sets of 10 reps",
      "Squats: 3 sets of 15 reps",
      "Plank hold: 3 sets of 60 seconds"
    ],
    image: "https://images.unsplash.com/photo-1599058917211-13b924554fc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pilates Core",
    description: "Strengthen your core and improve posture with Pilates exercises.",
    steps: [
      "Hundred exercise for 2 minutes",
      "Roll-up for 1 minute",
      "Leg circles: 10 reps per leg",
      "Plank with leg lift: 3 sets of 30 seconds"
    ],
    image: "https://images.unsplash.com/photo-1599058917207-3f9cb0dc3a3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "CrossFit Challenge",
    description: "High-intensity interval training to push your limits.",
    steps: [
      "20 Burpees",
      "30 Kettlebell swings",
      "15 Pull-ups",
      "400m run"
    ],
    image: "https://images.unsplash.com/photo-1599058917225-7f3c3d8c3f7e?auto=format&fit=crop&w=800&q=80"
  }
];

// Function to display a specific workout
function displayWorkout(workoutIndex = 0) {
  const container = document.getElementById('workout-detail');
  const workout = workouts[workoutIndex];

  container.innerHTML = `
    <h3>${workout.title}</h3>
    <img src="${workout.image}" alt="${workout.title}" style="width:100%; max-width:600px; border-radius:10px; margin-bottom:1rem;">
    <p>${workout.description}</p>
    <ul>
      ${workout.steps.map(step => `<li>${step}</li>`).join('')}
    </ul>
  `;
}

// Load first workout by default (can later change to dynamic selection)
displayWorkout(0);

