
import React, { useEffect, useState } from "react";
import FrontPage from "../Components/FrontPage";
import { Printer, Monitor, Smartphone, ArrowUpRight } from "lucide-react";

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

      {/* Print Guide */}
      <div className="print:hidden mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-5 max-w-[210mm] w-[90%]">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

          {/* Instructions */}
          <div>
            <h2 className="font-semibold text-gray-900 text-base">
              Ready to print?
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your front page is ready. Print or save it as PDF.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Monitor size={16} className="text-gray-400" />
                <span>
                  <kbd className="bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5 text-xs font-medium">
                    Ctrl
                  </kbd>{" "}
                  +{" "}
                  <kbd className="bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5 text-xs font-medium">
                    P
                  </kbd>
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Smartphone size={16} className="text-gray-400" />
                <span>Browser menu → Print</span>
              </div>

            </div>
          </div>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="
              group relative inline-flex items-center justify-center gap-2
              overflow-hidden rounded-xl
              bg-gray-900 px-6 py-3
              text-sm font-semibold text-white
              shadow-md shadow-gray-900/10
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:bg-gray-700
              hover:shadow-xl hover:shadow-gray-900/20
              active:translate-y-0 active:scale-95
              whitespace-nowrap
            "
          >
            <span className="
              absolute inset-0 -translate-x-full
              bg-gradient-to-r from-transparent
              via-white/10 to-transparent
              transition-transform duration-700
              group-hover:translate-x-full
            " />

            <Printer
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:-rotate-12"
            />

            <span className="relative z-10">
              Print Front Page
            </span>

            <ArrowUpRight
              size={15}
              className="relative z-10 text-white/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            />
          </button>

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
