// import React, { useState } from "react";

// interface TreeNode {
//   name: string;
//   type: "blob" | "tree";
//   children?: TreeNode[];
// }

// interface TreeViewProps {
//   data: TreeNode[];
// }

// const TreeNodeComponent: React.FC<{ node: TreeNode }> = ({ node }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="pl-4">
//       <div
//         className="cursor-pointer flex items-center gap-2"
//         onClick={() => node.type === "tree" && setIsOpen(!isOpen)}
//       >
//         {node.type === "tree" ? (isOpen ? "📂" : "📁") : "📄"}
//         {node.name}
//       </div>
//       {isOpen && node.children && (
//         <div className="ml-4 border-l pl-2">
//           {node.children.map((child, index) => (
//             <TreeNodeComponent key={index} node={child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const buildTree = (data: any[]): TreeNode[] => {
//   const root: TreeNode = { name: "root", type: "tree", children: [] };
//   const nodesMap: { [key: string]: TreeNode } = { "": root };

//   data.forEach((item) => {
//     const parts = item.path.split("/");
//     const fileName = parts.pop()!;
//     const dirPath = parts.join("/");
    
//     if (!nodesMap[dirPath]) {
//       nodesMap[dirPath] = { name: dirPath, type: "tree", children: [] };
//     }

//     const newNode: TreeNode = {
//       name: fileName,
//       type: item.type,
//       children: item.type === "tree" ? [] : undefined,
//     };

//     nodesMap[dirPath].children?.push(newNode);
//     if (item.type === "tree") {
//       nodesMap[item.path] = newNode;
//     }
//   });

//   // Sort each folder to ensure folders come before files
//   const sortTree = (node: TreeNode) => {
//     if (node.children) {
//       node.children.sort((a, b) => (a.type === "tree" && b.type !== "tree" ? -1 : 1));
//       node.children.forEach(sortTree);
//     }
//   };

//   sortTree(root);
//   return root.children || [];
// };

// const TreeView: React.FC<TreeViewProps> = ({ data }) => {
//   const treeData = buildTree(data);
//   return (
//     <>
    
//     <h2 className="text-2xl font-semibold text-center">Github Tree</h2>
//     <div className="mt-10 p-4 bg-gray-100 rounded-lg">
//       {treeData.map((node, index) => (
//         <TreeNodeComponent key={index} node={node} />
//       ))}
//     </div>
//     </>
//   );
// };

// export default TreeView;


import React, { useState } from "react";

interface TreeNode {
  name: string;
  type: "blob" | "tree";
  children?: TreeNode[];
}

interface TreeViewProps {
  data: TreeNode[];
}

const TreeNodeComponent: React.FC<{ node: TreeNode }> = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pl-4">
      <div
        className="cursor-pointer flex items-center gap-2 py-1 hover:bg-gray-100 rounded"
        onClick={() => node.type === "tree" && setIsOpen(!isOpen)}
      >
        {node.type === "tree" ? (isOpen ? "📂" : "📁") : "📄"}
        {node.name}
      </div>
      {isOpen && node.children && (
        <div className="ml-4 border-l border-gray-300 pl-2">
          {node.children.map((child, index) => (
            <TreeNodeComponent key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const buildTree = (data: any[]): TreeNode[] => {
  const root: TreeNode = { name: "root", type: "tree", children: [] };
  const nodesMap: { [key: string]: TreeNode } = { "": root };

  data.forEach((item) => {
    const parts = item.path.split("/");
    const fileName = parts.pop()!;
    const dirPath = parts.join("/");
    
    if (!nodesMap[dirPath]) {
      nodesMap[dirPath] = { name: dirPath, type: "tree", children: [] };
    }

    const newNode: TreeNode = {
      name: fileName,
      type: item.type,
      children: item.type === "tree" ? [] : undefined,
    };

    nodesMap[dirPath].children?.push(newNode);
    if (item.type === "tree") {
      nodesMap[item.path] = newNode;
    }
  });

  // Sort each folder to ensure folders come before files
  const sortTree = (node: TreeNode) => {
    if (node.children) {
      node.children.sort((a, b) => (a.type === "tree" && b.type !== "tree" ? -1 : 1));
      node.children.forEach(sortTree);
    }
  };

  sortTree(root);
  return root.children || [];
};

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  const treeData = buildTree(data);
  return (
    <div className="bg-gradient-from-blue-300 bg-gradient-via-blue-400 bg-gradient-to-purple-500 min-h-screen p-6">
      {/* Header Card */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-2xl font-semibold text-center">Github Tree</h2>
      </div>
      
      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Form would go here - commented out since it's not in the original code */}
        {/* 
        <div className="mb-6">
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter repository URL" 
          />
          <button 
            className="mt-4 w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-medium py-3 px-4 rounded hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </div>
        */}
        
        {/* Results Area */}
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner">
          {treeData.map((node, index) => (
            <TreeNodeComponent key={index} node={node} />
          ))}
        </div>
        
        {/* Error Handling - Hidden by default */}
        <div className="hidden mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
          Error message goes here
        </div>
      </div>
    </div>
  );
};

export default TreeView;