import React, { useState } from 'react';
import backgroundImage from '../assets/2.png'; // Make sure this path is correct

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call for registration
      console.log('Registering user:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#01132b' }}>
      {/* Main container */}
      <div className="rounded-lg w-full max-w-4xl overflow-hidden" style={{ backgroundColor: '#02284d' }}>
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="md:w-1/2 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#03588C' }}>
            <img src={backgroundImage} alt="Registration" className="w-full h-full object-cover" />
          </div>

          {/* Right side - Form */}
          <div className="p-8 md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-1">Create an account</h2>
            <p className="text-gray-300 mb-6">already have an account? <a href="/login" className="text-blue-400 hover:underline">log in</a>.</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="p-3 rounded w-1/2 text-white"
                  style={{ backgroundColor: '#09395f' }}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="p-3 rounded w-1/2 text-white"
                  style={{ backgroundColor: '#09395f' }}
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="p-3 rounded w-full text-white"
                  style={{ backgroundColor: '#09395f' }}
                />
              </div>

              <div className="relative mb-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  required
                  className="p-3 rounded w-full text-white pr-10"
                  style={{ backgroundColor: '#09395f' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  👁️
                </button>
              </div>

              <div className="text-right mb-4">
                <a href="/forgot-password" className="text-gray-300 text-sm">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full text-black py-3 rounded-lg font-bold mb-6"
                style={{ backgroundColor: '#d3d6db' }}
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Create account'}
              </button>

              <div className="text-center text-gray-300 mt-4">
                <p className="mb-4">Or Login with</p>
                <div className="flex justify-center space-x-16">
                  {/* Social login buttons */}
                  <button type="button" className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </button>

                  <button type="button" className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                      <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
                      <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
                      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
                    </svg>
                  </button>

                  <button type="button" className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
