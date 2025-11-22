import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Project",
};

export default function ProjectManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}