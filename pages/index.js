import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <Link href="/without-context">
        <a>- Without Context API</a>
      </Link>
      <Link href="/with-context">
        <a>- With Context API</a>
      </Link>
    </div>
  );
}
