import hljs from 'highlight.js';
import jsonHighlighter from 'highlight.js/lib/languages/json';
import xmlHighlighter from 'highlight.js/lib/languages/xml';
import prettierPluginBabel from 'prettier/plugins/babel.js';
import prettierPluginEstree from 'prettier/plugins/estree.js';
import prettierPluginHtml from 'prettier/plugins/html.js';
import { format } from 'prettier/standalone.js';

hljs.registerLanguage('json', jsonHighlighter);
hljs.registerLanguage('html', xmlHighlighter);

export async function html(value: string): Promise<string> {
  const prettyValue = await format(value, {
    parser: 'html',
    plugins: [prettierPluginHtml],
  });
  return hljs.highlight(prettyValue, { language: 'html' }).value;
}

export async function json(value: string): Promise<string> {
  const prettyValue = await format(value, {
    parser: 'json',
    printWidth: 0,
    trailingComma: 'all',
    plugins: [prettierPluginBabel, prettierPluginEstree],
  });
  return hljs.highlight(prettyValue, { language: 'javascript' }).value;
}
