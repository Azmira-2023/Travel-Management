import React from 'react'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl">Page Not Found</p>
            <a href="/" className="text-blue-400 hover:underline mt-4 inline-block">
              Go back to Home
            </a>
          </div>
        </div>
  )
}

export default NotFound