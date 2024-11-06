// json2html.js
function json2html(data) {
  // Extract all unique keys across objects to handle missing columns
  const columns = [...new Set(data.flatMap(Object.keys))];

  // Create the initial table with data-user attribute
  let html = '<table data-user="prajjwalm007@gmail.com">\n';

  // Add table header
  html += "  <thead>\n    <tr>";
  columns.forEach((col) => (html += `<th>${col}</th>`));
  html += "</tr>\n  </thead>\n";

  // Add table body
  html += "  <tbody>\n";
  data.forEach((row) => {
    html += "    <tr>";
    columns.forEach((col) => {
      html += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    });
    html += "</tr>\n";
  });
  html += "  </tbody>\n</table>";

  return html;
}

// Export the function using CommonJS syntax
module.exports = json2html;
