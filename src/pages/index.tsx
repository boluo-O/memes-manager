import Head from "next/head";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button, Upload } from "antd";
import { api } from "@/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { data: memeList, refetch: getMemeList } = api.meme.getAll.useQuery();

  const { mutate: addMeme } = api.meme.create.useMutation({
    onError: (e) => {
      console.log("e.message", e.message);
    },
    onSuccess: async () => {
      console.log("创建成功");
      await getMemeList();
    },
  });
  console.log("memeList", memeList);

  return (
    <>
      <button
        onClick={() => {
          addMeme({ name: "ewfa", imageUrl: "bbbb", description: "cccc" });
        }}
      >
        新增
      </button>
      <Button type="primary">按钮酒店经理咖啡店监考老师</Button>
      <div className="w-max bg-red-100">
        <Upload>
          <div>上传图片</div>
        </Upload>
      </div>
      <div>{memeList?.map((v) => <div key={v?.id}>{v?.name}</div>)}</div>
    </>
  );
}
