import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div className=''>
          <h1 className='text-3xl font-semibold text text-center my-7'>About Varshini's Blog</h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            {/* <p>
              Varshini's Blog is a blog that i have created while learning web development I have used both frontend and backened to create it
            </p> */}
          <p>Welcome to Varshini's blog, your go-to resource for comprehensive documentation on installing and using various web frameworks. This blog is designed to help developers of all levels navigate the complexities of modern web development with ease.</p>
            <p>
            The primary goal of this blog is to provide clear, concise, and practical documentation for a wide range of web frameworks. Whether you are a beginner looking to get started or an experienced developer seeking advanced techniques, you'll find valuable resources here to enhance your development skills.
            </p>

            {/* <p>
              Varshini's Blog is a blog that i created while learning web development I have used both frontend and backened to create it
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
