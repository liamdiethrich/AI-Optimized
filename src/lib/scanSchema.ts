import { z } from "zod";

export const scanSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Enter a valid work email."),
  company: z.string().optional(),
  role: z.string().optional(),
  teamSize: z.string().optional(),
  department: z.string().optional(),
  workflowDescription: z
    .string()
    .min(20, "Share at least a few sentences about the workflow."),
  runsPerWeek: z.number().min(0).optional(),
  minutesPerRun: z.number().min(0).optional(),
  hourlyCost: z.number().min(0).optional(),
  errorMinutesPerRun: z.number().min(0).optional(),
  painTypes: z.array(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  otherTools: z.string().optional(),
  sensitivity: z.array(z.string()).optional(),
  accessPreference: z.string().optional(),
  approvalGates: z.string().optional(),
});

export type ScanFormData = z.infer<typeof scanSchema>;
