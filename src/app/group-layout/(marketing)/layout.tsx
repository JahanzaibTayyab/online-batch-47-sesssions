import React, { ReactNode } from "react";

function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-5">
      MarketingLayout
      <div>{children}</div>
    </div>
  );
}

export default MarketingLayout;
