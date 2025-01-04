import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, g as getContext, s as setContext, b as subscribe, f as set_store_value, m as missing_component, h as null_to_empty, i as each } from './index-3df4f66e.js';
import { r as readable, w as writable } from './index2-6ac40de4.js';
import { g as github$1, b as bash$1, H as Highlight } from './github-f4df62be.js';

const STATE = {};
function useState(newState, opts) {
  const currentState = getContext(STATE);
  const _newState = typeof newState === "function" ? newState(currentState) : newState;
  const nextState = { ...currentState, ..._newState };
  if (opts == null ? void 0 : opts.expandable)
    nextState.isParentExpanded = nextState.expanded;
  setContext(STATE, nextState);
  return currentState;
}
const css$9 = {
  code: ".container.svelte-1qd6nto{display:inline-block;transform:translate(calc(0px - var(--li-identation)), -50%);position:absolute;top:50%;padding-right:100%}.arrow.svelte-1qd6nto{transform-origin:25% 50%;position:relative;line-height:1.1em;font-size:0.75em;margin-left:0;transition:150ms;color:var(--arrow-color);user-select:none;font-family:'Courier New', Courier, monospace;display:block}.expanded.svelte-1qd6nto{transform:rotateZ(90deg) translateX(-3px)}",
  map: null
};
const JSONArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $expandable, $$unsubscribe_expandable;
  let $expanded, $$unsubscribe_expanded;
  const { expanded: _expanded, expandable } = useState();
  $$unsubscribe_expandable = subscribe(expandable, (value) => $expandable = value);
  let { expanded = _expanded } = $$props;
  $$unsubscribe_expanded = subscribe(expanded, (value) => $expanded = value);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  $$result.css.add(css$9);
  $$unsubscribe_expandable();
  $$unsubscribe_expanded();
  return `${$expandable ? `<span class="${"container svelte-1qd6nto"}"><span class="${["arrow svelte-1qd6nto", $expanded ? "expanded" : ""].join(" ").trim()}">${escape("\u25B6")}</span></span>` : ``}`;
});
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  useState({ displayMode: "summary" });
  return `${slots.default ? slots.default({}) : ``}`;
});
const Expandable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded } = $$props;
  let { key } = $$props;
  const expandable = writable(false);
  useState(({ keyPath, level }) => {
    if (key !== "[[Entries]]") {
      keyPath = [...keyPath, key];
      level = level + 1;
    }
    return { keyPath, level, expanded, expandable };
  });
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  return `${slots.default ? slots.default({}) : ``}`;
});
const css$8 = {
  code: ".root.svelte-19drypg{display:inline-block;position:relative}.indent.svelte-19drypg{padding-left:var(--li-identation)}.label.svelte-19drypg{position:relative}",
  map: null
};
const JSONNested = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let child_expanded;
  let $expanded, $$unsubscribe_expanded;
  let $expandable, $$unsubscribe_expandable;
  let { keys } = $$props;
  let { shouldShowColon = void 0 } = $$props;
  let { expandKey = (key) => key } = $$props;
  let { defaultExpanded = false } = $$props;
  const { isParentExpanded, displayMode, root, expanded, expandable, keyPath, level, shouldExpandNode } = useState({ root: false }, { expandable: true });
  $$unsubscribe_expanded = subscribe(expanded, (value) => $expanded = value);
  $$unsubscribe_expandable = subscribe(expandable, (value) => $expandable = value);
  set_store_value(expandable, $expandable = true, $expandable);
  if (displayMode !== "summary") {
    if (!defaultExpanded) {
      const controlled = shouldExpandNode({ keyPath, level });
      if (controlled !== void 0) {
        defaultExpanded = controlled;
      }
    }
  }
  if ($$props.keys === void 0 && $$bindings.keys && keys !== void 0)
    $$bindings.keys(keys);
  if ($$props.shouldShowColon === void 0 && $$bindings.shouldShowColon && shouldShowColon !== void 0)
    $$bindings.shouldShowColon(shouldShowColon);
  if ($$props.expandKey === void 0 && $$bindings.expandKey && expandKey !== void 0)
    $$bindings.expandKey(expandKey);
  if ($$props.defaultExpanded === void 0 && $$bindings.defaultExpanded && defaultExpanded !== void 0)
    $$bindings.defaultExpanded(defaultExpanded);
  $$result.css.add(css$8);
  child_expanded = keys.map(() => writable(false));
  $$unsubscribe_expanded();
  $$unsubscribe_expandable();
  return `${displayMode === "summary" ? `${slots.summary ? slots.summary({}) : ``}` : `<span class="${"root svelte-19drypg"}">${root ? `${validate_component(JSONArrow, "JSONArrow").$$render($$result, { expanded }, {}, {})}` : ``}
    ${validate_component(Summary, "Summary").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.preview ? slots.preview({}) : ``}`;
    }
  })}</span>

  ${$expanded ? `<ul>${each(keys, (key, index) => {
    return `<li class="${["svelte-19drypg", $expanded ? "indent" : ""].join(" ").trim()}">${validate_component(Expandable, "Expandable").$$render(
      $$result,
      {
        key: expandKey(key),
        expanded: child_expanded[index]
      },
      {},
      {
        default: () => {
          return `<span class="${"label svelte-19drypg"}">${validate_component(JSONArrow, "JSONArrow").$$render($$result, {}, {}, {})}${slots.item_key ? slots.item_key({ key, index }) : ``}${!shouldShowColon || shouldShowColon(key) ? `<span class="${"operator"}">:</span>` : ``}
            </span>${slots.item_value ? slots.item_value({ key, index }) : ``}
          `;
        }
      }
    )}
        </li>`;
  })}</ul>` : ``}`}`;
});
const css$7 = {
  code: ".comma.svelte-150ffaa{margin-left:-0.5em;margin-right:0.5em}",
  map: null
};
const PreviewList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let { hasMore } = $$props;
  let { label = void 0 } = $$props;
  let { prefix = void 0 } = $$props;
  let { postfix = void 0 } = $$props;
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.hasMore === void 0 && $$bindings.hasMore && hasMore !== void 0)
    $$bindings.hasMore(hasMore);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.postfix === void 0 && $$bindings.postfix && postfix !== void 0)
    $$bindings.postfix(postfix);
  $$result.css.add(css$7);
  return `${prefix ? `${label ? `<span class="${"label"}">${escape(label)}</span>` : ``}<span class="${"operator"}">${escape(prefix)}</span>` : ``}
${each(list, (item, index) => {
    return `${slots.item ? slots.item({ item, index }) : ``}
  ${index < list.length - 1 ? `<span class="${"comma operator svelte-150ffaa"}">,</span>` : ``}`;
  })}
${hasMore ? `<span class="${"comma operator svelte-150ffaa"}">,</span>
  <span class="${"operator"}">\u2026</span>` : ``}
${postfix ? `<span class="${"operator"}">${escape(postfix)}</span>` : ``}`;
});
const JSONObjectNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  let previewKeys;
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  keys = Object.getOwnPropertyNames(value);
  previewKeys = keys.slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`;
    },
    item_key: ({ key }) => {
      return `<span class="${"property"}">${escape(key)}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render(
        $$result,
        {
          list: previewKeys,
          hasMore: previewKeys.length < keys.length,
          prefix: "{",
          postfix: "}"
        },
        {},
        {
          item: ({ item }) => {
            return `<span class="${"property"}">${escape(item)}</span><span class="${"operator"}">${escape(": ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[item] }, {}, {})}`;
          }
        }
      )}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">${escape("{\u2026}")}</span>`;
    }
  })}`;
});
const JSONArrayNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  let preview;
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  keys = Object.getOwnPropertyNames(value);
  preview = value.slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`;
    },
    item_key: ({ key }) => {
      return `<span class="${"property"}">${escape(String(key))}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render(
        $$result,
        {
          list: preview,
          hasMore: preview.length < value.length,
          label: "(" + value.length + ") ",
          prefix: "[",
          postfix: "]"
        },
        {},
        {
          item: ({ item }) => {
            return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: item }, {}, {})}`;
          }
        }
      )}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">Array(${escape(value.length)})</span>`;
    }
  })}`;
});
const ENTRIES$1 = "[[Entries]]";
const JSONIterableArrayNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let previewItems;
  let { value } = $$props;
  let { nodeType } = $$props;
  let indexes = [];
  let items = [];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.nodeType === void 0 && $$bindings.nodeType && nodeType !== void 0)
    $$bindings.nodeType(nodeType);
  {
    {
      let _indexes = [];
      let _items = [];
      let i = 0;
      for (const entry of value) {
        _indexes.push(i++);
        _items.push(entry);
      }
      indexes = _indexes;
      items = _items;
    }
  }
  previewItems = items.slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render(
    $$result,
    {
      keys: [ENTRIES$1, "size"],
      shouldShowColon: (key) => key !== ENTRIES$1
    },
    {},
    {
      item_value: ({ key }) => {
        return `${key === ENTRIES$1 ? `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys: indexes, defaultExpanded: true }, {}, {
          item_value: ({ key: index }) => {
            return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: items[index] }, {}, {})}`;
          },
          item_key: ({ key: index }) => {
            return `<span class="${"property"}">${escape(index)}</span>`;
          }
        })}` : `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`}
  `;
      },
      item_key: ({ key }) => {
        return `<span${add_attribute("class", key === ENTRIES$1 ? "internal" : "property", 0)}>${escape(key)}</span>`;
      },
      preview: () => {
        return `${validate_component(PreviewList, "PreviewList").$$render(
          $$result,
          {
            list: previewItems,
            hasMore: previewItems.length < items.length,
            label: `${nodeType}(${indexes.length}) `,
            prefix: "{",
            postfix: "}"
          },
          {},
          {
            item: ({ item }) => {
              return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: item }, {}, {})}`;
            }
          }
        )}
  `;
      },
      summary: () => {
        return `<span class="${"label"}">${escape(nodeType)}(${escape(indexes.length)})</span>`;
      }
    }
  )}`;
});
const ENTRIES = "[[Entries]]";
const JSONIterableMapNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let previewKeys;
  let { value } = $$props;
  useState();
  let indexes = [];
  let keys = [];
  let values = [];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    {
      let _indexes = [];
      let _keys = [];
      let _values = [];
      let i = 0;
      for (const entry of value) {
        _indexes.push(i++);
        _keys.push(entry[0]);
        _values.push(entry[1]);
      }
      indexes = _indexes;
      keys = _keys;
      values = _values;
    }
  }
  previewKeys = Array.from(value.keys()).slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render(
    $$result,
    {
      keys: [ENTRIES, "size"],
      shouldShowColon: (key) => key !== ENTRIES
    },
    {},
    {
      item_value: ({ key }) => {
        return `${key === ENTRIES ? `${validate_component(JSONNested, "JSONNested").$$render(
          $$result,
          {
            keys: indexes,
            expandKey: (index) => keys[index],
            defaultExpanded: true
          },
          {},
          {
            item_value: ({ key: index }) => {
              return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys: ["key", "value"] }, {}, {
                item_value: ({ key: name }) => {
                  return `${validate_component(JSONNode, "JSONNode").$$render(
                    $$result,
                    {
                      value: name === "key" ? keys[index] : values[index]
                    },
                    {},
                    {}
                  )}`;
                },
                item_key: ({ key: name }) => {
                  return `<span class="${"property"}">${escape(name)}</span>`;
                },
                preview: () => {
                  return `<span class="${"operator"}">${escape("{ ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: keys[index] }, {}, {})}<span class="${"operator"}">${escape(" => ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: values[index] }, {}, {})}<span class="${"operator"}">${escape(" }")}</span>`;
                }
              })}
        `;
            },
            item_key: ({ key: index }) => {
              return `<span class="${"property"}">${escape(index)}</span>`;
            }
          }
        )}` : `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`}
  `;
      },
      item_key: ({ key }) => {
        return `<span${add_attribute("class", key === ENTRIES ? "internal" : "property", 0)}>${escape(key)}</span>`;
      },
      preview: () => {
        return `${validate_component(PreviewList, "PreviewList").$$render(
          $$result,
          {
            list: previewKeys,
            hasMore: previewKeys.length < value.size,
            label: `Map(${keys.length}) `,
            prefix: `{`,
            postfix: "}"
          },
          {},
          {
            item: ({ item }) => {
              return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: item }, {}, {})}<span class="${"operator"}">${escape(" => ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value.get(item) }, {}, {})}`;
            }
          }
        )}
  `;
      },
      summary: () => {
        return `<span color="${"label"}">Map(${escape(keys.length)})</span>`;
      }
    }
  )}`;
});
const css$6 = {
  code: ".Date.svelte-l95iub{color:var(--date-color)}.BigInt.svelte-l95iub{color:var(--number-color)}.Number.svelte-l95iub{color:var(--number-color)}.Boolean.svelte-l95iub{color:var(--boolean-color)}.Null.svelte-l95iub{color:var(--null-color)}.Undefined.svelte-l95iub{color:var(--undefined-color)}.Symbol.svelte-l95iub{color:var(--symbol-color)}",
  map: null
};
const JSONValueNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value, nodeType } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.nodeType === void 0 && $$bindings.nodeType && nodeType !== void 0)
    $$bindings.nodeType(nodeType);
  $$result.css.add(css$6);
  return `<span class="${escape(null_to_empty(nodeType), true) + " svelte-l95iub"}">${escape(value)}
</span>`;
});
const css$5 = {
  code: ".indent.svelte-1u08yw6{padding-left:var(--li-identation)}",
  map: null
};
const ErrorStack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $expandable, $$unsubscribe_expandable;
  let $expanded, $$unsubscribe_expanded;
  let { stack } = $$props;
  const { expanded, expandable } = useState();
  $$unsubscribe_expanded = subscribe(expanded, (value) => $expanded = value);
  $$unsubscribe_expandable = subscribe(expandable, (value) => $expandable = value);
  set_store_value(expandable, $expandable = true, $expandable);
  if ($$props.stack === void 0 && $$bindings.stack && stack !== void 0)
    $$bindings.stack(stack);
  $$result.css.add(css$5);
  $$unsubscribe_expandable();
  $$unsubscribe_expanded();
  return `<span>${$expanded ? `${each(stack, (line, index) => {
    let appendNewLine = index < stack.length - 1;
    return `
      <span class="${["svelte-1u08yw6", index > 0 ? "indent" : ""].join(" ").trim()}">${validate_component(JSONNode, "JsonNode").$$render(
      $$result,
      {
        value: line + (appendNewLine ? "\\n" : "")
      },
      {},
      {}
    )}<span class="${"operator"}">${escape(appendNewLine ? " +" : "")}</span></span><br>`;
  })}` : `<span>${validate_component(JSONNode, "JsonNode").$$render($$result, { value: stack[0] + "\u2026" }, {}, {})}</span>`}
</span>`;
});
const ErrorNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stack;
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  stack = value.stack.split("\n");
  return `${validate_component(JSONNested, "JsonNested").$$render($$result, { keys: ["message", "stack"] }, {}, {
    item_value: ({ key }) => {
      return `${key === "stack" ? `${validate_component(ErrorStack, "ErrorStack").$$render($$result, { stack }, {}, {})}` : `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`}
  `;
    },
    item_key: ({ key }) => {
      return `<span class="${"property"}">${escape(key)}</span>`;
    },
    preview: () => {
      return `<span class="${"label"}">Error: ${escape(String(value.message))}</span>`;
    },
    summary: () => {
      return `<span class="${"label"}">Error: ${escape(String(value.message))}</span>`;
    }
  })}`;
});
function objType(obj) {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === "Object") {
    if (typeof obj[Symbol.iterator] === "function") {
      return "Iterable";
    }
    return obj.constructor.name;
  }
  return type;
}
const css$4 = {
  code: "span.svelte-1fvwa9c{color:var(--string-color);word-break:break-all;word-wrap:break-word}",
  map: null
};
const JSONStringNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let serialised;
  let { value } = $$props;
  const map = { "\n": "\\n", "	": "\\t", "\r": "\\r" };
  const { displayMode } = useState();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$4);
  serialised = value.replace(/[\n\t\r]/g, (_) => map[_]);
  return `${displayMode === "summary" ? `<span class="${"svelte-1fvwa9c"}">&quot;${escape(serialised.slice(0, 30) + (serialised.length > 30 ? "\u2026" : ""))}&quot;</span>` : `<span class="${"svelte-1fvwa9c"}">&quot;${escape(serialised)}&quot;</span>`}`;
});
const css$3 = {
  code: ".i.svelte-1eamqdt{font-style:italic}.fn.svelte-1eamqdt,.i.svelte-1eamqdt{color:var(--function-color)}",
  map: null
};
const FUNCTION = "[[Function]]";
const PROTO = "[[Prototype]]";
function getPreview1({ isGenerator, isAsync, isClass }) {
  if (isClass)
    return `class ${isClass}`;
  return (isAsync ? "async " : "") + "\u0192" + (isGenerator ? "*" : "");
}
function getPreview2({ isAsync, isArrow, fnName, args }) {
  return (isArrow && isAsync ? "async" : "") + " " + (fnName ?? "") + args + (isArrow ? " => \u2026" : "");
}
function toString(value) {
  try {
    return value.toString();
  } catch {
    switch (value.constructor.name) {
      case "AsyncFunction":
        return "async function () {}";
      case "AsyncGeneratorFunction":
        return "async function * () {}";
      case "GeneratorFunction:":
        return "function * () {}";
      default:
        return "function () {}";
    }
  }
}
const JSONFunctionNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let str;
  let ctx;
  let keys;
  let { value } = $$props;
  function parseFunction(str2) {
    const match = str2.match(/^(?:(async)\s+)?(?:function)?(\*)?\s*([^(]+)?(\([^)]*\))\s*(=>)?/);
    const isAsync = match == null ? void 0 : match[1];
    const isGenerator = match == null ? void 0 : match[2];
    const fnName = match == null ? void 0 : match[3];
    const args = match == null ? void 0 : match[4];
    const isArrow = match == null ? void 0 : match[5];
    const classMatch = str2.match(/^class\s+([^\s]+)/);
    const isClass = classMatch == null ? void 0 : classMatch[1];
    return {
      args,
      isAsync,
      isGenerator,
      fnName,
      isArrow,
      isClass
    };
  }
  function getValue(key) {
    if (key === PROTO)
      return value.__proto__;
    return value[key];
  }
  function filterKeys(key) {
    if (key === FUNCTION)
      return true;
    return getValue(key);
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$3);
  str = toString(value);
  ctx = parseFunction(str);
  keys = ["length", "name", "prototype", FUNCTION, PROTO].filter(filterKeys);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${key === FUNCTION ? `<span class="${"i svelte-1eamqdt"}">${escape(str)}</span>` : `${key === "prototype" ? `${validate_component(JSONObjectNode, "JsonObjectNode").$$render($$result, { value: getValue(key) }, {}, {})}` : `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: getValue(key) }, {}, {})}`}`}`;
    },
    item_key: ({ key }) => {
      return `<span${add_attribute(
        "class",
        key === FUNCTION || key === PROTO ? "internal" : "property",
        0
      )}>${escape(key)}</span>`;
    },
    preview: () => {
      return `${!ctx.isArrow ? `<span class="${"fn i svelte-1eamqdt"}">${escape(getPreview1(ctx))}</span>` : ``}${!ctx.isClass ? `<span class="${"i svelte-1eamqdt"}">${escape(getPreview2(ctx))}</span>` : ``}`;
    },
    summary: () => {
      return `<span class="${"i svelte-1eamqdt"}">\u0192</span>`;
    }
  })}`;
});
const STORE_VALUE = "$value";
const JSONSvelteStoreNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let objectKeys;
  let keys;
  let previewKeys;
  let storeValue;
  let isWritableStore;
  let $value, $$unsubscribe_value;
  let { value } = $$props;
  $$unsubscribe_value = subscribe(value, (value2) => $value = value2);
  function getValue(key) {
    if (key === STORE_VALUE)
      return storeValue;
    return value[key];
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  objectKeys = Object.getOwnPropertyNames(value);
  keys = [STORE_VALUE, ...objectKeys];
  previewKeys = objectKeys.slice(0, 5);
  storeValue = $value;
  isWritableStore = typeof value.set === "function";
  $$unsubscribe_value();
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: getValue(key) }, {}, {})}
  `;
    },
    item_key: ({ key }) => {
      return `<span${add_attribute("class", key === STORE_VALUE ? "internal" : "property", 0)}>${escape(key)}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render(
        $$result,
        {
          list: previewKeys,
          hasMore: previewKeys.length < objectKeys.length,
          prefix: "{",
          postfix: "}"
        },
        {},
        {
          item: ({ item }) => {
            return `<span class="${"property"}">${escape(item)}</span><span class="${"operator"}">${escape(": ")}</span>${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[item] }, {}, {})}`;
          }
        }
      )}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">${escape(isWritableStore ? "writable(" : "readable(")}${validate_component(JSONNode, "JSONNode").$$render($$result, { value: storeValue }, {}, {})}${escape(")")}</span>`;
    }
  })}`;
});
const TO_STRING_TAG = "Symbol(Symbol.toStringTag)";
const TypedArrayNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  let preview;
  let { value } = $$props;
  let { nodeType } = $$props;
  const internalKeys = ["buffer", "byteLength", "byteOffset", "length", TO_STRING_TAG];
  function getValue(key) {
    if (key === TO_STRING_TAG) {
      return value[Symbol.toStringTag];
    }
    return value[key];
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.nodeType === void 0 && $$bindings.nodeType && nodeType !== void 0)
    $$bindings.nodeType(nodeType);
  keys = [...Object.getOwnPropertyNames(value), ...internalKeys];
  preview = value.slice(0, 5);
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: getValue(key) }, {}, {})}`;
    },
    item_key: ({ key }) => {
      return `<span${add_attribute("class", internalKeys.includes(key) ? "internal" : "property", 0)}>${escape(String(key))}</span>`;
    },
    preview: () => {
      return `${validate_component(PreviewList, "PreviewList").$$render(
        $$result,
        {
          list: preview,
          hasMore: preview.length < value.length,
          label: nodeType + "(" + value.length + ") ",
          prefix: "[",
          postfix: "]"
        },
        {},
        {
          item: ({ item }) => {
            return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: item }, {}, {})}`;
          }
        }
      )}
  `;
    },
    summary: () => {
      return `<span class="${"label"}">${escape(nodeType)}(${escape(value.length)})</span>`;
    }
  })}`;
});
const css$2 = {
  code: ".regex.svelte-17k1wqt{color:var(--regex-color)}",
  map: null
};
const RegExpNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let str;
  let { value } = $$props;
  const keys = [
    "lastIndex",
    "dotAll",
    "flags",
    "global",
    "hasIndices",
    "ignoreCase",
    "multiline",
    "source",
    "sticky",
    "unicode"
  ];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$2);
  str = value.toString();
  return `${validate_component(JSONNested, "JSONNested").$$render($$result, { keys }, {}, {
    item_value: ({ key }) => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value: value[key] }, {}, {})}`;
    },
    item_key: ({ key }) => {
      return `<span class="${"internal"}">${escape(String(key))}</span>`;
    },
    preview: () => {
      return `<span class="${"regex svelte-17k1wqt"}">${escape(str)}</span>`;
    },
    summary: () => {
      return `<span class="${"regex svelte-17k1wqt"}">${escape(str)}</span>`;
    }
  })}`;
});
const JSONNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let componentType;
  let props;
  let $nodeType, $$unsubscribe_nodeType;
  let { value } = $$props;
  const nodeType = writable();
  $$unsubscribe_nodeType = subscribe(nodeType, (value2) => $nodeType = value2);
  function getComponentAndProps(nodeType2, value2) {
    switch (nodeType2) {
      case "Object":
        if (typeof value2.subscribe === "function")
          return [JSONSvelteStoreNode];
        return [JSONObjectNode];
      case "Error":
        return [ErrorNode];
      case "Array":
        return [JSONArrayNode];
      case "Map":
        return [JSONIterableMapNode];
      case "Iterable":
      case "Set":
        return [JSONIterableArrayNode, { nodeType: nodeType2 }];
      case "Number":
        return [JSONValueNode, { nodeType: nodeType2 }];
      case "String":
        return [JSONStringNode];
      case "Boolean":
        return [
          JSONValueNode,
          {
            nodeType: nodeType2,
            value: value2 ? "true" : "false"
          }
        ];
      case "Date":
        return [JSONValueNode, { nodeType: nodeType2, value: value2.toISOString() }];
      case "Null":
        return [JSONValueNode, { nodeType: nodeType2, value: "null" }];
      case "Undefined":
        return [JSONValueNode, { nodeType: nodeType2, value: "undefined" }];
      case "Function":
      case "AsyncFunction":
      case "AsyncGeneratorFunction":
      case "GeneratorFunction":
        return [JSONFunctionNode];
      case "Symbol":
        return [JSONValueNode, { nodeType: nodeType2, value: value2.toString() }];
      case "BigInt":
        return [JSONValueNode, { nodeType: nodeType2, value: String(value2) + "n" }];
      case "ArrayBuffer":
        return [
          JSONValueNode,
          {
            nodeType: nodeType2,
            value: `ArrayBuffer(${value2.byteLength})`
          }
        ];
      case "BigInt64Array":
      case "BigUint64Array":
      case "Float32Array":
      case "Float64Array":
      case "Int8Array":
      case "Int16Array":
      case "Int32Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Uint16Array":
      case "Uint32Array":
        return [TypedArrayNode, { nodeType: nodeType2 }];
      case "RegExp":
        return [RegExpNode];
      default:
        return [JSONValueNode, { nodeType: nodeType2, value: `<${nodeType2}>` }];
    }
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  set_store_value(nodeType, $nodeType = objType(value), $nodeType);
  [componentType, props] = getComponentAndProps($nodeType, value);
  $$unsubscribe_nodeType();
  return `${validate_component(componentType || missing_component, "svelte:component").$$render($$result, Object.assign({ value }, props), {}, {})}`;
});
function getShouldExpandNode({ defaultExpandedPaths, defaultExpandedLevel }) {
  const defaultExpandedPathsParts = defaultExpandedPaths.map((path) => path.split("."));
  function matchPath(keyPath) {
    outer:
      for (const parts of defaultExpandedPathsParts) {
        if (keyPath.length > parts.length)
          continue;
        const length = Math.min(keyPath.length, parts.length);
        for (let i = 0; i < length; i++) {
          if (parts[i] !== "*" && parts[i] !== String(keyPath[i]))
            continue outer;
        }
        return true;
      }
    return false;
  }
  return function({ keyPath, level }) {
    return level <= defaultExpandedLevel || matchPath(keyPath);
  };
}
const css$1 = {
  code: "ul.svelte-16cw61f{--string-color:var(--json-tree-string-color, #cb3f41);--symbol-color:var(--json-tree-symbol-color, #cb3f41);--boolean-color:var(--json-tree-boolean-color, #112aa7);--function-color:var(--json-tree-function-color, #112aa7);--number-color:var(--json-tree-number-color, #3029cf);--label-color:var(--json-tree-label-color, #871d8f);--property-color:var(--json-tree-property-color, #000000);--arrow-color:var(--json-tree-arrow-color, #727272);--operator-color:var(--json-tree-operator-color, #727272);--null-color:var(--json-tree-null-color, #8d8d8d);--undefined-color:var(--json-tree-undefined-color, #8d8d8d);--date-color:var(--json-tree-date-color, #8d8d8d);--internal-color:var(--json-tree-internal-color, grey);--regex-color:var(--json-tree-regex-color, var(--string-color));--li-identation:var(--json-tree-li-indentation, 1em);--li-line-height:var(--json-tree-li-line-height, 1.3);font-size:var(--json-tree-font-size, 12px);font-family:var(--json-tree-font-family, 'Courier New', Courier, monospace)}ul.svelte-16cw61f li{line-height:var(--li-line-height);display:var(--li-display, list-item);list-style:none}ul.svelte-16cw61f,ul.svelte-16cw61f ul{padding:0;margin:0}ul.svelte-16cw61f{margin-left:var(--li-identation)}ul.svelte-16cw61f{cursor:default}ul.svelte-16cw61f .label{color:var(--label-color)}ul.svelte-16cw61f .property{color:var(--property-color)}ul.svelte-16cw61f .internal{color:var(--internal-color)}ul.svelte-16cw61f .operator{color:var(--operator-color)}",
  map: null
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shouldExpandNode;
  let { value } = $$props;
  let { defaultExpandedPaths = [] } = $$props;
  let { defaultExpandedLevel = 0 } = $$props;
  const expanded = writable(true);
  useState({
    expanded,
    isParentExpanded: readable(true),
    root: true,
    shouldExpandNode: (opts) => shouldExpandNode(opts),
    level: 0,
    keyPath: []
  });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.defaultExpandedPaths === void 0 && $$bindings.defaultExpandedPaths && defaultExpandedPaths !== void 0)
    $$bindings.defaultExpandedPaths(defaultExpandedPaths);
  if ($$props.defaultExpandedLevel === void 0 && $$bindings.defaultExpandedLevel && defaultExpandedLevel !== void 0)
    $$bindings.defaultExpandedLevel(defaultExpandedLevel);
  $$result.css.add(css$1);
  shouldExpandNode = getShouldExpandNode({
    defaultExpandedPaths,
    defaultExpandedLevel
  });
  return `<ul class="${"svelte-16cw61f"}">${validate_component(Expandable, "Expandable").$$render($$result, { key: "$", expanded }, {}, {
    default: () => {
      return `${validate_component(JSONNode, "JSONNode").$$render($$result, { value }, {}, {})}`;
    }
  })}
</ul>`;
});
const css = {
  code: "label.svelte-frd81h.svelte-frd81h{cursor:pointer}section.svelte-frd81h.svelte-frd81h{display:flex;flex-direction:column;justify-content:center;align-items:stretch;flex:1}section.svelte-frd81h .intro.svelte-frd81h{align-self:center;max-width:750px}section.svelte-frd81h .intro p.svelte-frd81h{text-align:left}h1.svelte-frd81h.svelte-frd81h{width:100%}h2.svelte-frd81h.svelte-frd81h{font-weight:700}p.svelte-frd81h.svelte-frd81h{text-align:center}form.svelte-frd81h.svelte-frd81h{display:flex;flex-direction:column;text-align:center;align-items:stretch}form.svelte-frd81h>.svelte-frd81h{padding:10px 20px;margin:10px 0}form.svelte-frd81h label.svelte-frd81h,form.svelte-frd81h input.svelte-frd81h{flex:0 0 100%}form.svelte-frd81h .submitButtons.svelte-frd81h{display:flex;flex-direction:row;justify-content:center}form.svelte-frd81h button.svelte-frd81h{cursor:pointer;padding:10px 20px;margin:10px 10px}.speechOutputContainer.svelte-frd81h.svelte-frd81h,.navigateTheTreeContainer.svelte-frd81h.svelte-frd81h,.jsonTreeContainer.svelte-frd81h.svelte-frd81h{margin-top:20px;background:white;padding:20px;border:2px solid #333}.speechOutputContainer.svelte-frd81h h2.svelte-frd81h,.navigateTheTreeContainer.svelte-frd81h h2.svelte-frd81h,.jsonTreeContainer.svelte-frd81h h2.svelte-frd81h{margin-bottom:20px;text-align:center}.loadingProgress.svelte-frd81h.svelte-frd81h{display:flex;flex-direction:column;align-items:stretch;justify-content:center}.loadingProgress.svelte-frd81h span.svelte-frd81h{display:flex;justify-content:center}.speechOutputContainer.svelte-frd81h.svelte-frd81h{text-align:center}.navigateTheTreeContainer__buttons.svelte-frd81h.svelte-frd81h{display:flex;justify-content:center}.navigateTheTreeContainer__buttons.svelte-frd81h button.svelte-frd81h{cursor:pointer;padding:10px 20px;margin:10px}.jsonTreeContainer.svelte-frd81h.svelte-frd81h{--json-tree-font-size:14px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let readNextBtn, readPrevBtn, requestedUrlInput;
  let requestedUrl = "https://www.smashingmagazine.com/2021/09/simplifying-form-styles-accent-color/";
  let dataSubmissionTermsAccepted = false;
  let a11yTreeResult = {};
  const installCode = `git clone https://github.com/mandrasch/screenreadthis.git
cd screenreadthis/
npm install
npm run dev -- --open`;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Screenread this!</title>`, ""}<meta name="${"description"}" content="${"Basic web accessibility testing should be possible without the need of installing screenreader software and without the need of learning the different keyboard shortcuts first."}" data-svelte="svelte-12e20yu"><!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`, ""}



<section class="${"svelte-frd81h"}"><h1 class="${"svelte-frd81h"}">ScreenreadThis!</h1>
	<div class="${"intro svelte-frd81h"}"><p class="${"svelte-frd81h"}">Experimental project which tries to find easier ways of learning about screenreader testing -
			without the need of learning all screenreader operation shortcuts first. No more excuses!
		</p>

		Install and use ScreenreadThis! locally:

		${validate_component(Highlight, "Highlight").$$render($$result, { language: bash$1, code: installCode }, {}, {})}

		<p class="${"svelte-frd81h"}">Built with SvelteKit and puppeteer retrieving the <a href="${"https://pptr.dev/api/puppeteer.accessibility.snapshot/"}">accessibility tree snapshot</a>.
		</p></div>

	<h2 style="${"font-size:1.8rem;font-weight:normal; text-align:center;"}" class="${"svelte-frd81h"}">Online demo</h2>

	<p style="${"max-width:750px;align-self:center;text-align:left;"}" class="${"svelte-frd81h"}">This demo currently runs on a free render.com tier and can be unavailable from time to time.
		If this demo currently doesn&#39;t work, here is a <a href="${"https://www.youtube.com/watch?v=svpjpAsGThU"}">demo video (YouTube)</a>
		or you can
		<a href="${"#"}">load a static demo example</a>.
	</p>


	<form class="${"svelte-frd81h"}"><label for="${"requestedUrl"}" class="${"svelte-frd81h"}">URL:</label>
		<input required id="${"requestedUrl"}" placeholder="${"https://"}" type="${"url"}" class="${"svelte-frd81h"}"${add_attribute("this", requestedUrlInput, 0)}${add_attribute("value", requestedUrl, 0)}>
		<div class="${"formField svelte-frd81h"}" style="${"display:flex;flex-direction:row;width:100%;"}"><input type="${"checkbox"}" style="${"flex-basis:2rem;width:2rem;"}" id="${"dataSubmissionTermsAcceptedCheckbox"}" class="${"svelte-frd81h"}"${add_attribute("checked", dataSubmissionTermsAccepted, 1)}>
			<label for="${"dataSubmissionTermsAcceptedCheckbox"}" style="${"margin-left:10px;font-size:0.9rem; text-align:left;flex: 1 1 100%;"}" class="${"svelte-frd81h"}">By submitting you accept that your browser connects to a render.com cloud server instance
				(server region: Frankfurt / Germany) and transmits the given URL in order to receive the
				accessibility tree result. See <a href="${"https://render.com/privacy"}">render.com/privacy</a> for
				all information.</label></div>
		<div class="${"submitButtons svelte-frd81h"}"><button type="${"submit"}" ${""} class="${"svelte-frd81h"}">Screenread this!</button>
			${``}</div></form>

	${``}

	<div id="${"result"}">
		
		<div class="${"navigateTheTreeContainer svelte-frd81h"}"><h2 class="${"svelte-frd81h"}">Screenread the page elements</h2>
			<div class="${"navigateTheTreeContainer__buttons svelte-frd81h"}"><button ${"disabled"} class="${"svelte-frd81h"}"${add_attribute("this", readPrevBtn, 0)}>\xAB Read prev</button>
				<button ${!a11yTreeResult.hasOwnProperty("children") ? "disabled" : ""} class="${"svelte-frd81h"}"${add_attribute("this", readNextBtn, 0)}>Read next \xBB</button></div>
			<p class="${"svelte-frd81h"}"><small>Hint: You can also use the keyboard arrow keys.</small></p></div>
		<div class="${"speechOutputContainer svelte-frd81h"}"><h2 class="${"svelte-frd81h"}">Current element</h2>
			${`${a11yTreeResult.hasOwnProperty("name") ? `Site title: ${escape(a11yTreeResult == null ? void 0 : a11yTreeResult.name)}` : ``}`}

			<p style="${"margin-top:30px;margin-bottom:0;"}" class="${"svelte-frd81h"}"><small>Please note: The speech output is generated by the browser via WebSpeech API. A real
					screenreader software would read this differently. This speech output is just meant for
					demonstrational purposes of the accessibility tree, not for serious accessibility testing.</small></p></div>
		<div class="${"jsonTreeContainer svelte-frd81h"}"><h2 class="${"svelte-frd81h"}">Full accessibility tree snapshot (via Puppeteer)</h2>

			${validate_component(Root, "JSONTree").$$render($$result, { value: a11yTreeResult }, {}, {})}
			<p class="${"svelte-frd81h"}"><small>The property &#39;htmlLangAttribute&#39; is not part of the accessibility tree, it&#39;s a custom
					addition by API server.</small></p></div>
		</div>
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-308688eb.js.map
