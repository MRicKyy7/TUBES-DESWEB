import React, { useState } from 'react';
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import { Link } from "react-router-dom";
import { RiShoppingBasket2Fill } from "react-icons/ri";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Python Entry Level",
      category: "beginner",
      price: 50000,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e97c609c-cc65-47a2-a7bd-e6c2c566b321?apiKey=23fb824677004c86b8742e2f02c99782&",
      students: 5957,
      duration: "01h 49m",
    },
    {
      id: 2,
      title: "JavaScript Entry Level",
      category: "beginner",
      price: 50000,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f70c83a9-391a-4808-91da-85555aaf47f4?apiKey=23fb824677004c86b8742e2f02c99782&",
      students: 5957,
      duration: "01h 49m",
    },
    {
      id: 3,
      title: "HTML Dasar",
      category: "intermediate",
      price: 50000,
      image: Html,
      students: 5957,
      duration: "01h 49m",
    },
    {
      id: 4,
      title: "CSS Dasar",
      category: "intermediate",
      price: 50000,
      image: Css,
      students: 5957,
      duration: "01h 49m",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    if (selectedCategory === 'all' || course.category === selectedCategory) {
      return course.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'in category:', selectedCategory);
    console.log('Filtered Courses:', filteredCourses);
    // Add logic for further handling, e.g., navigation to search results page
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">Available Courses</div>
      <form onSubmit={handleSearch} className="mb-8 relative">
        <div className="flex items-center">
          <input
            type="search"
            id="search-dropdown"
            className="flex-grow p-2.5 mr-2 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            id="dropdown-button"
            className="flex-shrink-0 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            onClick={toggleDropdown}
          >
            {selectedCategory === 'all' ? 'All categories' : selectedCategory}
            <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejun="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          {isDropdownOpen && (
            <div id="dropdown" className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                  <button type="button" className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setSelectedCategory('all')}>
                    All
                  </button>
                </li>
                <li>
                  <button type="button" className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setSelectedCategory('beginner')}>
                    Beginner
                  </button>
                </li>
                <li>
                  <button type="button" className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setSelectedCategory('intermediate')}>
                    Intermediate
                  </button>
                </li>
              </ul>
            </div>
          )}
          <button
            type="submit"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <div key={course.id} className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md mb-8">
            <img
              loading="lazy"
              src={course.image}
              className="object-cover object-center justify h-32 w-32 md:h-60 md:w-60"
              alt={course.title}
            />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <div className="text-slate-700 text-xl font-semibold leading-7">{course.title}</div>
                <p className="mt-3 text-slate-600">{course.students} Students</p>
                <p className="text-slate-600">{course.duration}</p>
              </div>
              <div className="flex items-end justify-between mt-6">
                <div className="text-slate-600 text-xl font-semibold">{`Rp.${course.price}`}</div>
                <Link as={Link} to={`/${course.title.toLowerCase().replace(/\s+/g, '')}`}>
                  <button className="text-blue-500 hover:text-blue-700">
                    <RiShoppingBasket2Fill className="w-6 h-6" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
