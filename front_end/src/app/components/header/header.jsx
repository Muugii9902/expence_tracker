import Image from "next/image";
import Link from "next/link";

export const Header = ({ user, logOut }) => {
  return (
    <header className="flex items-center max-w-full mx-auto justify-between py-10">
      <div className="flex gap-6 items-center">
        <Image src="/Image/logo.png" width={38} height={38} alt="logo" />
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
        <Link href="/records">
          <p>{user.name}</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button className="btn bg-[#0166FF] text-white btn-sm">Records</button>
        <div className="avatar w-12 h-12">
          <div className="w-24 rounded-full">
            <img src={user?.avatarImg} />
          </div>
        </div>
        <button className="btn btn-sm" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};
