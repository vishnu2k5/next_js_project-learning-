import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -right-2 -top-2">
        <span className="flex size-[11px]">
          {/* Outer pulsing circle */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#EE2B69] opacity-75 animate-ping"></span>
          {/* Inner solid circle */}
          <span className="relative inline-flex size-[11px] rounded-full bg-[#EE2B69]"></span>
        </span>
      </div>
    </div>
  );
};

export default Ping;
