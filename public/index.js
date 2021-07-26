const baseURL = 'http://localhost:4005/api/'
const todayBtn = document.getElementById('todaysWorkout')

const getWorkout = (e) => {
    e.preventDefault()
    console.log("clicked!")
    axios.get(`${baseURL}weights/`)
    .then(res => {
        let workoutContainer = document.createElement('div')
        let triceps = res.data[0]
        let chest = res.data[1]
        let biceps = res.data[2]
        let back = res.data[3]
        let shoulders = res.data[4]
        let core = res.data[5]
        let legs = res.data[6]
        let cardio = res.data[7]
        let plyo = res.data[8]
        let date = new Date()
        let day = date.getDay()
        const setupContainerCardio = (num) => {
            let exercise = document.createElement('div')
            let h4 = document.createElement('h4')
            let description = document.createElement('p')
            document.body.appendChild(workoutContainer)
            workoutContainer.appendChild(exercise)
            exercise.appendChild(h4)
            exercise.appendChild(description)
            h4.addEventListener('click',crossOffWorkout)
            description.textContent = cardio.workouts[num].description
            h4.textContent = cardio.workouts[num].name
        }
        const setupContainer = (type) => {
            for (i in type.workouts) {
                let exercise = document.createElement('div')
                let h4 = document.createElement('h4')
                let description = document.createElement('p')
                document.body.appendChild(workoutContainer)
                workoutContainer.appendChild(exercise)
                exercise.appendChild(h4)
                exercise.appendChild(description)
                h4.addEventListener('click',crossOffWorkout)
                description.textContent = type.workouts[i].description
                h4.textContent = type.workouts[i].name
            }
        }
        if (day === 0) {
            console.log("rest day")
        } else if (day === 1) {
            setupContainerCardio(0)
            setupContainer(triceps)
            setupContainer(chest)

        } else if (day === 2) {
            setupContainerCardio(0)
            setupContainer(biceps)
            setupContainer(back)
            // let exercise = document.createElement('div')
            // let h4 = document.createElement('h4')
            // let = description = document.createElement('p')
            // description.textContent = cardio.workouts[0].description
            // h4.textContent = cardio.workouts[0].name
            // document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
            // exercise.appendChild(description)
            // for (let i in biceps.workouts) {
            //     console.log(biceps.workouts[i].name)
            //     let exercise = document.createElement('div')
            //     let h4 = document.createElement('h4')
            //     let = description = document.createElement('p')
            //     description.textContent = biceps.workouts[i].description
            //     h4.textContent = biceps.workouts[i].name
            //     document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
            //     exercise.appendChild(description)
            // }
            // for (let i in back.workouts) {
            //     console.log(back.workouts[i].name)
            //     let exercise = document.createElement('div')
            //     let h4 = document.createElement('h4')
            //     let = description = document.createElement('p')
            //     description.textContent = back.workouts[i].description
            //     h4.textContent = back.workouts[i].name
            //     document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
            //     exercise.appendChild(description)
            // }
        } else if (day === 3) {
            let exercise = document.createElement('div')
            let h4 = document.createElement('h4')
            let = description = document.createElement('p')
            description.textContent = cardio.workouts[0].description
            h4.textContent = cardio.workouts[0].name
            document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
            exercise.appendChild(description)
            for (let i in legs.workouts) {
                console.log(legs.workouts[i].name)
                let exercise = document.createElement('div')
                let h4 = document.createElement('h4')
                let = description = document.createElement('p')
                description.textContent = legs.workouts[i].description
                h4.textContent = legs.workouts[i].name
                document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
                exercise.appendChild(description)
            }
            for (let i in core.workouts) {
                console.log(core.workouts[i].name)
                let exercise = document.createElement('div')
                let h4 = document.createElement('h4')
                let = description = document.createElement('p')
                description.textContent = core.workouts[i].description
                h4.textContent = core.workouts[i].name
                document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
                exercise.appendChild(description)
            }
        } else if (day === 4) {
            let exercise = document.createElement('div')
            let h4 = document.createElement('h4')
            let = description = document.createElement('p')
            description.textContent = cardio.workouts[0].description
            h4.textContent = cardio.workouts[0].name
            document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
            exercise.appendChild(description)
            for (let i in shoulders.workouts) {
                console.log(shoulders.workouts[i].name)
                let exercise = document.createElement('div')
                let h4 = document.createElement('h4')
                let = description = document.createElement('p')
                description.textContent = shoulders.workouts[i].description
                h4.textContent = shoulders.workouts[i].name
                document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
                exercise.appendChild(description)
            }
            for (let i in core.workouts) {
                console.log(core.workouts[i].name)
                let exercise = document.createElement('div')
                let h4 = document.createElement('h4')
                let = description = document.createElement('p')
                description.textContent = core.workouts[i].description
                h4.textContent = core.workouts[i].name
                document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
                exercise.appendChild(description)
            }
        } else if (day === 5) {
            let exercise = document.createElement('div')
            let h4 = document.createElement('h4')
            let = description = document.createElement('p')
            description.textContent = cardio.workouts[0].description
            h4.textContent = cardio.workouts[0].name
            document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
            exercise.appendChild(description)
            for (let i in plyo.workouts) {
                console.log(plyo.workouts[i].name)
                let exercise = document.createElement('div')
                let h4 = document.createElement('h4')
                let = description = document.createElement('p')
                description.textContent = plyo.workouts[i].description
                h4.textContent = plyo.workouts[i].name
                document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
                exercise.appendChild(description)
            }
        } else if (day === 6) {
            let exercise = document.createElement('div')
            let h4 = document.createElement('h4')
            let = description = document.createElement('p')
            description.textContent = cardio.workouts[1].description
            h4.textContent = cardio.workouts[1].name
            document.body.appendChild(workoutContainer).appendChild(exercise).appendChild(h4)
            exercise.appendChild(description)
        }
        })
}
    
const crossOffWorkout = (event) => {
    console.log("crossoff")
    event.target.parentNode.classList.toggle('checked')
}

todayBtn.addEventListener('click',getWorkout)