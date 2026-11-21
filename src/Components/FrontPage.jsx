
import logo from "../assets/logo.png";
import dividerLines from "../assets/divider.png";
import { ArrowUpRight } from "lucide-react";


const FrontPage = ({ preview = true, data }) => {
  const page = (
    <div
      className="
        bg-white text-black font-serif
        w-[210mm] h-[297mm]
        box-border
        px-[30mm] py-[24mm]
        flex flex-col items-center
        text-center
        overflow-hidden
        mt-20
      "
    >
      {/* University Name */}
      <p className="text-[18px] font-bold leading-snug mb-3">
        TRIBHUVAN UNIVERSITY
      </p>

      {/* College Logo */}
      <img
        src={logo}
        alt="College Logo"
        className="w-32 h-32 object-contain my-2"
      />

      {/* College Information */}
      <div className="text-sm my-4 leading-relaxed">
        <p>Department of {data.courseName}</p>
        <p className="font-bold text-[18px]">
          AMRIT SCIENCE CAMPUS
        </p>
        <p className="uppercase mt-1">
          Thamel, Kathmandu
        </p>
      </div>

      {/* Project Heading */}
      <p className="mt-6 text-sm">A Lab Report on</p>

      {/* Project Title */}
      <h1 className="text-xl mt-2 font-bold tracking-normal">
        {data?.projectName || "PROJECT TITLE"}
      </h1>

      {/* Divider */}
      <img
        src={dividerLines}
        alt="Divider"
        className="w-24 my-4 opacity-80"
      />

      {/* Project Description */}
      <div className="space-y-1 text-sm max-w-md leading-relaxed">
        <p>
          In partial fulfillment of the requirement for the
          Bachelor’s Degree in Computer Science & Information
          Technology
        </p>
      </div>

      {/* Submitted By / Submitted To */}
      <div className="mt-10 w-full flex justify-between text-sm">
        {/* Submitted By */}
        <div className="text-left">
          <p className="font-semibold mb-2">Submitted By</p>

          {data?.memberDetails?.length > 0 ? (
            data.memberDetails.map((member, index) => (
              <p key={index} className="leading-relaxed">
                {member.name || "Student Name"} (
                {member.symbol || "XXXXXX"})
              </p>
            ))
          ) : (
            <p>Student Name</p>
          )}

          <p>{data.sem} Semester</p>
          <p>Section {data.section}</p>
        </div>

        {/* Submitted To */}
        <div className="text-right">
          <p className="font-semibold mb-2">Submitted To</p>
          <p>{data?.submittedTo || "Faculty Name"}</p>
          <p>{data?.subject || "Subject Name"}</p>
        </div>
      </div>
    </div>
  );

  // Actual A4 page for printing
  if (!preview) {
    return page;
  }

  // Scaled preview inside the application
  return (
    <div className="w-full flex flex-col items-center py-8">

      {/* A4 Preview */}
      <div className="origin-top scale-[0.9]">
        {page}
      </div>

      {/* Developer Credit - Hidden during printing */}
      <div className="print:hidden -mt-4 mb-8 w-[90%] max-w-md">
        <div className="
          group relative overflow-hidden
          flex items-center justify-between
          rounded-2xl border border-gray-200
          bg-white p-4
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl hover:shadow-gray-300/50
          hover:border-gray-300
        ">

          {/* Subtle hover background */}
          <div className="
            absolute inset-0 bg-gradient-to-r
            from-gray-50 via-white to-gray-100
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          " />

          {/* Credit Text */}
          <div className="relative z-10">
            
            <p className="mt-1 text-sm font-semibold text-gray-800">
              Source Code
            </p>
            <p className="text-xs text-gray-500">
              Explore the project on GitHub
            </p>
          </div>

          {/* GitHub Button */}
          
<a
  href="https://github.com/Biploper"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my GitHub profile"
  className="
    group relative inline-flex items-center gap-3
    overflow-hidden rounded-full
    bg-[#171717] px-5 py-3
    text-sm font-medium text-white
    ring-1 ring-white/10
    shadow-lg shadow-black/10
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:bg-[#242424]
    hover:shadow-xl hover:shadow-black/20
    hover:ring-white/20
    active:translate-y-0 active:scale-95
  "
>
  {/* Subtle shine effect */}
  <span
    className="
      absolute inset-0 -translate-x-full
      bg-gradient-to-r from-transparent
      via-white/10 to-transparent
      transition-transform duration-700
      group-hover:translate-x-full
    "
  />

  {/* GitHub Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    fill="currentColor"
    className="
      relative z-10 h-[21px] w-[21px]
      transition-transform duration-300
      group-hover:rotate-12 group-hover:scale-110
    "
  >
    <path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" />
  </svg>

  <span className="relative z-10 tracking-wide">
    View Source
  </span>

  <ArrowUpRight
    size={16}
    className="
      relative z-10 text-white/50
      transition-all duration-300
      group-hover:-translate-y-1
      group-hover:translate-x-1
      group-hover:text-white
    "
  />
</a>


        </div>
      </div>
    </div>
  );
};

export default FrontPage;
