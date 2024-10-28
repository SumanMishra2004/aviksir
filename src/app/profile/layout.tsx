import Sidebar from "@/components/profile/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen w-screen bg-blue-100 flex  justify-center items-center ">
    <Sidebar/>{children}</div>;
}
