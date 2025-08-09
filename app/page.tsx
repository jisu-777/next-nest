import Link from "next/link";
import { Metadata } from "next";

// 메타데이터
export const metadata: Metadata = {
  title: "Next.js",
  description: "Next.js 튜토리얼 배우기",
}

export default function Home() {
  return (
    <div >
     <h1>Hello World</h1>
     <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
