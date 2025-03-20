import { AppSidebar } from "@/components/app-sidebar";
import Search from "@/components/Search";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default function layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between gap-5 mb-3">
          <div className="flex items-center justify-between gap-5">
            <SidebarTrigger className={"cursor-pointer"} />
          </div>
          <Search />
        </div>
        <hr className="border border-gray-200 my-3" />
        {children}
      </main>
    </SidebarProvider>
  );
}
