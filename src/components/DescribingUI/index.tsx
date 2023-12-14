import Image from "next/image";
import { FaBeer } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
function Profile() {
  return (
    <Image
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      width={100}
      height={100}
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>
        Amazing scientists <FaBeer /> <FiEye />
      </h1>
      <div className="flex gap-5">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
