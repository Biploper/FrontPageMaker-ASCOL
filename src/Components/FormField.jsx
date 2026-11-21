import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormField = ({ formData, setFormData, handleGenerate }) => {
  // helper to update simple fields
  const updateField = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Form submit handler with validation
  const onSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
  !formData.projectName ||
  !formData.subject ||
  !formData.courseName ||
  !formData.sem ||
  !formData.section ||
  !formData.submittedTo
) {
  toast.error("Please fill all project and academic details!", {
    position: "top-center",
  });
  return;
}

    for (let i = 0; i < formData.memberDetails.length; i++) {
      const member = formData.memberDetails[i];
      if (!member.name || !member.symbol) {
        toast.error(`Please fill all details for Member ${i + 1}`, {
          position: "top-center",
        });
        return;
      }
    }

    // Save to localStorage
    localStorage.setItem("frontPageData", JSON.stringify(formData));

    // Success toast
    toast.success("Front page data saved! Redirecting...", {
      position: "top-center",
    });

    handleGenerate(); // call parent handler
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10 h-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Edit Front Page
          </h2>

          

         
{/* Project and Academic Details */}
<div className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-800">
    Project Details
  </h2>
  <p className="text-sm text-gray-500 mt-1">
    Enter your project and academic information to generate your front page.
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

  {/* Project Title */}
  <div className="md:col-span-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Project Title
    </label>
    <input
      type="text"
      value={formData.projectName}
      onChange={(e) => updateField("projectName", e.target.value)}
      placeholder="e.g. Library Management System"
      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  {/* Subject */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Subject
    </label>
    <input
      type="text"
      value={formData.subject}
      onChange={(e) => updateField("subject", e.target.value)}
      placeholder="e.g. Computer Science"
      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  {/* Course Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Course Name
    </label>
    <input
      type="text"
      value={formData.courseName}
      onChange={(e) => updateField("courseName", e.target.value)}
      placeholder="e.g. Bachelor of Information Technology"
      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  {/* Semester */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Semester
    </label>
    <input
      type="text"
      value={formData.sem}
      onChange={(e) => updateField("sem", e.target.value)}
      placeholder="e.g. First Semester"
      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  {/* Section */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Section
    </label>
    <input
      type="text"
      value={formData.section}
      onChange={(e) => updateField("section", e.target.value)}
      placeholder="e.g. A"
      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  {/* Faculty Name */}
  <div className="md:col-span-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Faculty Name
    </label>
    <input
      type="text"
      value={formData.submittedTo}
      onChange={(e) => updateField("submittedTo", e.target.value)}
      placeholder="Enter the name of your faculty teacher"
      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

</div>


          {/* Number of Members */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Members
            </label>
            <select
              value={formData.members}
              onChange={(e) => {
                const count = Number(e.target.value);
                setFormData({
                  ...formData,
                  members: count,
                  memberDetails: Array.from({ length: count }, (_, i) =>
                    formData.memberDetails[i] || { name: "", symbol: "" }
                  ),
                });
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <option key={num} value={num}>
                  {num} Member{num > 1 && "s"}
                </option>
              ))}
            </select>
          </div>

          {/* Members Section */}
          <div className="space-y-5">
            {formData.memberDetails.map((member, index) => (
              <div key={index} className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Member {index + 1}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={member.name}
                    onChange={(e) => {
                      const updated = [...formData.memberDetails];
                      updated[index].name = e.target.value;
                      setFormData({ ...formData, memberDetails: updated });
                    }}
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />

                  <input
                    type="text"
                    placeholder="Symbol Number"
                    value={member.symbol}
                    onChange={(e) => {
                      const updated = [...formData.memberDetails];
                      updated[index].symbol = e.target.value;
                      setFormData({ ...formData, memberDetails: updated });
                    }}
                    className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-black text-white py-3 font-medium hover:bg-gray-900 transition"
          >
            Generate Front Page
          </button>
        </div>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default FormField;
