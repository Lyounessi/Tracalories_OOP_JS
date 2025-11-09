class CalorieTracker {
    constructor() {
        this._calorieLimit = 2800;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];
        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
    }
    // Public methods/API
    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        this._render();
    }

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
        this._render();
    }

    // Private methods //

    _displayCaloriesTotal  () {
        const totalCaloriesEl = document.getElementById('calories-total');
        totalCaloriesEl.innerHTML = this._totalCalories;
    }

    _displayCaloriesLimit() {
        const calorieLimitEl = document.getElementById('calories-limit');
        calorieLimitEl.innerHTML = this._calorieLimit;
    }
    _displayCaloriesConsumed() {
        const caloriesConsumedEl = document.getElementById('calories-consumed');
        const consumer = this._meals.reduce((total, meal) => total + meal.calories, 0);
        caloriesConsumedEl.innerHTML = consumer;
    }
    _displayCaloriesBurned() {
        const caloriesBurnedEl = document.getElementById('calories-burned');
        const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0);
        caloriesBurnedEl.innerHTML = burned;
    }
    _render() {
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
    }
}

class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

const calorieTracker = new CalorieTracker();
const meal = new Meal("Salad", 600);
const meal2 = new Meal("Pizza", 1000);
const run = new Workout("Running", 340);
const bike = new Workout("Biking", 200);
calorieTracker.addMeal(meal);
calorieTracker.addMeal(meal2);
calorieTracker.addWorkout(run);
