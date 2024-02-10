export default function MoreIcon() {
    return (
        <div className=" flex items-center flex-col">

            <button className="relative z-10 group">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
                        fill="currentColor"
                    />
                    <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        fill="currentColor"
                    />
                    <path
                        d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <span className=" absolute -mt-1.5   h-8 w-8 ptn_b rounded-full hover:bg-showmore opacity-40 duration-700 ">
            </span>
        </div>
    );
}
