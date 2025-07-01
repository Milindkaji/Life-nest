
import React, { useState } from 'react';
import Footer from '../Componenets/Footer';

const Habit = () => {
  
  const [habits, setHabits] = useState([]);
  // State to hold the current input value for a new habit
  const [newHabitText, setNewHabitText] = useState('');

  // Function to handle adding a new habit
  const handleAddHabit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if the input is empty or just whitespace
    if (newHabitText.trim() === '') {
      return; // Do not add empty habits
    }

    const newHabit = {
      id: Date.now(), // Unique ID based on the current timestamp
      text: newHabitText.trim(), // Trim whitespace from the input text
      completed: false, // New habits are initially not completed
    };

    setHabits([...habits, newHabit]); // Add the new habit to the existing list
    setNewHabitText(''); // Clear the input field after adding the habit
  };

  // Function to toggle the completion status of a habit
  const handleToggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  // Function to handle deleting a habit
  const handleDeleteHabit = (id) => {
    // Filter out the habit with the given ID
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <h1 className='flex flex-row items-center justify-center text-6xl font-bold py-3 text-gray-800'>
        List out your habits
      </h1>

      <div className='flex flex-row items-center justify-center py-10'>
        <form onSubmit={handleAddHabit} className='space-x-2 flex'>
          <input
            type="text"
            value={newHabitText} // Bind input value to state
            onChange={(e) => setNewHabitText(e.target.value)} // Update state on change
            className='border-4 px-12 py-2 bg-amber-200 rounded-lg focus:outline-none focus:border-amber-500' // Added rounded corners and focus style
            placeholder='Enter your habits'
          />
          <button
            type='submit'
            className='flex items-center justify-center border-2 px-4 py-3 rounded-full bg-amber-500 text-white text-xl font-bold shadow-md hover:bg-amber-600 transition duration-200'
          >
            +
          </button>
        </form>
      </div>

      
      <div className="max-w-md mx-auto p-4">
        {habits.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No habits added yet. Start tracking!</p>
        ) : (
          <ul className="space-y-3">
            {habits.map((habit) => (
              <li
                key={habit.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <span
                  className={`flex-grow text-lg cursor-pointer ${
                    habit.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}
                  onClick={() => handleToggleHabit(habit.id)}
                >
                  {habit.text}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleToggleHabit(habit.id)}
                    className={`p-2 rounded-full text-white transition duration-200 ${
                      habit.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    title={habit.completed ? "Mark as Not Done" : "Mark as Done"}
                  >
                    {/* Simple text/emoji for check/uncheck */}
                    {habit.completed ? '✅' : '⚪'}
                  </button>
                  <button
                    onClick={() => handleDeleteHabit(habit.id)}
                    className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-200"
                    title="Delete Habit"
                  >
                    {/* Simple text/emoji for delete */}
                    ✖️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer/>
    </div>
  );
}

export default Habit;
