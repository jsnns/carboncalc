import React from "react";

export const Spacer: React.FC<{ height?: number }> = ({ height = 7 }) => {
  return <div style={{ height }} />;
};
