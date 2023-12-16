import React from "react";

const DateInput = ({ onChange }: { onChange: any }) => {
  return (
    <div className="relative h-[48px] pl-3 pr-4 py-2 rounded-xl bg-[#F5FAFD] flex flex-row items-center w-full">
      {/* <div className="pointer-events-none">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#C9CBD2]"
        >
          <path
            d="M16.0588 15.1987C16.5827 15.3733 17.149 15.0902 17.3237 14.5662C17.4983 14.0423 17.2152 13.476 16.6912 13.3013L16.0588 15.1987ZM13 13.125H12C12 13.5554 12.2754 13.9376 12.6838 14.0737L13 13.125ZM14 8.42087C14 7.86858 13.5523 7.42087 13 7.42087C12.4477 7.42087 12 7.86858 12 8.42087H14ZM16.6912 13.3013L13.3162 12.1763L12.6838 14.0737L16.0588 15.1987L16.6912 13.3013ZM14 13.125V8.42087H12V13.125H14ZM21 12C21 16.4183 17.4183 20 13 20V22C18.5228 22 23 17.5228 23 12H21ZM13 20C8.58172 20 5 16.4183 5 12H3C3 17.5228 7.47715 22 13 22V20ZM5 12C5 7.58172 8.58172 4 13 4V2C7.47715 2 3 6.47715 3 12H5ZM13 4C17.4183 4 21 7.58172 21 12H23C23 6.47715 18.5228 2 13 2V4Z"
            fill="black"
          />
        </svg>
      </div> */}
      <input
        type="date"
        onChange={(e) => onChange(e.target.value)}
        className="border-none pl-3 h-full focus:outline-none w-full bg-transparent placeholder-text-[#C9CBD2] font-[Montserrat]"
        placeholder="ДД.ММ.ГГГГ"
      />
    </div>
  );
};

export default DateInput;
