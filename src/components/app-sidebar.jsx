import { Book, Cat, Home, MonitorPlay, Music, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Book Categories",
    url: "/books",
    icon: Book,
  },

  {
    title: "Old School Cartoons",
    url: "/cartoons",
    icon: Cat,
  },
  {
    title: "Moives & TV Shows",
    url: "/moives",
    icon: MonitorPlay,
  },
  {
    title: "Music",
    url: "/music",
    icon: Music,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              {/* <SidebarMenuButton> */}
              <div className="h-16 rounded-xl w-3/12 py-2.5 px-3 flex gap-3 items-start">
                <img
                  src="https://i.pinimg.com/736x/39/2a/50/392a5042102c7d7e4ed87527a2d7e74a.jpg"
                  alt="profile image"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
                {/* username and email */}
                <div>
                  <p className="capitalize text-base">dark moon</p>
                  <p className="text-gray-400 text-xs">darkmoon@gmail.com</p>
                </div>
              </div>
              {/* </SidebarMenuButton> */}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/setting">
                    <Settings />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
