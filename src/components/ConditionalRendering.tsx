import React from "react";

function ConditionalRendering() {
  let content;
  let isLoggedIn = false;
  let newCondition = true;
  let newCon1 = true;
  if (isLoggedIn) {
    content = <div>Admin Panel</div>;
  } else {
    content = <div>Login Panel</div>;
  }
  // always condition ? : in markup language
  return (
    <div className="flex flex-col p-12 gap-5">
      {content}
      If you prefer more compact code, you can use the conditional ? operator.
      Unlike if, it works inside JSX:
      {newCondition ? (
        <div className="bg-slate-500">Condition true</div>
      ) : (
        <div className="bg-blue-500">Condition False</div>
      )}
      {newCon1 && <div className="bg-red-500">And Condition true</div>}
    </div>
  );
}

export default ConditionalRendering;
