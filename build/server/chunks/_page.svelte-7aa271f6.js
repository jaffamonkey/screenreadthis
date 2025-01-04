import { c as create_ssr_component, v as validate_component } from './index-3df4f66e.js';
import { g as github$1, b as bash$1, H as Highlight } from './github-f4df62be.js';

const css = {
  code: ".content.svelte-ss1rlp{width:100%;max-width:var(--column-width);margin:0 auto 0 auto}p.svelte-ss1rlp{text-align:justify}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const installCode = `git clone https://github.com/mandrasch/screenreadthis.git
cd screenreadthis/
npm install
npm run dev -- --open`;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>ScreenreadThis! - About</title>`, ""}<meta name="${"description"}" content="${"Basic web accessibility testing should be possible without the need of installing screenreader software and without the need of learning the different keyboard shortcuts first."}" data-svelte="svelte-qhnyro"><!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`, ""}

<div class="${"content svelte-ss1rlp"}"><h1>About this web app</h1>
	<p class="${"svelte-ss1rlp"}">!! Disclaimer: Serious and professional accessibility testing should always be done with real
		screenreader software. This is just an experimental project. !!
	</p>

	<p class="${"svelte-ss1rlp"}">Experimental project which tries to find easier ways of learning about screenreader testing -
		without the need of learning all screenreader operation shortcuts first. No more excuses!
	</p>

	Install and use ScreenreadThis! locally:

	${validate_component(Highlight, "Highlight").$$render($$result, { language: bash$1, code: installCode }, {}, {})}

	<p class="${"svelte-ss1rlp"}">Built with SvelteKit and puppeteer retrieving the <a href="${"https://pptr.dev/api/puppeteer.accessibility.snapshot/"}">accessibility tree snapshot</a>.
	</p>

	<p class="${"svelte-ss1rlp"}">Demo video: 
	</p>
	<ul><li><a href="${"https://www.youtube.com/watch?v=svpjpAsGThU"}">ScreenreadThis! demo video (YouTube)
		</a></li></ul>

	<p class="${"svelte-ss1rlp"}">See the README-files on GitHub for all information:</p>
	<ul><li><a href="${"https://github.com/mandrasch/screenreadthis#readme"}" aria-label="${"Github repository with README"}">github.com/mandrasch/screenreadthis</a></li></ul>

	<hr>
	
	<p class="${"svelte-ss1rlp"}">Dive deeper into screenreader testing with these introductionary videos:</p>
	<ul><li><a href="${"https://www.youtube.com/watch?v=5R-6WvAihms"}">VoiceOver (Mac desktop) tutorial</a></li>
		<li><a href="${"https://www.youtube.com/watch?v=Vx1vSd5uYS8"}">NVDA (Windows desktop) tutorial</a></li>
		<li><a href="${"https://www.youtube.com/watch?v=UI76P-KPZec"}">Orca (Linux desktop) tutorial</a></li>
		<li><a href="${"https://www.youtube.com/watch?v=bCHpdjvxBws"}">VoiceOver (iOS) tutorial</a></li>
		<li><a href="${"https://www.youtube.com/watch?v=0Zpzl4EKCco"}">TalkBack (Android) tutorial</a></li></ul>

	<p class="${"svelte-ss1rlp"}">W3C has launched a great video course for a general introduction: <br><a href="${"https://www.edx.org/course/web-accessibility-introduction"}">edX course: Introduction to Web Accessibility
		</a></p>

	<p class="${"svelte-ss1rlp"}">Have fun exploring web accessibility (testing)!</p>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7aa271f6.js.map
