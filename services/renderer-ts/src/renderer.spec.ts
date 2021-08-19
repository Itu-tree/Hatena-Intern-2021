import { render } from "./renderer";

describe("render", () => {
  it("URL の自動リンクができる", async () => {
    const src = "[https://google.com/](https://google.com/)";
    const html = await render(src);
    expect(html).toBe('<p><a href="https://google.com/">https://google.com/</a></p>');
  });

  it("見出し記法ができる", async () => {
    const src = "## foo";
    const html = await render(src);
    expect(html).toBe("<h2>foo</h2>");
  });

  it("リスト記法ができる", async () => {
    const src = `
- リスト1
  - ネスト1-1
  - ネスト1-2`.trim();
    const html = await render(src);
    expect(html).toMatchInlineSnapshot(`
      "<ul>
      <li>リスト1
      <ul>
      <li>ネスト1-1</li>
      <li>ネスト1-2</li>
      </ul>
      </li>
      </ul>"
    `);
  });
});
