const fs = require('fs');
const q = require('@testing-library/dom');

test('check html', () => {
  const html = fs.readFileSync(`${__dirname}/index.html`).toString();
  const container = document.createElement('div');
  container.innerHTML = html;
  expect(q.getByText(container, /съешь/i, { selector: 'p' })).toBeVisible();
});