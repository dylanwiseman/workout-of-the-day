const baseURL = "http://localhost:4005/api/";

//Selecting the buttons:
const todayBtn = document.getElementById("todaysWorkout");
const tricepBtn = document.getElementById("triceps-button");
const bicepBtn = document.getElementById("biceps-button");
const chestBtn = document.getElementById("chest-button");
const backBtn = document.getElementById("back-button");
const legsBtn = document.getElementById("legs-button");
const coreBtn = document.getElementById("core-button");
const shouldersBtn = document.getElementById("shoulders-button");
const cardioBtn = document.getElementById("cardio-button");
const plyoBtn = document.getElementById("plyo-button");

//Get's Today's Workout:
const getWorkout = (e) => {
  e.preventDefault();
  document.getElementById("big-container").innerHTML = "";
  axios.get(`${baseURL}workouts/`).then((res) => {
    let workoutContainer = document.createElement("div");
    let triceps = res.data[0];
    let chest = res.data[1];
    let biceps = res.data[2];
    let back = res.data[3];
    let shoulders = res.data[4];
    let core = res.data[5];
    let legs = res.data[6];
    let cardio = res.data[7];
    let plyo = res.data[8];
    let rest = res.data[9];
    let date = new Date();
    let day = date.getDay();
    //Function to create & arrange containers for cardio exercises:
    const setupContainerCardio = (num) => {
      let exercise = document.createElement("div");
      let h4 = document.createElement("h4");
      let description = document.createElement("p");
      document.getElementById("big-container").appendChild(workoutContainer);
      workoutContainer.appendChild(exercise);
      exercise.appendChild(h4);
      exercise.appendChild(description);
      h4.addEventListener("click", crossOffWorkout);
      exercise.classList.add("angled-gradient-div");
      description.textContent = cardio.workouts[num].description;
      h4.textContent = cardio.workouts[num].name;
    };
    //Function to create & arrange containers for all other exercises:
    const setupContainer = (type) => {
      for (i in type.workouts) {
        let exercise = document.createElement("div");
        let h4 = document.createElement("h4");
        let description = document.createElement("p");
        document.getElementById("big-container").appendChild(workoutContainer);
        workoutContainer.appendChild(exercise);
        exercise.appendChild(h4);
        exercise.appendChild(description);
        h4.addEventListener("click", crossOffWorkout);
        exercise.classList.add("angled-gradient-div");
        description.textContent = type.workouts[i].description;
        h4.textContent = type.workouts[i].name;
        //Identifies special workouts:
        if (
          type.workouts[i].name === "the crucifix" ||
          type.workouts[i].name === "triple threat" ||
          type.workouts[i].name === "complex shoulder flys"
        ) {
          exercise.classList.add("gold");
        }
      }
    };
    //Builds exercise containers based on the day:
    if (day === 0) {
      setupContainer(rest);
    } else if (day === 1) {
      setupContainerCardio(0);
      setupContainer(triceps);
      setupContainer(chest);
    } else if (day === 2) {
      setupContainerCardio(0);
      setupContainer(biceps);
      setupContainer(back);
    } else if (day === 3) {
      setupContainerCardio(0);
      setupContainer(legs);
      setupContainer(core);
    } else if (day === 4) {
      setupContainerCardio(0);
      setupContainer(shoulders);
      setupContainer(core);
    } else if (day === 5) {
      setupContainerCardio(0);
      setupContainer(plyo);
    } else if (day === 6) {
      setupContainerCardio(1);
    }
  });
};

//Crosses off completed workouts when clicked:
const crossOffWorkout = (event) => {
  event.target.parentNode.classList.toggle("checked");
};

//Gets workouts by type:
const getTypeWorkout = (e) => {
  e.preventDefault();
  document.getElementById("big-container").innerHTML = "";
  axios.get(`${baseURL}workouts/`).then((res) => {
    let workoutContainer = document.createElement("div");
    let triceps = res.data[0];
    let chest = res.data[1];
    let biceps = res.data[2];
    let back = res.data[3];
    let shoulders = res.data[4];
    let core = res.data[5];
    let legs = res.data[6];
    let cardio = res.data[7];
    let plyo = res.data[8];
    const setupContainer = (type) => {
      for (i in type.workouts) {
        let exercise = document.createElement("div");
        let h4 = document.createElement("h4");
        let description = document.createElement("p");
        document.getElementById("big-container").appendChild(workoutContainer);
        workoutContainer.appendChild(exercise);
        exercise.appendChild(h4);
        exercise.appendChild(description);
        h4.addEventListener("click", crossOffWorkout);
        exercise.classList.add("angled-gradient-div");
        description.textContent = type.workouts[i].description;
        h4.textContent = type.workouts[i].name;
        if (
          type.workouts[i].name === "the crucifix" ||
          type.workouts[i].name === "triple threat" ||
          type.workouts[i].name === "complex shoulder flys"
        ) {
          exercise.classList.add("gold");
        }
      }
    };
    if (e.target.textContent === "Triceps") {
      setupContainer(triceps);
    } else if (e.target.textContent === "Biceps") {
      setupContainer(biceps);
    } else if (e.target.textContent === "Chest") {
      setupContainer(chest);
    } else if (e.target.textContent === "Back") {
      setupContainer(back);
    } else if (e.target.textContent === "Legs") {
      setupContainer(legs);
    } else if (e.target.textContent === "Core") {
      setupContainer(core);
    } else if (e.target.textContent === "Shoulders") {
      setupContainer(shoulders);
    } else if (e.target.textContent === "Cardio") {
      setupContainer(cardio);
    } else if (e.target.textContent === "Plyo") {
      setupContainer(plyo);
    }
  });
};

//Event Listeners:
todayBtn.addEventListener("click", getWorkout);
tricepBtn.addEventListener("click", getTypeWorkout);
bicepBtn.addEventListener("click", getTypeWorkout);
chestBtn.addEventListener("click", getTypeWorkout);
plyoBtn.addEventListener("click", getTypeWorkout);
backBtn.addEventListener("click", getTypeWorkout);
legsBtn.addEventListener("click", getTypeWorkout);
coreBtn.addEventListener("click", getTypeWorkout);
shouldersBtn.addEventListener("click", getTypeWorkout);
cardioBtn.addEventListener("click", getTypeWorkout);
