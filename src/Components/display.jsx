import React from "react";

const Display = React.memo(({ displayVal }) => (
  <div
    className="mb-4 p-4 h-20 text-right text-2xl font-mono text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-xl shadow-inner overflow-x-auto"
  >
    {displayVal || "0"}
  </div>
));

export default Display;
