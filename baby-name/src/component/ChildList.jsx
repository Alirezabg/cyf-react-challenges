import React from "react";
import jsonData from "../babyNamesData.json";
const ChildList = () => {
  return (
    <div>
      <p>Welcome</p>
      {jsonData
        .sort((a, b) => (a.last_nom > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((baby) => (
          <button
            className={
              baby.sex === "f"
                ? "p-3 mb-2 bg-success text-white"
                : "p-3 mb-2 bg-danger text-white"
            }
          >
            {baby.name}
          </button>
        ))}
    </div>
  );
};

export default ChildList;
