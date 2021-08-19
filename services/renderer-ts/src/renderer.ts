import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

const processor = unified().use(markdown).use(remark2rehype).use(html);

/**
 * 受け取った文書を HTML に変換する
 */
export async function render(src: string): Promise<string> {
  return processor.processSync(src).toString();
}
