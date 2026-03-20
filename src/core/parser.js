const MarkdownIt = require('markdown-it')

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

function parseMarkdown(content) {
  return md.render(content)
}

module.exports = parseMarkdown