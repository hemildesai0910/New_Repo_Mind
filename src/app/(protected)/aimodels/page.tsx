// "use client";

// import { useState } from "react";
// import Tree_view from "./tree_view";

// export default function RepoTreeFetcher() {
//   const [repoUrl, setRepoUrl] = useState("");
//   const [treeData, setTreeData] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchRepoTree = async () => {
//     setLoading(true);
//     setError("");
//     setTreeData(null);

//     try {
//       const response = await fetch("http://127.0.0.1:4000/get-repo-tree", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ repo_url: repoUrl }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setTreeData(data);
//       } else {
//         setError(data.error || "Failed to fetch repository tree.");
//       }
//     } catch (err) {
//       setError("Error fetching data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">GitHub Repo Tree Viewer</h1>
//       <input
//         type="text"
//         className="border rounded w-full p-2 mb-4"
//         placeholder="Enter GitHub Repo URL (e.g., https://github.com/user/repo)"
//         value={repoUrl}
//         onChange={(e) => setRepoUrl(e.target.value)}
//       />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={fetchRepoTree}
//         disabled={loading}
//       >
//         {loading ? "Loading..." : "Fetch Repo Tree"}
//       </button>
//       {treeData!==null &&  <Tree_view data={treeData.tree}/>}
//       {/* {error && <p className="text-red-500 mt-4">{error}</p>} */}
      
//       {/* {treeData && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-2">Repository: {treeData.repo} ({treeData.branch} branch)</h2>
//           <pre className="bg-gray-100 p-4 rounded text-sm">{JSON.stringify(treeData.tree, null, 2)}</pre>
//         </div>
//       )} */}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Tree_view from "./tree_view";

export default function RepoTreeFetcher() {
  const [repoUrl, setRepoUrl] = useState("");
  const [treeData, setTreeData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepoTree = async () => {
    setLoading(true);
    setError("");
    setTreeData(null);

    try {
      const response = await fetch("https://tree-model-1-e44n.onrender.com/get-repo-tree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repo_url: repoUrl }),
      });

      const data = await response.json();
      if (response.ok) {
        setTreeData(data);
      } else {
        setError(data.error || "Failed to fetch repository tree.");
      }
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 min-h-screen p-4">
      <div className="relative p-0.5 rounded-3xl overflow-hidden bg-gradient-to-r from-white/40 to-white/20 shadow-xl transition-all duration-200 max-w-2xl mx-auto">
        <div className="border-0 bg-white/90 backdrop-blur-sm rounded-3xl p-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">GitHub Repo Tree Viewer</h1>
          
          <div className="border-b border-gray-200/50 my-4"></div>
          
          <input
            type="text"
            className="border border-gray-200 bg-white/80 rounded-xl w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter GitHub Repo URL (e.g., https://github.com/user/repo)"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
          />
          
          <button
            className="w-full bg-gradient-to-r from-blue-400 to-purple-500 border-0 text-white hover:from-blue-500 hover:to-purple-600 transition-all duration-200 py-3 rounded-xl font-medium disabled:opacity-70 disabled:cursor-not-allowed"
            onClick={fetchRepoTree}
            disabled={loading}
          >
            {loading ? "Loading..." : "Fetch Repo Tree"}
          </button>
          
          {error && (
            <div className="mt-4 p-3 bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl text-red-600">
              {error}
            </div>
          )}
          
          {treeData !== null && (
            <div className="mt-6 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-md">
              <Tree_view data={treeData.tree} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}