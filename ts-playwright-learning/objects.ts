/* Task: 
  [ ]  generate a `type` alias for a `Vulnerability` (with properties like `id`, `severity`, `url`).
  [ ]  Manually write a function that accepts a `Vulnerability` object and returns a formatted string summary.
*/

type Vulnerability = {
  id: string;
  severity: string;
  url: string;
  title?: string; // Optional property for additional details
  dateCreated?: Date; // Optional property for when the vulnerability was discovered
};

function getStringSummary(vuln: Vulnerability): string {
    const dateStr = vuln.dateCreated?.toISOString().split('T')[0];
    return `[${vuln.severity.toUpperCase()}] ${vuln.id}: ${vuln.title} (Reported: ${dateStr}) - Details: ${vuln.url}`;

}

// Example usage:
const sampleVuln: Vulnerability = {
  id: "CVE-2026-9997",
  severity: "High",
  url: "https://security.example.com/qdvthandler/control/1.0.0",
  title: "Login page button is not disabled during processing",
  dateCreated: new Date()
};


console.log(getStringSummary(sampleVuln));