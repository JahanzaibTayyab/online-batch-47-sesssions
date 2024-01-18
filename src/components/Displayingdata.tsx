import Image from "next/image";
import image1 from "@/assets/images/image1.jpg";
//console.log("🚀 ~ file: Displayingdata.tsx:3 ~ image1:", image1);
function DisplayingData() {
  const user = {
    name: "Jahanzaib Tayyab",
    role: "admin",
    age: 24,
    email: "jtayyab204@gmail.com",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayO9_i8fxE_e0djBJ9Ub2Z9LO5YWbvvPCfewCFe9N_w&s",
    imageSize: 90,
  };

  return (
    <div className="mt-2">
      My User Info
      <div>Name: {user.name}</div>
      <div>Role: {user.role}</div>
      <div>age: {user.age}</div>
      <div>email: {user.email}</div>
      <div className="flex gap-5">
        <Image
          className="rounded-full"
          src={user.imageUrl}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className="rounded-full"
          src={image1}
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default DisplayingData;
