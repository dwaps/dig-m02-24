// MODULE HTTP/S

const http = require('http');
const port = process.env.PORT || 8080;

const pages = {
  '/home': '<h1>Bienvenue</h1>',
  '/presentation': '<h1>Qui sommes-nous ?</h1>',
  '/contact': '<h1>Nous contacter</h1>',
};

const tabs = [
  { label: 'Accueil', link: '/home', className: 'active' },
  { label: 'Présentation', link: '/presentation', className: '' },
  { label: 'Contact', link: '/contact', className: '' },
];

const menuHTML = `
  <nav>
    ${tabs.map(({ label, link, className }) => `
      <div>
        <a href="${link}" class="${className}">${label}</a>
      </div>
    `).join('')}
  </nav>
`;

const buildHTML = (contentPage) => `
  ${menuHTML}
  ${contentPage}
  ${contentPage.includes('Bienvenue') ? '' : '<p>Voluptatem doloremque repudiandae. Rerum pariatur consectetur voluptatem ducimus assumenda maxime officiis ut. Voluptas dolorem assumenda doloremque corporis. Repellat doloremque adipisci ut qui sed quisquam.</p>'}
`;

http
  .createServer((req, res) => {
    if (!req.url.includes('favicon') && pages.hasOwnProperty(req.url)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.end(buildHTML(pages[req.url]));
    }
    // res.setHeader('Location', `http://localhost:${port}/home`);
    // res.statusCode = 301;
    res.writeHead(301, { Location: `http://localhost:${port}/home` });
    res.end();
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
