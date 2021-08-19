const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');

const processor = unified()
.use(markdown)
.use(remark2rehype)
.use(html);

/**
 * 受け取った文書を HTML に変換する
 */
export async function render(src: string): Promise<string> {
  return  processor.processSync(src).toString();
}
