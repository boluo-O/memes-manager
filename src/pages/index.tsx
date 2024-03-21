import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <p className="text-2xl">
        {hello.data ? hello.data.greeting : "Loading tRPC query..."}
      </p>
    </>
  );
}
