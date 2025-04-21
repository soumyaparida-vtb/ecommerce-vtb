import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-96 p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
          placeholder="Username" className="w-full p-2 mb-4 rounded bg-gray-700 text-white" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-700 text-white" />
        <button className="w-full p-2 bg-blue-600 hover:bg-blue-500 rounded">Log in</button>
      </div>
    </div>
  );
}