import { EmployeeEmptyState, EmployeeList } from "@/features/employee/components";

export default async function ProjectDashboardPage() {
  return (
  <main className="flex h-screen bg-background w-full">
    <EmployeeList />
    <div className="flex-1 flex flex-col">
      <EmployeeEmptyState />
    </div>
  </main>
);
}