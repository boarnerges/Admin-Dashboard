import DashbaordCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, Users } from "lucide-react";
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row overflow-x-auto justify-center gap-5 mb-5 ml-5 mt-5 item ">
        <DashbaordCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={22} />}
        />
        <DashbaordCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={22} />}
        />
        <DashbaordCard
          title="Users"
          count={750}
          icon={<Users className="text-slate-500" size={22} />}
        />
        <DashbaordCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={22} />}
        />
      </div>
      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
