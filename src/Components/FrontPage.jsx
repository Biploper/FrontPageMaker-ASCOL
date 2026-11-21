
import logo from "../assets/logo.png";
import dividerLines from "../assets/divider.png";

const FrontPage = ({ preview = true, data }) => {
  return (
    <div className="w-2xl flex px-10 py-24 md:px-2 md:py-4 justify-center items-center">
      <div
        className="
          bg-white text-black font-serif 
          w-[297mm] h-[297mm] 
          -tracking-wide scale-[0.9] px-30 py-24
        "
      >
        {/* Body */}
        <div className="flex flex-col items-center text-center space-y-4">

          {/* Board Info */}
          <p className="text-[15px] leading-snug">
            
            <span className="block font-bold mt-1 text-[18px] tracki">
             TRIBHUVAN UNIVERSITY
            </span>
            
          </p>

          {/* Logo */}
          <img
            src={logo}
            alt="School Logo"
            className="w-32 h-32 object-contain my-2"
          />

          {/* School Name */}
          <p className="text-sm">
            <span className="block">Department of CSIT</span>
            <span className="font-bold block text-[18px]">
              AMRIT SCIENCE CAMPUS
            </span>
            <span className="uppercase block mt-1">
              Thamel, Kathmandu
            </span>
          </p>

          {/* Project Title */}
          <p className="mt-6 text-sm">A Project Work on</p>

          <h1 className="text-lg font-bold tracking-wide">
            {data?.projectName || "PROJECT TITLE"}
          </h1>

          {/* Divider */}
          <img
            src={dividerLines}
            alt="Divider"
            className="w-24 my-4 opacity-80"
          />

          {/* Description */}
          <div className="space-y-1 text-sm max-w-md">
            <p>
              A project report submitted for the partial fulfillment of final
              examination
            </p>
            <p>{data?.subject || "Subject Name"}</p>
            <p>
              Grade-{data?.className}
              {data?.section ? ` - ${data.section}` : ""}
            </p>
           <p>
  {(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    return month >= 4 ? year + 57 : year + 56;
  })()}
</p>
          
          </div>

          
                <div className="mt-10 w-full flex justify-between  text-sm ">

                {/* Submitted By */}
                <div className="text-left">
                  <p className="font-semibold mb-2">Submitted By</p>
                  {data?.memberDetails?.length > 0 ? (
                  data.memberDetails.map((member, index) => (
                    <p key={index}>
                    {member.name || "Student Name"} ({member.symbol || "XXXXXX"})
                    </p>
                  ))
                  ) : (
                  <p>Student Name</p>
                  )}
                </div>

                {/* Submitted To */}
            <div className="text-right">
              <p className="font-semibold mb-2">Submitted To</p>
              <p>{data?.submittedTo || "Department Name"}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FrontPage;
