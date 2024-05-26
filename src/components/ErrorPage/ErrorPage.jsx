import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-8 mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
