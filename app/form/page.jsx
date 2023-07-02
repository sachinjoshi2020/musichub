"use client";
import Nav from "../components/Nav";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { signIn, signOut, useSession } from "next-auth/react";
const page = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <h1>{`welcome ${session.user.name}`}</h1>
        <h2>{`email ${session.user.email}`}</h2>
        <img src={session.user.image} alt="sachin" />
        <button
          onClick={() => signOut("google")}
          className="bg-danger text-light btn p-3"
        >
          {" "}
          Logout{" "}
        </button>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="container w-50 mt-5 shadow rounded p-4">
        <button
          onClick={() => signIn("google")}
          className="bg-danger text-light btn p-3"
        >
          <BsGoogle className="me-2" /> Signup with google{" "}
        </button>
        <button
          onClick={() => signIn("google")}
          className="bg-primary text-light btn p-3 ms-5"
        >
          <BsFacebook className="me-2" /> Signup with facebook{" "}
        </button>
      </div>
    </>
  );
};

export default page;
