import { motion } from "framer-motion";

const Button = ({ Keys, handleKeyPress }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-3">
      {Keys.map((key, index) => {
        const isOperator = ["+", "-", "×", "÷"].includes(key);

        // Assign specific styles
        let baseStyles = "py-4 text-lg font-semibold rounded-lg transition cursor-pointer";
        let bgStyles = "";

        if (key === "C") {
          bgStyles = "bg-red-500 text-white hover:bg-red-600";
        } else if (key === "=") {
          bgStyles = "bg-green-500 text-white hover:bg-green-600 col-span-2";
        } else if (key === "←") {
          bgStyles = "bg-yellow-500 text-white hover:bg-yellow-600";
        } else if (isOperator) {
          bgStyles = "bg-blue-500 text-white hover:bg-blue-600";
        } else {
          bgStyles =
            "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600";
        }

        // Make "+" span two rows tall
        const extraClass = key === "+" ? "row-span-2 h-full" : "";

        return (
          <motion.button
            whileTap={{ scale: 0.9 }}
            key={index}
            onClick={() => handleKeyPress(key)}
            className={`${baseStyles} ${bgStyles} ${extraClass}`}
          >
            {key}
          </motion.button>
        );
      })}
    </div>
  );
};

export default Button;
