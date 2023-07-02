"use client";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { signIn, signOut, useSession } from "next-auth/react";
const Signup = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="d-flex">
        <Link href="/music" className="nav-link text-light me-2">
          {" "}
          Music
        </Link>
        <div className="nav-item dropdown text-light mt-1">
          <img
            src={session.user.image}
            alt="user_profile"
            className="user_profile dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            title={`${session.user.name} 's profile`}
          />

          <div className="dropdown-menu singList p-2">
            <div>{session.user.name}</div>
            <div className="mt-2">{session.user.email}</div>
            <div>
              <button
                onClick={() => signOut("google")}
                className="border rounded  btn p-1 mt-2"
              >
                Sign Out{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nav-item dropdown text-light">
      <button
        className="nav-link text-light bg-danger rounded dropdown-toggle"
        // onClick={handleClick}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sign In
      </button>
      <div className="dropdown-menu p-2">
        <div>
          <button
            onClick={() => signIn("google")}
            className="bg-danger text-light btn p-1"
          >
            <BsGoogle className="me-2" /> Signup with google{" "}
          </button>
        </div>
        <div className="mt-2">
          <button
            onClick={() => signIn("google")}
            className="bg-primary text-light btn p-1"
          >
            <BsFacebook className="me-2" /> Signup with facebook{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
