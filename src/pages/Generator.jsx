
import React, { useEffect, useState } from "react";
import FrontPage from "../Components/FrontPage";

const Generator = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("frontPageData");

    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-gray-700">
          No data found. Please go back and fill the form first.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 print:bg-white print:p-0">

      {/* Print Guide - Hidden when printing */}
      <div className="print:hidden mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4 max-w-[210mm] w-[90%]">
        <h2 className="font-semibold text-gray-800 mb-2">
          How to print your front page
        </h2>

        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium text-gray-800">Computer:</span>{" "}
            Press <kbd className="bg-gray-100 border rounded px-1.5 py-0.5 text-xs">CTRL</kbd>{" "}
            + <kbd className="bg-gray-100 border rounded px-1.5 py-0.5 text-xs">P</kbd>{" "}
            to open the print dialog.
          </p>

          <p>
            <span className="font-medium text-gray-800">Mobile:</span>{" "}
            Tap the three dots (⋮) in your browser menu and look for{" "}
            <span className="font-medium text-gray-800">Print</span>.
          </p>
        </div>
      </div>

      {/* Printable Front Page */}
      <div className="shadow-xl print:shadow-none">
        <FrontPage preview={false} data={data} />
      </div>

    </div>
  );
};

export default Generator;
