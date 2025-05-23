// "use client";

// import { useState } from "react";
// import Cardetail  from './carddetail';

// export default function RepoTreeFetcher() {
//   const [file, setFile] = useState(null);
//   const [summary, setSummary] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const uploadFile = async () => {
//     if (!file) {
//       setError("Please select a file.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setSummary(null);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("http://127.0.0.1:5000/api/analyze/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setSummary(data);
//         console.log(summary.entities.dates);
//       } else {
//         setError(data.error || "Failed to process file.");
//       }
//     } catch(e)
//     {

//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Upload and Analyze File</h1>
//       <input
//         type="file"
//         className="border rounded w-full p-2 mb-4"
//         onChange={handleFileChange}
//       />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={uploadFile}
//         disabled={loading}
//       >
//         {loading ? "Submmited" : "Submit"}
//       </button>
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//       {summary !== null && (
//         <>
        
//         <h2 className="text-2xl font-semibold text-center mt-5 mb-10">Extracted Information</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
//         <div className="bg-white p-4 rounded shadow-md">
          
//           {summary.entities.dates.length !=0 && <>
//           <h3 className="text-lg font-semibold mt-4">Dates</h3>
//           <pre className="bg-gray-100 p-4 rounded text-sm flex flex-wrap">{
//               summary.entities.dates.map((keyword, index) => (
//                 <span key={index} className="bg-gray-200 p-1 rounded-md mx-2 my-2">{keyword}</span>
//               ))
//             }</pre></>}
//             {summary.entities.locations.length !=0 && <>
//           <h3 className="text-lg font-semibold mt-4">Location</h3>
//           <pre className="bg-gray-100 p-4 rounded text-sm flex flex-wrap">{
//               summary.entities.locations.map((keyword, index) => (
//                 <span key={index} className="bg-gray-200 p-1 rounded-md mx-2 my-2">{keyword}</span>
//               ))
//             }</pre></>}
//             {summary.entities.organizations.length !=0 && <>
//           <h3 className="text-lg font-semibold mt-4">Organizations</h3>
//           <pre className="bg-gray-100 p-4 rounded text-sm flex flex-wrap">{
//               summary.entities.organizations.map((keyword, index) => (
//                 <span key={index} className="bg-gray-200 p-1 rounded-md mx-2 my-2">{keyword}</span>
//               ))
//             }</pre></>}
//           <h3 className="text-lg font-semibold mt-4">Keywords</h3>
//           <pre className="bg-gray-100 p-4 rounded text-sm flex flex-wrap">{
//               summary.keywords.map((keyword, index) => (
//                 <span key={index} className="bg-gray-200 p-1 rounded-md mx-2 my-2">{keyword}</span>
//               ))
//             }</pre>
//         </div>
//         <div className="bg-white p-4 rounded shadow-md">
//           <h3 className="text-lg font-semibold  mt-4"> Main Points</h3>
//           <pre className="bg-gray-100 p-4 rounded flex flex-wrap text-sm">
//           <span className="bg-gray-200 p-1 rounded-md  text-wrap">{summary.main_points}</span>
//           </pre>
//           <h3 className="text-lg font-semibold mt-4">Summary</h3>
//           <pre className="bg-gray-100 p-4 rounded text-sm">
//           <span className="bg-gray-200 p-1 rounded-md text-wrap">{summary.summary}</span></pre>
//         </div>
//       </div>
//       </>
//       )}
//     </div>
    
//   );
// }


"use client";

import { useState } from "react";
import Cardetail from './carddetail';

export default function RepoTreeFetcher() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      setError("Please select a file.");
      return;
    }

    setLoading(true);
    setError("");
    setSummary(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/analyze/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setSummary(data);
        console.log(summary?.entities?.dates);
      } else {
        setError(data.error || "Failed to process file.");
      }
    } catch (e) {
      setError("An error occurred during file upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 py-8">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Container */}
        <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl mb-8">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6">
            <h1 className="text-2xl font-bold text-gray-800">Upload and Analyze File</h1>
          </div>
        </div>
        
        {/* Upload Form Container */}
        <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl mb-8">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-grow">
                <input
                  type="file"
                  className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-xl w-full p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                  onChange={handleFileChange}
                />
              </div>
              <button
                className={`px-6 py-4 rounded-xl text-white font-medium transition-all duration-200 ${
                  loading
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 shadow-lg hover:shadow-xl hover:translate-y-1"
                }`}
                onClick={uploadFile}
                disabled={loading}
              >
                {loading ? "Processing..." : "Submit"}
              </button>
            </div>
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-500 rounded-xl">
                {error}
              </div>
            )}
          </div>
        </div>

        {summary !== null && (
          <>
            {/* Results Header */}
            <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl mb-8">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                  Extracted Information
                </h2>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Entities Card */}
              <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl">
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 h-full">
                  {summary.entities.dates.length !== 0 && (
                    <>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Dates</h3>
                        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                          <div className="flex flex-wrap gap-2">
                            {summary.entities.dates.map((keyword, index) => (
                              <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {summary.entities.locations.length !== 0 && (
                    <>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Locations</h3>
                        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                          <div className="flex flex-wrap gap-2">
                            {summary.entities.locations.map((keyword, index) => (
                              <span
                                key={index}
                                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {summary.entities.organizations.length !== 0 && (
                    <>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Organizations</h3>
                        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                          <div className="flex flex-wrap gap-2">
                            {summary.entities.organizations.map((keyword, index) => (
                              <span
                                key={index}
                                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Keywords</h3>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                      <div className="flex flex-wrap gap-2">
                        {summary.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Card */}
              <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl">
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Main Points</h3>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                      <p className="text-gray-700 whitespace-pre-wrap">{summary.main_points}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                      <p className="text-gray-700 whitespace-pre-wrap">{summary.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}