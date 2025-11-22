"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh w-full">
      <SidebarProvider>{children}</SidebarProvider>
    </div>
  )
}