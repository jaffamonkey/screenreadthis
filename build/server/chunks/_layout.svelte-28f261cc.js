import { c as create_ssr_component, v as validate_component, b as subscribe } from './index-3df4f66e.js';
import { p as page } from './stores-0b3a598c.js';

const css$1 = {
  code: "header.svelte-vjx8v2.svelte-vjx8v2{display:flex;justify-content:space-between}.corner.svelte-vjx8v2.svelte-vjx8v2{width:1rem}nav.svelte-vjx8v2.svelte-vjx8v2{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-vjx8v2.svelte-vjx8v2{width:2em;height:3em;display:block}path.svelte-vjx8v2.svelte-vjx8v2{fill:var(--background)}ul.svelte-vjx8v2.svelte-vjx8v2{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-vjx8v2.svelte-vjx8v2{position:relative;height:100%}li.active.svelte-vjx8v2.svelte-vjx8v2::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-vjx8v2 a.svelte-vjx8v2{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-vjx8v2.svelte-vjx8v2:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-vjx8v2"}"><div class="${"corner svelte-vjx8v2"}"></div>

	<nav data-sveltekit-prefetch class="${"svelte-vjx8v2"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-vjx8v2"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-vjx8v2"}"></path></svg>
		<ul class="${"svelte-vjx8v2"}"><li class="${["svelte-vjx8v2", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="${"/"}" class="${"svelte-vjx8v2"}">Home</a></li>
			<li class="${["svelte-vjx8v2", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a href="${"/about"}" class="${"svelte-vjx8v2"}">About</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-vjx8v2"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-vjx8v2"}"></path></svg></nav>

	<div class="${"corner svelte-vjx8v2"}"></div>
</header>`;
});
const css = {
  code: "main.svelte-142u51d.svelte-142u51d{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:910px;margin:0 auto;box-sizing:border-box}footer.svelte-142u51d.svelte-142u51d{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-142u51d a.svelte-142u51d{font-weight:bold}@media(min-width: 480px){footer.svelte-142u51d.svelte-142u51d{padding:40px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-142u51d"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-142u51d"}"><hr style="${"width:30px;border:1px solid #999;"}">
	<p><small>Disclaimer: This is not a real screenreader software, only use real screenreaders for serious
			testing!</small></p>
	<p>Source code: <a href="${"https://github.com/mandrasch/screenreadthis"}" aria-label="${"Read more about this on the Github repository page"}" class="${"svelte-142u51d"}">GitHub</a>
		(Open Source) | <a href="${"/about"}" class="${"svelte-142u51d"}">About</a> |
		<a href="${"https://github.com/mandrasch/screenreadthis#privacy-and-imprint"}" class="${"svelte-142u51d"}">Privacy / Imprint</a></p>
</footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-28f261cc.js.map
