"use client"
import { CheckIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface EmployeeListItem {
  id: string
  name: string
  position: string
  isWorking: boolean
}

const MockEmployeeList: EmployeeListItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: `emp-${i + 1}`,
  name: `Employee ${i + 1}`,
  position: `Position ${((i % 5) + 1)}`,
  isWorking: i % 3 === 0,
}))

const selectedEmployeeIndex = 2

export const EmployeeList = () => {
  return (
    <Sidebar variant="sidebar" collapsible="none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Employees</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MockEmployeeList.map((employee) => (
                <SidebarMenuItem 
                  key={employee.id}  
                  className={cn(
                    "border-border border-l-4",
                    selectedEmployeeIndex === MockEmployeeList.indexOf(employee) ? "border-primary" : "border-transparent"
                  )}>
                  <SidebarMenuButton size="lg" asChild>
                    <div className="flex items-center gap-2">
                      <div className="relative w-fit">
                        <Avatar className={cn(
                          "ring-offset-background ring-offset-2",
                          employee.isWorking ? "ring-2 ring-green-500" : "ring-2 ring-transparent"
                        )}>
                          <AvatarFallback className="text-xs">
                            {employee.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        {employee.isWorking && (
                          <span className="absolute -right-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-green-500">
                            <CheckIcon className='size-3 text-white' />
                          </span>
                        )}
                      </div>
                      <span>
                        {employee.name}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}