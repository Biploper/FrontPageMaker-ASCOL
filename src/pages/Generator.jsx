import React, { useEffect, useState } from "react";
import logo2 from "../assets/logo.png";
import dividerLines from "../assets/divider.png";
import FrontPage from "../Components/FrontPage";

const Generator = () => {
  const [data, setData] = useState(null);

  // Fetch saved form data from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("frontPageData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  // Function to dynamically get current BS year
  const getCurrentBSYear = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return month >= 4 ? year + 57 : year + 56;
  };

  if (!data) {
    return (
      <p className="text-center mt-20 text-gray-700">
        No data found. Please go back and fill the form first.
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div
        className="bg-white text-black font-serif flex justify-center items-center flex-col"
        style={{
          width: "210mm",
          height: "297mm",
          padding: "20mm",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Board Info */}
        <div className="text-center mb-10" >
          <p className="text-[15px] ">
            <span className="block mb-1.25 ">Government of Nepal</span>
            <span
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "20px",
                marginTop: "5px",
              }}
            >
             TRIBHUVAN UNIVERSITY
            </span>
            <span style={{ display: "block", marginTop: "5px" }}>GRADE XII</span>
          </p>
        </div>

        {/* Logo */}
        <img
          src={logo2}
          alt="School Logo"
          style={{ width: "175px", height: "125px"}
          }
          className="mb-10"

        />

        {/* School Name */}
        <p
          style={{
            fontSize: "14px",
            textAlign: "center",
            
          }}
          className="mb-10"
        >
          <span style={{ display: "block", fontWeight: "bold", fontSize: "20px" }}>
            KATHMANDU MODEL SECONDARY SCHOOL
          </span>
          <span
            style={{
              display: "block",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            Bagbazar, Kathmandu
          </span>
        </p>

        {/* Project Title */}
        <p style={{ fontSize: "15px" }} className="mt-0">A Project Work on</p>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "2px",
            textAlign: "center",
          }}
        >
          {data.projectName || "PROJECT TITLE"}
        </h1>

        {/* Divider */}
        <img
          src={dividerLines}
          alt="Divider"
          style={{ height: "150px "}}
          className="m-5"
        />

        {/* Description */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "160mm",
            fontSize: "14px",
            marginBottom: "10mm",
          }}
        >
          <p>
            A project report submitted for the partial fulfillment of final examination
          </p>
          <p>{data.subject || "Subject Name"}</p>
          <p>
            {data.className || "Grade XII"}
            {data.section ? ` - ${data.section}` : ""}
          </p>
          <p>{getCurrentBSYear()}</p>
        </div>

        {/* Submitted By / Submitted To */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          {/* Submitted By */}
          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "bold", marginBottom: "4px" }}>Submitted By</p>
            {data.memberDetails?.length > 0 ? (
              data.memberDetails.map((member, idx) => (
                <p key={idx}>
                  {member.name || "Student Name"} ({member.symbol || "XXXXXX"})
                </p>
              ))
            ) : (
              <p>Student Name</p>
            )}
          </div>

          {/* Submitted To */}
          <div style={{ textAlign: "right" }}>
            <p style={{ fontWeight: "bold", marginBottom: "4px" }}>Submitted To</p>
            <p>{data.submittedTo || "Department Name"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
