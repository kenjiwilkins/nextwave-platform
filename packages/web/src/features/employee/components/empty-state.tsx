import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Users } from "lucide-react"

const title = "No Employee Selected"
const description = "No employee is currently selected.\n Please find your name in the employee list to view your details."

export const EmployeeEmptyState = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Users />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptyDescription className="whitespace-pre-wrap">
        {description}
      </EmptyDescription>
    </Empty>
  )
}