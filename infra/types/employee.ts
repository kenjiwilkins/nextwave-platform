export interface Employee {
  userId: string;
  firstName: string;
  isEmployed: boolean;
}

export interface CreateEmployeeInput {
  userId: string;
  firstName: string;
  isEmployed: boolean;
}

export interface UpdateEmployeeInput {
  userId: string;
  firstName?: string;
  isEmployed?: boolean;
}
