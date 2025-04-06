import React, { useState } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ClassEaseDashboard = () => {
  // Sample user data
  const user = {
    name: "User"
  };

  // Sample to-do list data
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete Math Assignment", done: false },
    { id: 2, text: "Study for Science Test", done: false },
    { id: 3, text: "Read Chapter 5 for English", done: true },
    { id: 4, text: "Prepare slides for presentation", done: false }
  ]);

  // Sample upcoming classes
  const [upcomingClasses, setUpcomingClasses] = useState([
    { id: 1, name: "Mathematics", time: "9:00 AM - 10:30 AM", room: "Room 101", instructor: "Dr. Johnson" },
    { id: 2, name: "Physics", time: "11:00 AM - 12:30 PM", room: "Lab 3", instructor: "Prof. Williams" },
    { id: 3, name: "Computer Science", time: "2:00 PM - 3:30 PM", room: "Tech Hall 2", instructor: "Dr. Garcia" }
  ]);

  // New task form state
  const [newTask, setNewTask] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);

  // New class form state
  const [newClass, setNewClass] = useState({
    name: "",
    time: "",
    room: "",
    instructor: ""
  });
  const [isAddingClass, setIsAddingClass] = useState(false);

  // Chart data
  const chartData = {
    labels: ['Math', 'Science', 'History', 'English', 'Art', 'CS'],
    datasets: [
      {
        label: 'Current Grade',
        data: [85, 92, 78, 88, 95, 90],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const attendanceData = {
    labels: ['Present', 'Absent', 'Late'],
    datasets: [
      {
        data: [90, 5, 5],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Add new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
      setTodos([...todos, { id: newId, text: newTask, done: false }]);
      setNewTask("");
      setIsAddingTask(false);
    }
  };

  // Add new class
  const addClass = () => {
    if (newClass.name && newClass.time) {
      const newId = upcomingClasses.length > 0 
        ? Math.max(...upcomingClasses.map(c => c.id)) + 1 
        : 1;
      setUpcomingClasses([...upcomingClasses, { ...newClass, id: newId }]);
      setNewClass({ name: "", time: "", room: "", instructor: "" });
      setIsAddingClass(false);
    }
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: 'Performance Overview',
        color: 'white',
        font: {
          size: 14
        }
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: 'Attendance Overview',
        color: 'white',
        font: {
          size: 14
        }
      },
    }
  };

  return (
    <div className="flex h-screen bg-[#1a202c]">
      {/* Sidebar */}
      <div className="w-64 bg-[#111827] border-r border-gray-700">
        <div className="flex items-center p-4 border-b border-gray-700">
          <div className="mr-2 text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-white">ClassEase</h1>
        </div>
        
        <div className="mt-6">
          <h2 className="px-4 py-2 text-sm text-gray-400">My desk</h2>
          <ul>
            <li className="px-4 py-2 flex items-center text-white hover:bg-gray-800 rounded-lg mx-2 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </li>
            <li className="px-4 py-2 flex items-center text-white hover:bg-gray-800 rounded-lg mx-2 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Classes
            </li>
            <li className="px-4 py-2 flex items-center text-white bg-gray-700 rounded-lg mx-2 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              To do List
            </li>
            <li className="px-4 py-2 flex items-center text-white hover:bg-gray-800 rounded-lg mx-2 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Report Card
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="px-4 py-2 text-sm text-gray-400">Settings</h2>
          <ul>
            <li className="px-4 py-2 flex items-center text-white hover:bg-gray-800 rounded-lg mx-2 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Preferences
            </li>
            <li className="px-4 py-2 flex items-center text-white hover:bg-gray-800 rounded-lg mx-2 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Manage
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-[#1a202c]">
        {/* Welcome section */}
        <div className="p-6 bg-blue-600">
          <h2 className="text-2xl font-bold text-white">Hi, {user.name}!</h2>
          <p className="text-blue-100">Check your to do list!</p>
        </div>

        {/* To-Do List Section */}
        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold uppercase text-[#1a202c] border-b-2 border-blue-500 pb-2">To Do List</h3>
              <button 
                onClick={() => setIsAddingTask(!isAddingTask)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-full flex items-center text-sm transition-all duration-200"
              >
                {isAddingTask ? 'Cancel' : 'Add Task'}
              </button>
            </div>
            
            {isAddingTask && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter new task"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <button 
                  onClick={addTask}
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded"
                >
                  Save
                </button>
              </div>
            )}
            
            <ul className="space-y-3">
              {todos.map(todo => (
                <li key={todo.id} className="flex items-center bg-blue-50 p-3 rounded-md">
                  <input 
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                    className="mr-3 h-5 w-5 rounded"
                  />
                  <span className={`text-[#1a202c] ${todo.done ? 'line-through text-gray-400' : ''}`}>
                    {todo.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Upcoming Classes Section */}
        <div className="px-6 pb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold uppercase text-[#1a202c] border-b-2 border-blue-500 pb-2">Upcoming Classes</h3>
              <button 
                onClick={() => setIsAddingClass(!isAddingClass)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-full flex items-center text-sm transition-all duration-200"
              >
                {isAddingClass ? 'Cancel' : 'Add Class'}
              </button>
            </div>
            
            {isAddingClass && (
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={newClass.name}
                    onChange={(e) => setNewClass({...newClass, name: e.target.value})}
                    placeholder="Class Name"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={newClass.time}
                    onChange={(e) => setNewClass({...newClass, time: e.target.value})}
                    placeholder="Time (e.g. 10:00 AM - 11:30 AM)"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={newClass.room}
                    onChange={(e) => setNewClass({...newClass, room: e.target.value})}
                    placeholder="Room"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={newClass.instructor}
                    onChange={(e) => setNewClass({...newClass, instructor: e.target.value})}
                    placeholder="Instructor"
                    className="p-2 border border-gray-300 rounded"
                  />
                </div>
                <button 
                  onClick={addClass}
                  className="mt-3 bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded"
                >
                  Save
                </button>
              </div>
            )}
            
            <div className="space-y-3">
              {upcomingClasses.map(cls => (
                <div key={cls.id} className="flex justify-between items-center p-4 bg-blue-50 rounded-md">
                  <div>
                    <h4 className="font-medium text-[#1a202c]">{cls.name}</h4>
                    <p className="text-sm text-gray-600">{cls.room} • {cls.instructor}</p>
                  </div>
                  <div className="text-sm bg-blue-600 py-1 px-3 rounded-full text-white">
                    {cls.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overall Performance Charts */}
        <div className="px-6 pb-6">
          <div className="bg-[#2d3748] p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 uppercase text-white border-b border-blue-500 pb-2">Overall</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#2d3748] p-4 rounded-lg border border-gray-600">
                <h4 className="text-md font-medium mb-3 text-white">Grades by Subject</h4>
                <div className="h-64">
                  <Bar data={chartData} options={options} />
                </div>
              </div>
              
              <div className="bg-[#2d3748] p-4 rounded-lg border border-gray-600">
                <h4 className="text-md font-medium mb-3 text-white">Attendance Record</h4>
                <div className="h-64">
                  <Doughnut data={attendanceData} options={doughnutOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassEaseDashboard;