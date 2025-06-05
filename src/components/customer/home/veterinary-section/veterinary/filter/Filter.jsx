import React, { useState, useMemo, useCallback } from "react";
import FILTER_TAGS from "../../../../../../utils/filter-tags";

const Filter = () => {
  const [activeTagIds, setActiveTagIds] = useState(new Set());
  const handleOnClickTag = useCallback((tagId) => {
    setActiveTagIds((prevActiveTagIds) => {
      const newActiveTagIds = new Set(prevActiveTagIds);
      if (newActiveTagIds.has(tagId)) {
        newActiveTagIds.delete(tagId);
      } else {
        newActiveTagIds.add(tagId);
      }
      return newActiveTagIds;
    });
  }, []);

  const getTagStyle = useCallback(
    (tagId) => {
      const isActive = activeTagIds.has(tagId);
      return {
        background: isActive ? "var(--color-primary-100)" : "",
        color: isActive ? "#FFFFFF" : "",
      };
    },
    [activeTagIds]
  );

  return (
    <div className="py-2.5 flex gap-[20px] mt-5">
      {FILTER_TAGS.map((item) => (
        <div
          key={item.id}
          className="px-5 py-2.5 bg-[rgba(0,0,0,0.05)] text-[14px] rounded-[.375rem] text-[rgba(0,0,0,0.5)] cursor-pointer"
          onClick={() => handleOnClickTag(item.id)}
          style={getTagStyle(item.id)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Filter);
