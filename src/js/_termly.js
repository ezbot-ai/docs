import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  const termlyScript = document.createElement("script");
  termlyScript.src = `https://app.termly.io/resource-blocker/ed3d4eec-6473-45df-b680-2f7f13fa106f?autoBlock=on`;
  document.head.appendChild(termlyScript);
}
