import React from "react";
import { EmissionsData } from "../types";
import { Spacer } from "./Spacer";

export const EmissionsDisplay: React.FC<{
  emissions: EmissionsData | null;
}> = ({ emissions }) => {
  if (emissions == null) {
    return null;
  }
  return (
    <div>
      <div>
        <h2 style={{ marginBottom: 0 }}>Car</h2>
        {emissions.car.toFixed(1)}g CO2*
        <Spacer />
        * We assume that 37g of CO2 is emitted for every km traveled.
        <Spacer />
        <h2 style={{ marginBottom: 0 }}>Bike</h2>
        {emissions.bike.toFixed(1)}g CO2
      </div>
    </div>
  );
};
