import React from "react";

export default function SearchBar() {
    return (
        <div className="relative w-full mt-1">
            <input
                type="text"
                placeholder="Search twitter"
                className="w-full h-10 pl-10 pr-4 rounded-full  focus:outline-none focus:border-primary"
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 absolute left-3 top-2.5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 100 10 5 5 0 000-10zM1 8a7 7 0 1114 0A7 7 0 011 8z"
                    clipRule="evenodd"
                />
                <path
                    fillRule="evenodd"
                    d="M14.707 12.293a1 1 0 00-1.414-1.414L10 14.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                    clipRule="evenodd"
                />
            </svg> */}
        </div>
    );
};

