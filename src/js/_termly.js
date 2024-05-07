import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  const termlyScript = document.createElement("script");
  termlyScript.src = `https://app.termly.io/embed.min.js`;
  termlyScript.setAttribute("data-auto-block", "on");
  termlyScript.setAttribute(
    "data-website-uuid",
    "ed3d4eec-6473-45df-b680-2f7f13fa106f"
  );
  document.head.appendChild(termlyScript);
}
