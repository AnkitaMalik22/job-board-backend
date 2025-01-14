export interface Job {
    id?: number;
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface JobData {
    id?: number;
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
    created_at?: Date;
    updated_at?: Date;
  }

export interface CreateJobInput {
    title: string;
    company: string;
    location: string;
    salary: number;
    description: string;
}

export interface UpdateJobInput {
    title?: string;
    company?: string;
    location?: string;
    salary?: number;
    description?: string;
}