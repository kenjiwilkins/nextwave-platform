import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management Dashboard - Project",
};

export default function ProjectManagementDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}