import React, { useState } from 'react';
import Register from './Register';
import Dashboard from './Dashboard';
import loginImage from '../assets/1.png'; // Import the image from assets folder

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (showRegister) {
        return <Register onBackToLogin={() => setShowRegister(false)} />;
    }

    if (isLoggedIn) {
        return <Dashboard 
            username={email} 
            onLogout={() => setIsLoggedIn(false)} 
        />;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'admin' && password === 'admin') {
            // Successful login
            setError('');
            setIsLoggedIn(true);
        } else {
            setError('Invalid credentials');
        }
    };

    return (        
        <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#01132b' }}>
            <div className="rounded-lg w-full max-w-4xl overflow-hidden" style={{ backgroundColor: '#02284d' }}>
                <div className="flex flex-col md:flex-row">
                    {/* Left side - Image */}
                    <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
                        <img 
                            src={loginImage} 
                            alt="Login" 
                            className="max-w-full h-auto rounded-lg"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/400x300?text=Login+Image';
                            }}
                        />
                    </div>
                    
                    {/* Right side - Login form */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-white">Login</h2>
                        
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                {error}
                            </div>
                        )}
                        
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label className="block text-gray-300 mb-2" htmlFor="email">
                                    Email / Username
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-300 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-300"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
                            >
                                Sign In
                            </button>
                        </form>
                        
                        <div className="mt-6 text-center">
                            <p className="text-gray-300">
                                Don't have an account?{' '}
                                <button
                                    onClick={() => setShowRegister(true)}
                                    className="text-blue-400 hover:text-blue-300 focus:outline-none"
                                >
                                    Register
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
