import React from "react";

const Header = () => {
  return (
    <header className="container py-4 flex justify-between items-center">
      <div className="text-3xl md:text-5xl font-semibold uppercase">staem</div>
      <button className="bg-darkBlue flex py-2 px-6 rounded-full items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--fa-solid"
          width="18"
          height="18"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20z"
          ></path>
        </svg>
        <span className="ml-2 text-md md:text-lg">install</span>
      </button>
    </header>
  );
};

export default Header;
