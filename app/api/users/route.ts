import { NextResponse } from "next/server";


const DB= [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Jim"},
]

export async function GET(request: Request) {
  //  검색 파라미터 가져오기
  const searchParams = new URL(request.url).searchParams;
  const name = searchParams.get("name");

  //  검색으로 필터링
  return NextResponse.json({users: DB.filter((user) => user.name.includes(name || ""))})
}