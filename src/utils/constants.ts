import { InoviceStatuses, InvoiceTypes } from "./enum";
import { SelectOptionType } from "./types";

export const AUTO_COMPLETE_CONSTANT = "WEIRD_2024";
export const INFO_DATA = [
  {
    icon: "fa-rocket",
    title: "AI Powered",
    description: "Experience personalized, adaptive learning powered by AI",
  },
  {
    icon: "fa-users",
    title: "Collaborative",
    description:
      "Connect with peers, mentors, and experts to support your learning journey",
  },
  {
    icon: "fa-file-text",
    title: "Flexible",
    description:
      "Customize your learning experience to meet your unique learning needs",
  },
];

export const INVOICES_TYPES: SelectOptionType[] = [
  {
    value: InvoiceTypes.INCOMING,
    label: "Incoming",
  },
  {
    value: InvoiceTypes.OUTGOING,
    label: "Outgoing",
  },
];

export const INVOICES_STATUSES: SelectOptionType[] = [
  {
    value: InoviceStatuses.PAID,
    label: "Paid",
  },
  {
    value: InoviceStatuses.UNPAID,
    label: "Unpaid",
  },
  {
    value: InoviceStatuses.CANCELLED,
    label: "Cancelled",
  },
];
