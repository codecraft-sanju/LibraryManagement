import React, { useState } from 'react';
import library1 from '../assets/library1.jpg';
import library2 from '../assets/library2.jpg';
import library3 from '../assets/library3.jpg';
import library4 from '../assets/library4.jpg';
import library5 from '../assets/library5.jpg';
import library6 from '../assets/library6.jpg';
import student from '../assets/student.jpg';
import student2 from '../assets/student2.jpg';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
          About Our Library
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Welcome to our library! We provide a diverse collection of books and
          resources, from fiction to reference materials, to support your
          reading and research needs.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <img
            src={library1}
            alt="Library"
            className="object-cover w-full h-64 rounded-lg shadow-md"
          />
          <img
            src={library2}
            alt="Library"
            className="object-cover w-full h-64 rounded-lg shadow-md"
          />
          <img
            src={library3}
            alt="Library"
            className="object-cover w-full h-64 rounded-lg shadow-md"
          />
          <img
            src={library4}
            alt="Library"
            className="object-cover w-full h-64 rounded-lg shadow-md"
          />
          <img
            src={library5}
            alt="Library"
            className="object-cover w-full h-64 rounded-lg shadow-md"
          />
          <img
            src={library6}
            alt="Library"
            className="object-cover w-full h-64 rounded-lg shadow-md"
          />
          {showMore && (
            <>
              <img
                src={student}
                alt="Student"
                className="object-cover w-full h-64 rounded-lg shadow-md"
              />
              <img
                src={student2}//win image
                alt="Student"
                className="object-cover w-full h-64 rounded-lg shadow-md"
              />
            </>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 text-white transition bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
