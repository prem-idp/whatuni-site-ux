import React, { useState } from "react";

function ReadMore({ children, maxLength = 198 }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = children?.toString() || ""; // Handle potential undefined children

  const truncatedText = text.substring(0, maxLength) + "...";

  return (
    <div className="x-small text-grey300">
      {isExpanded ? text : truncatedText}
      {text.length > maxLength && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-400 cursor-pointer hover:underline"
        >
          {isExpanded ? "Read Less" : "Read full review"}
        </span>
      )}
    </div>
  );
}

export default ReadMore;
