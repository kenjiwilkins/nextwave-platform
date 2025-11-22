import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export const PasswordInputForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enterance</CardTitle>
      </CardHeader>
      <CardContent>
        <form action="#">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required autoFocus autoComplete="current-password" placeholder="password" />
            </Field>
            <Field>
              <Button type="submit" className="w-full">Submit</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}