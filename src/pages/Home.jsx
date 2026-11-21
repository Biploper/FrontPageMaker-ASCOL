import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Components/FormField";
import FrontPage from "../Components/FrontPage";

const Home = () => {

 const [formData, setFormData] = useState({
  projectName: "",
  subject: "",
  courseName: "",
  sem: "",
  section: "",
  submittedTo: "",
  members: 1,
  memberDetails: [{ name: "", symbol: "" }],
});
    const navigate = useNavigate();

  const handleGenerate = () => {
    // Save formData in localStorage
    localStorage.setItem("frontPageData", JSON.stringify(formData));

    // Navigate to generator page
    navigate("/generate");
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center flex-col items-center xl:flex-row gap-8">

          {/* LEFT — FORM */}
          <div className="rounded-xl py-10 overflow-x-auto flex justify-center items-center">
            <FormField
              formData={formData}
              setFormData={setFormData}
              handleGenerate={handleGenerate}
            />
          </div>

          {/* RIGHT — PREVIEW */}
          <div className="flex justify-center items-center">
            <FrontPage
              preview
              data={formData}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
