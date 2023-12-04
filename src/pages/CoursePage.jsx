import { useState } from "react";
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import { Link } from "react-router-dom";
import { RiShoppingBasket2Fill } from "react-icons/ri";

const CoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
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
            path: "detailPython",
            color: "hover:text-slate-400",
        },
        {
            id: 2,
            title: "JavaScript Intermediate",
            category: "intermediate",
            price: 50000,
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f70c83a9-391a-4808-91da-85555aaf47f4?apiKey=23fb824677004c86b8742e2f02c99782&",
            students: 5957,
            duration: "01h 49m",
            path: "detailJs",
            color: "hover:text-yellow-500",
        },
        {
            id: 3,
            title: "HTML Dasar",
            category: "beginner",
            price: 50000,
            image: Html,
            students: 5957,
            duration: "01h 49m",
            path: "detailHtml",
            color: "hover:text-orange-400",
        },
        {
            id: 4,
            title: "CSS Dasar",
            category: "beginner",
            price: 50000,
            image: Css,
            students: 5957,
            duration: "01h 49m",
            path: "detailCss",
            color: "hover:text-blue-400",
        },
        {

            id: 5,
            title: "JavaScript Dasar",
            category: "beginner",
            price: 50000,
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f70c83a9-391a-4808-91da-85555aaf47f4?apiKey=23fb824677004c86b8742e2f02c99782&",
            students: 5957,
            duration: "01h 49m",
            path: "detailJsBeginner",
            color: "hover:text-yellow-500",
        },
        {
            id: 6,
            title: "Python Intermediate",
            category: "intermediate",
            price: 50000,
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e97c609c-cc65-47a2-a7bd-e6c2c566b321?apiKey=23fb824677004c86b8742e2f02c99782&",
            students: 5957,
            duration: "01h 49m",
            path: "detailJsBeginner",
            color: "hover:text-slate-400",
        }
    ];

    const filteredCourses = courses.filter((course) => {
        if (
            selectedCategory === "all" ||
            course.category === selectedCategory
        ) {
            return course.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        }
        return false;
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(
            "Searching for:",
            searchTerm,
            "in category:",
            selectedCategory
        );
        console.log("Filtered Courses:", filteredCourses);
        // Add logic for further handling, e.g., navigation to search results page
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
      };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div id="courses" className="w-full bg-slate-300 pb-14">
            <div className="mb-4 text-4xl font-medium text-blue-950 font-poppins  pt-4 ml-4">
                Available Courses
            </div>
            <form onSubmit={handleSearch} className="mb-8 relative">
                <div className="flex items-center ml-4 ">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="flex-grow p-2.5 mr-2 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 "
                        placeholder="Search Courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required
                    />
                    <button
                        id="dropdown-button"
                        className="flex-shrink-0 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 mr-4 pt-2"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        {selectedCategory === "all"
                            ? "All categories"
                            : selectedCategory}
                        <svg
                            className="w-4 h-4 mx-auto "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div
                            id="dropdown"
                            onClick={closeDropdown}
                            className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdown-button"
                            >
                                <li>
                                    <button
                                        type="button"
                                        className="w-full px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() =>
                                            setSelectedCategory("all")
                                        }
                                    >
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() =>
                                            setSelectedCategory("intermediate")
                                        }
                                    >
                                        Intermediate
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="w-full px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={() =>
                                            setSelectedCategory("beginner")
                                        }
                                    >
                                        Beginner
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </form>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mr-10 ml-10">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md mb-8 border shadow-slate-300 hover:scale-105 duration-500"
                    >
                        <img
                            loading="lazy"
                            src={course.image}
                            className="object-cover mx-auto justify h-36 w-36 md:h-48 md:w-48 mt-6  "
                            alt={course.title}
                        />
                        <div className="flex flex-col justify-between flex-1 p-6">
                            <div>
                                <div className="text-slate-700 text-xl font-semibold leading-7">
                                    {course.title}
                                </div>
                                <p className="mt-3 text-slate-600">
                                    {course.students} Students
                                </p>
                                <p className="text-slate-600">
                                    {course.duration}
                                </p>
                            </div>
                            <div className="flex items-end justify-between mt-6 ">
                                <div className="text-slate-600 text-xl font-semibold">{`Rp.${course.price}`}</div>
                                <Link
                                    to={`/${course.path
                                        .toLowerCase()
                                        .replace(/\s+/g, "")}`}
                                >
                                    <button className="">
                                        <RiShoppingBasket2Fill className={`w-8 h-8 ${course.color}`}  />
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
