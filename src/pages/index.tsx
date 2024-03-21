import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { data: memeList } = api.meme.getAll.useQuery();

  console.log("memeList", memeList);

  return (
    <>
      <div>{memeList?.map((v) => <div key={v?.id}>{v?.name}</div>)}</div>
    </>
  );
}
