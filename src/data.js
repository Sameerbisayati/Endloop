
export const solutions = [
  {
    name: "Budget review",
    text: "Review budgets against actuals and agreed limits, with exceptions raised for you.",
    status: "Live",
  },
  {
    name: "Escrow audit",
    text: "Run an escrow audit from source documents to a review-ready file.",
    status: "Live",
  },
  {
    name: "Financial audit",
    text: "A full audit workflow that prepares schedules and working papers.",
    status: "Live",
  },
  {
    name: "Interim audit",
    text: "Mid-year checks prepared automatically, ready for your judgement.",
    status: "Live",
  },
  {
    name: "Budget preparation",
    text: "Annual budgets for property management companies, drafted for approval.",
    status: "Live",
  },
];

export const tools = [
  {
    name: "Purchase-order extraction",
    text: "Pull every detail from purchase orders into clean, structured data.",
    status: "Live",
  },
  {
    name: "Vouching automation",
    text: "Trace reported figures back to their source documents.",
    status: "Live",
  },
  {
    name: "Expense working automation",
    text: "Generate expense schedules and workings automatically.",
    status: "Live",
  },
  {
    name: "Financial report review",
    text: "Spot inconsistencies and missing items before sign-off.",
    status: "In development",
  },
  {
    name: "Tender verification",
    text: "Compare quotes against each other, side by side.",
    status: "In development",
  },
  {
    name: "Reconciliation",
    text: "Match statements to ledgers across hundreds of files.",
    status: "Live",
  },
];

export const capabilities = [
  {
    title: "Read documents",
    text: "Invoices, purchase orders, contracts and statements.",
  },
  {
    title: "Compare and match",
    text: "Documents to ledgers, quotes to quotes.",
  },
  {
    title: "Check against rules",
    text: "Missing items, mismatched totals, duplicates.",
  },
  { title: "Prepare drafts", text: "Schedules, working papers and reports." },
  { title: "Handle bulk work", text: "Hundreds of documents at once." },
  
];

export const steps = [
  {
    title: "Upload",
    text: "Hundreds of statements and invoices go in at once.",
    rows: [
      ["bank_statement_oct.pdf", "Received"],
      ["ledger_export.xlsx", "Received"],
      ["142 invoices", "Received"],
    ],
  },
  {
    title: "Read",
    text: "Figures and details are extracted automatically.",
    rows: [
      ["Invoice #1042", "AED 12,400"],
      ["Invoice #1043", "AED 8,950"],
      ["Invoice #1044", "AED 12,400"],
    ],
  },
  {
    title: "Match",
    text: "Every document is compared against the ledger.",
    rows: [
      ["Invoice #1042", "✓ Matched", "ok"],
      ["Invoice #1043", "✓ Matched", "ok"],
      ["Invoice #1044", "✓ Matched", "ok"],
    ],
  },
  {
    title: "Flag",
    text: "Rules catch duplicates, gaps and mismatched totals.",
    rows: [
      ["Invoice #1042", "✓ OK", "ok"],
      ["#1044 repeats #1042", "⚠ Flagged", "bad"],
      ["Ledger total off by AED 450", "⚠ Flagged", "bad"],
    ],
  },
  {
    title: "Review",
    text: "A professional reviews every exception and signs off.",
    rows: [
      ["2 exceptions", "Waiting for you"],
      ["Draft working paper", "Ready", "ok"],
      ["Final sign-off", "You decide"],
    ],
  },
];
