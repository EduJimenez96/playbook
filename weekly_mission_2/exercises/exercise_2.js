const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

console.log("Explorers name")
explorers.forEach(explorer => console.log(explorer.name))
console.log("\nExplorers stack")
explorers.forEach(explorer => console.log(explorer.stack))

console.log("\nExplorers new stack list")
const stackList = explorers.map(function(explorer) {return explorer.stack})
console.log(stackList)

console.log("\nExplorers with \'js\' in their stacks")
const jsExplorers = explorers.filter((explorer) => explorer.stack.includes("js"))
console.log(jsExplorers)

console.log("\nFirst explorer from CDMX")
const cdmxExplorers = explorers.find((explorer) => explorer.city == "CDMX")
console.log(cdmxExplorers)

console.log("\nTotal exercises completed")
const completedExercises = explorers.reduce((explorer, completed) => explorer + completed.exercises_completed, 0)
console.log(completedExercises)

console.log("\nAt least one finished frontend misson?")
const finishedExercises = explorers.some((explorer) => explorer.missions.frontend.isFinished === true)
console.log(finishedExercises)

console.log("\nEveryone has finished onboarding misson?")
const isObFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log(isObFinished)
