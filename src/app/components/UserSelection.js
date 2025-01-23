'use client';

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID package for fallback

function formatDate(dateString) {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;

  return `${formattedDate} ${formattedTime}`;
}

export default function UserSelection({ selectUser }) {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const storedResults = localStorage.getItem('java_quizResults');
    if (storedResults) {
      setUsers(JSON.parse(storedResults));
    }
    setIsLoading(false);
  }, []);

  const addUser = (name) => {
    const userExists = users.some(user =>
    user.user && user.user.toLowerCase() === name.toLowerCase()
    );

    if (userExists) {
      setError(`The name "${name}" is already taken. Please choose another.`);
      return;
    }

    // Fallback to UUID package if window.crypto.randomUUID is unavailable
    const newUserId = typeof window !== "undefined" && window.crypto && window.crypto.randomUUID
    ? window.crypto.randomUUID()
    : uuidv4();

    localStorage.setItem('java_quizUserId', newUserId);

    const newUser = {
      id: newUserId,
      user: name,
      type: 'easy',
      score: 0,
      totalQuestions: 0,
      date: new Date().toISOString(),
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('java_quizResults', JSON.stringify(updatedUsers));
    setError('');
    selectUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUserName.trim()) {
      setError('Please enter a name.');
      return;
    }
    if (!/^[a-zA-Z0-9 ]+$/.test(newUserName.trim())) {
      setError('Name must be alphanumeric.');
      return;
    }
    if (newUserName.trim().length > 20) {
      setError('Name is too long. Maximum 20 characters allowed.');
      return;
    }
    addUser(newUserName.trim());
    setNewUserName('');
  };

  const loader = (
    <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  // Sort users by date (most recent first)
  const sortedUsers = [...users].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="mx-auto">
    <h2 className="text-2xl font-bold mb-4">Add New User</h2>
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
    <input
    type="text"
    value={newUserName}
    onChange={(e) => setNewUserName(e.target.value)}
    placeholder="Enter your name + label to remember this test"
    className="flex-1 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
    type="submit"
    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-transform transform hover:scale-105"
    >
    Add Test Label
    </button>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    </form>
    {isLoading ? loader : (
      <>
      <h2 className="text-2xl font-bold mb-4">{users.length === 0 ? 'No Test Results' : 'Test Results'}</h2>
      {users.length === 0 ? (
        <p className="text-gray-500">No test results available. Add a new user to start.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {sortedUsers.map((user) => (
          <div
          key={user.id}
          className={`bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
            user.id === localStorage.getItem('java_quizUserId') ? 'border-blue-500' : ''
          }`}
          >
          <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
          <div className="flex items-center space-x-3">
          <div className="h-10 w-10 flex items-center justify-center bg-blue-500 text-white text-xl font-bold rounded">
          {user.user?.[0] || '?'}
          </div>
          <div>
          <h3 className="font-medium text-lg">{user.user}</h3>
          <p className="text-sm text-gray-500" suppressHydrationWarning>
          {formatDate(user.date)}
          </p>
          </div>
          </div>
          </div>
          <div className="p-4 grid grid-cols-3 gap-4 text-center">
          <div>
          <div className="text-lg font-semibold">{user.score}</div>
          <div className="text-sm text-gray-500">Score</div>
          </div>
          <div>
          <div className="text-lg font-semibold">{user.totalQuestions}</div>
          <div className="text-sm text-gray-500">Questions</div>
          </div>
          <div>
          <div className="text-lg font-semibold capitalize">{user.type}</div>
          <div className="text-sm text-gray-500">Level</div>
          </div>
          </div>
          </div>
        ))}
        </div>
      )}
      </>
    )}
    </div>
  );
}
