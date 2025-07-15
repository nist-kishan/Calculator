import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Display from "./Components/display";
import Button from "./Components/button";
import KeyPad from "./Components/KeyPad";

const App = () => {
  const [key, setKey] = useState("");

  const onClick = useCallback(
    (item) => {
      if (item === "C") {
        if (key !== "") setKey("");
      } else if (item === "=" || item === "Enter") {
        try {
          const result = eval(
            key.replace(/×/g, "*").replace(/÷/g, "/")
          ).toString();
          if (result !== key) setKey(result);
        } catch {
          setKey("Error");
        }
      } else if (item === "←" || item === "Backspace") {
        const trimmed = key.slice(0, -1);
        if (trimmed !== key) setKey(trimmed);
      } else {
        const validInput = item
          .replace("*", "×")
          .replace("/", "÷");
        const newVal = key + validInput;
        if (newVal !== key) setKey(newVal);
      }
    },
    [key]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      const validKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "+", "-", "*", "/", ".", "Enter", "Backspace", "c", "C"
      ];

      if (validKeys.includes(e.key)) {
        e.preventDefault();
        if (e.key === "c" || e.key === "C") onClick("C");
        else onClick(e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClick]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <Display displayVal={key} />
        <Button Keys={KeyPad()} handleKeyPress={onClick} />
      </motion.div>
    </div>
  );
};

export default App;
