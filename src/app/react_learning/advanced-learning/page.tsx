import React from "react";
import ThinkingInReact from "@/components/ThinkingInReact";
import Gallery from "@/components/DescribingUI";

function Page() {
  return (
    <div>
      <div>
        <p className="text-sm font-semibold">Thinking In React</p>
        <ThinkingInReact />
      </div>
      <div>
        <p className="text-sm font-semibold">Describing UI</p>
        <Gallery />
      </div>
    </div>
  );
}

export default Page;
