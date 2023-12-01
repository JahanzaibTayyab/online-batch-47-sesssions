/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
const Dashboard = () => {
  return (
    <div className="p-12">
      DashBoard Route
      <div>
        <p className="font-bold text-lg">Nested Route</p>
        <p>
          To create a nested route, you can nest folders inside each other. For
          example, you can add a new /dashboard/settings route by nesting two
          new folders in the app directory.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {`HTML <a> Tag`}
        {`Definition and Usage The <a> tag defines a hyperlink, which is used to link from one page to another.`}
        <p>
          The most important attribute of the {`<a>`} element is the href
          attribute, which indicates the link's destination.
        </p>
        <a
          target={"_blank"}
          href={`https://www.w3schools.com/tags/tag_a.asp`}
          className="font-bold text-red-500"
        >
          HTML Tag Link
        </a>
      </div>
      <div className="p-5 bg-slate-200 flex flex-col gap-5">
        <Link href={"/dashboard/analytics"}>Analytics</Link>
        <a href={"/dashboard/settings"}>Settings</a>
        never use {`<a>`} in nextJs always use Link from nextJs
        <Link href={"/dashboard/settings/password"}>Setting Password</Link>
        <Link href={"/dashboard/settings/profile"}>Setting Profile</Link>
      </div>
    </div>
  );
};

export default Dashboard;
