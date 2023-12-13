globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, getRequestHeader, setResponseHeader, getRequestHeaders, getRequestHost, getRequestProtocol, getQuery as getQuery$1, setHeader, getHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, createError } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/h3/dist/index.mjs';
import { createRenderer } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/devalue/index.js';
import { renderToString } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/vue/server-renderer/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withLeadingSlash, withBase, withTrailingSlash, withoutTrailingSlash, withHttps, withoutProtocol } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/node_modules/radix3/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const P=E(!0);return P[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const I=B(),d=I.name;function n(e){return e?e!=="false":!1}const l=globalThis.process?.platform||"",T=n(s.CI)||I.ci!==!1,a=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const c=t==="test"||n(s.TEST);n(s.MINIMAL)||T||c||!a;const C=/^win/i.test(l);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(a||C)&&s.TERM!=="dumb"||T);const R=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(R?.split(".")[0])||null;const w=globalThis.process||Object.create(null),_={versions:{}};new Proxy(w,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in _)return _[o]}});const L=!!globalThis.Netlify,A=!!globalThis.EdgeRuntime,D=globalThis.navigator?.userAgent==="Cloudflare-Workers",O=!!globalThis.Deno,S=!!globalThis.__lagon__,N=globalThis.process?.release?.name==="node",u=!!globalThis.Bun||!!globalThis.process?.versions?.bun,b=!!globalThis.fastly,G=[[L,"netlify"],[A,"edge-light"],[D,"workerd"],[O,"deno"],[S,"lagon"],[N,"node"],[u,"bun"],[b,"fastly"]];function K(){const e=G.find(o=>o[0]);if(e)return {name:e[1]}}const g=K();g?.name||"";

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      }
    }
  },
  "public": {
    "site": {
      "_context": {
        "defaultLocale": "defaults",
        "trailingSlash": "defaults",
        "titleSeparator": "defaults",
        "name": "package.json",
        "indexable": "system",
        "debug": "nuxt:config:site"
      },
      "defaultLocale": "en",
      "trailingSlash": false,
      "titleSeparator": "|",
      "name": "nuxt-app",
      "indexable": false,
      "debug": false
    }
  },
  "silverStripeToken": "",
  "silverStripeApi": "",
  "nuxt-simple-sitemap": {
    "version": "3.1.4",
    "moduleConfig": {
      "autoLastmod": true,
      "xsl": "/__sitemap__/style.xsl",
      "xslTips": true,
      "cacheTtl": 3600000,
      "defaultSitemapsChunkSize": 1000,
      "runtimeCacheStorage": "default",
      "autoAlternativeLangPrefixes": "",
      "credits": true,
      "defaults": {},
      "xslColumns": [
        {
          "label": "URL",
          "width": "50%"
        },
        {
          "label": "Images",
          "width": "25%",
          "select": "count(image:image)"
        },
        {
          "label": "Last Updated",
          "width": "25%",
          "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
        }
      ],
      "include": [],
      "exclude": [],
      "sitemaps": false,
      "sitemapName": "sitemap.xml",
      "dynamicUrlsApiEndpoint": "/api/_sitemap-urls",
      "urls": [],
      "debug": false,
      "discoverImages": true
    },
    "buildTimeMeta": {
      "isNuxtContentDocumentDriven": false,
      "hasApiRoutesUrl": false,
      "hasPrerenderedRoutesPayload": false,
      "prerenderSitemap": false,
      "version": "3.1.4"
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
window.__NUXT_DEVTOOLS_TIME_METRIC__ = window.__NUXT_DEVTOOLS_TIME_METRIC__ || {}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _IAANtwnsOO = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _IAANtwnsOO
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      if (!event.handled) {
        event.node.res.setHeader("Content-Type", "image/x-icon");
        event.node.res.end(
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.handled) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection]", err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro] [uncaughtException]", err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

function createSiteConfigStack() {
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    stack.push(input);
  }
  function get() {
    const siteConfig = {
      _context: {}
    };
    for (const o in stack) {
      for (const k in stack[o]) {
        const key = k;
        const val = stack[o][k];
        if (!k.endsWith("context") && typeof val !== "undefined") {
          siteConfig[k] = val;
          siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined")
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  return config;
}
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base);
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const origin = options.absolute ? options.siteUrl : "";
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  const isFileUrl = $url.pathname.includes(".");
  if (isFileUrl)
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function useSiteConfig(e) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  return e.context.siteConfig.get();
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port;
  port = process.env.NITRO_PORT || process.env.PORT || "3000";
  let protocol = cert && key || !true ? "https" : "http";
  if (!e) {
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
      host = withoutProtocol(origin);
      protocol = origin.includes("https") ? "https" : "http";
    }
  } else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return `${protocol}://${host}${port}/`;
}

function updateSiteConfig(e, input) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  e.context.siteConfig.push(input);
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig().app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const _DJMFB2 = defineEventHandler((e) => {
  if (!e.context.siteConfig) {
    const appConfig = useAppConfig();
    const nitroOrigin = useNitroOrigin(e);
    e.context.siteConfigNitroOrigin = nitroOrigin;
    const { public: publicRuntimeConfig } = useRuntimeConfig();
    updateSiteConfig(e, {
      _context: "nitro:init",
      url: nitroOrigin
    });
    updateSiteConfig(e, publicRuntimeConfig.site);
    if (appConfig.site) {
      updateSiteConfig(e, {
        _context: "app:config",
        ...appConfig.site
      });
    }
    if (e.context._nitro.routeRules.site) {
      updateSiteConfig(e, {
        _context: "route-rules",
        ...e.context._nitro.routeRules.site
      });
    }
  }
});

async function resolveUrls(urls) {
  if (typeof urls === "function")
    urls = urls();
  urls = await urls;
  return urls;
}
async function resolveAsyncDataSources(input) {
  const { hasPrerenderedRoutesPayload, isNuxtContentDocumentDriven } = input.buildTimeMeta;
  const entries = [];
  entries.push({
    context: "pages",
    urls: input.pages
  });
  if (input.prerenderUrls) {
    entries.push({
      context: "prerender",
      urls: input.prerenderUrls
    });
  }
  if (input.extraRoutes.prerenderUrls.length) {
    entries.push({
      context: "nuxt-config.nitro-prerender",
      urls: input.extraRoutes.prerenderUrls
    });
  }
  if (input.extraRoutes.routeRules.length) {
    entries.push({
      context: "nuxt-config.route-rules",
      urls: input.extraRoutes.routeRules
    });
  }
  entries.push({
    context: "nuxt-config.module",
    path: "urls",
    urls: await resolveUrls(input.moduleConfig.urls)
  });
  function doFetch(url, timeout = 8e3) {
    const context = "api";
    const start = Date.now();
    const timeoutController = new AbortController();
    const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
    let isHtmlResponse = false;
    return globalThis.$fetch(url, {
      responseType: "json",
      signal: timeoutController.signal,
      headers: {
        Accept: "application/json"
      },
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    }).then((urls) => {
      const timeTakenMs = Date.now() - start;
      if (isHtmlResponse) {
        entries.push({
          context,
          timeTakenMs,
          urls: [],
          path: url,
          error: "Received HTML response instead of JSON"
        });
      } else {
        entries.push({
          context,
          timeTakenMs,
          path: url,
          urls
        });
      }
    }).catch((err) => {
      entries.push({
        context,
        urls: [],
        path: url,
        error: err
      });
    }).finally(() => {
      abortRequestTimeout && clearTimeout(abortRequestTimeout);
    });
  }
  const waitables = [];
  async function loadSitemapSources(sitemap) {
    if (sitemap.urls) {
      entries.push({
        context: "nuxt-config.module",
        path: `sitemaps.${sitemap.sitemapName}.urls`,
        urls: await resolveUrls(sitemap.urls)
      });
    }
    if (sitemap.dynamicUrlsApiEndpoint)
      waitables.push(doFetch(sitemap.dynamicUrlsApiEndpoint));
  }
  if (input.buildTimeMeta.hasApiRoutesUrl)
    waitables.push(doFetch(input.moduleConfig.dynamicUrlsApiEndpoint));
  if (!input.sitemap && typeof input.moduleConfig.sitemaps === "object") {
    for (const entry of Object.entries(input.moduleConfig.sitemaps)) {
      const [sitemapName, sitemap] = entry;
      await loadSitemapSources({
        sitemapName,
        ...sitemap
      });
    }
  } else if (input.sitemap) {
    await loadSitemapSources(input.sitemap);
  }
  if (hasPrerenderedRoutesPayload)
    waitables.push(doFetch(input.canonicalUrlResolver("/__sitemap__/routes.json"), 1500));
  if (isNuxtContentDocumentDriven)
    waitables.push(doFetch("/api/__sitemap__/document-driven-urls", 4e3));
  await Promise.all(waitables);
  return entries;
}

function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, ...options }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = defu$1(item, res[k] || {});
  });
  return Object.values(res);
}

async function normaliseSitemapData(data, options) {
  const {
    defaults,
    exclude,
    include,
    autoLastmod,
    autoAlternativeLangPrefixes
  } = options.moduleConfig;
  const combinedInclude = [...options.sitemap?.include || [], ...include || []];
  const combinedExclude = [...options.sitemap?.exclude || [], ...exclude || []];
  const urlFilter = createFilter({ include: combinedInclude, exclude: combinedExclude });
  function resolve(s) {
    if (!s)
      return;
    s = typeof s === "string" ? s : s.toString();
    if (hasProtocol(s, { acceptRelative: true, strict: false }))
      return s;
    return options.canonicalUrlResolver(s);
  }
  const defaultEntryData = defu$1(options.sitemap?.defaults, defaults);
  if (autoLastmod)
    defaultEntryData.lastmod = defaultEntryData.lastmod || /* @__PURE__ */ new Date();
  const entries = data.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => {
    e = { ...e };
    if (e.url) {
      e.loc = e.url;
      delete e.url;
    }
    e.loc = fixSlashes(false, e.loc);
    e = defu$1(e, defaultEntryData);
    return e;
  }).map((e) => {
    const routeRules = options.getRouteRulesForPath(e.loc);
    if (routeRules.index === false)
      return false;
    return defu$1(routeRules.sitemap || {}, e);
  }).filter((e) => e && urlFilter(e.loc));
  if (Array.isArray(autoAlternativeLangPrefixes)) {
    entries.map((e) => {
      e.alternatives = e.alternatives || [
        { hreflang: "x-default", href: e.loc },
        ...autoAlternativeLangPrefixes.map((prefix) => ({
          hreflang: prefix,
          href: joinURL(prefix, e.loc)
        }))
      ];
      return e;
    });
  }
  function normaliseEntry(e) {
    if (e.lastmod) {
      const date = normaliseDate(e.lastmod);
      if (date)
        e.lastmod = date;
      else
        delete e.lastmod;
    }
    if (!e.lastmod)
      delete e.lastmod;
    e.loc = resolve(e.loc);
    if (e.alternatives) {
      e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
        const a = { ...e2 };
        a.href = resolve(typeof a.href === "string" ? a.href : a.href.href);
        a.key = `${a.hreflang}:${a.href}`;
        return a;
      }), "key").map((e2) => {
        delete e2.key;
        return e2;
      });
    }
    if (e.images) {
      e.images = mergeOnKey(e.images.map((i) => {
        i = { ...i };
        i.loc = resolve(i.loc);
        return i;
      }), "loc");
    }
    if (e.videos) {
      e.videos = e.videos.map((v) => {
        v = { ...v };
        v.contentLoc = resolve(v.contentLoc);
        return v;
      });
    }
    return e;
  }
  function normaliseEntries(entries2) {
    return mergeOnKey(entries2.map(normaliseEntry), "loc").sort((a, b) => {
      if (a.loc > b.loc)
        return 1;
      if (a.loc < b.loc)
        return -1;
      return 0;
    }).sort((a, b) => {
      const aSegments = a.loc.split("/").length;
      const bSegments = b.loc.split("/").length;
      if (aSegments > bSegments)
        return 1;
      if (aSegments < bSegments)
        return -1;
      return 0;
    });
  }
  const ctx = { urls: normaliseEntries(entries), sitemapName: options.sitemap?.sitemapName || "sitemap" };
  if (options.callHook)
    await options.callHook(ctx);
  return normaliseEntries(ctx.urls);
}
function normaliseDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (!(d instanceof Date))
    return false;
  const z = (n) => `0${n}`.slice(-2);
  return `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}+00:00`;
}

const pages = [];

const routeRules = [];
const prerenderUrls = [];
const extraRoutes = { routeRules, prerenderUrls };

const _U7VQiB = defineEventHandler(async (e) => {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  let sitemap;
  const sitemapName = getQuery$1(e).sitemap;
  if (sitemapName) {
    if (typeof moduleConfig.sitemaps === "object" && moduleConfig.sitemaps[sitemapName])
      sitemap = { sitemapName, ...moduleConfig.sitemaps[sitemapName] };
  }
  const config = { ...moduleConfig };
  delete config.urls;
  const sources = (await resolveAsyncDataSources({
    moduleConfig,
    sitemap,
    buildTimeMeta,
    getRouteRulesForPath,
    extraRoutes,
    canonicalUrlResolver: createSitePathResolver(e, { canonical: !true, absolute: true, withBase: true }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true }),
    pages
  })).map((d) => {
    d.count = d.urls.length;
    return d;
  });
  return {
    _sources: [...sources].filter((s) => {
      return s.urls.length > 0 || s.error;
    }).map((s) => {
      s = { ...s };
      s.urls = s.urls.length || 0;
      return s;
    }),
    moduleConfig: config,
    buildTimeMeta,
    sources
  };
});

const _XLTXZ9 = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/xslt+xml");
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { version, moduleConfig } = useRuntimeConfig()["nuxt-simple-sitemap"];
  const creditName = `<a href="https://github.com/harlan-zw/nuxt-simple-sitemap" style="color: black; font-weight: 500;" target="_blank" rel="noopener">Nuxt
            Simple Sitemap</a> v${version}`;
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const isNotIndexButHasIndex = referrer !== fixPath("/sitemap.xml") && parseURL(referrer).pathname.endsWith("-sitemap.xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || void 0;
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the  <a href="nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it.',
    `URLs missing? Check the <a href="${withQuery("/api/__sitemap__/debug", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  const tips = conditionalTips.map((t) => `<li><p>${t}</p></li>`).join("\n");
  const showTips = moduleConfig.xslTips !== false;
  let columns = [...moduleConfig.xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-5">${siteName} XML Sitemap</h1>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${showTips ? `<div class="w-30 top-2 shadow rounded p-5 right-2" style="margin: 0 auto;"><p><strong>Sitemap Tips</strong></p><ul style="margin: 1rem; padding: 0;">${tips}</ul><p style="margin-top: 1rem;">${creditName}</p></div>` : ""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function wrapSitemapXml(input, { xsl, credits, version }) {
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by Nuxt Simple Sitemap V${version} -->`);
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function buildSitemap(options) {
  const sitemapsConfig = options.moduleConfig.sitemaps;
  const sources = await resolveAsyncDataSources(options);
  let entries = await normaliseSitemapData(sources.map((e) => e.urls).flat(), options);
  if (sitemapsConfig === true && options.moduleConfig.defaultSitemapsChunkSize)
    entries = entries.slice(Number(options.sitemap?.sitemapName) * options.moduleConfig.defaultSitemapsChunkSize, (Number(options.sitemap?.sitemapName) + 1) * options.moduleConfig.defaultSitemapsChunkSize);
  const ctx = { urls: entries, sitemapName: options?.sitemap?.sitemapName || "sitemap" };
  await options.callHook?.(ctx);
  const resolveKey = (k) => {
    switch (k) {
      case "images":
        return "image";
      case "videos":
        return "video";
      default:
        return k;
    }
  };
  const handleArray = (key, arr) => {
    if (arr.length === 0)
      return false;
    key = resolveKey(key);
    if (key === "alternatives") {
      return arr.map((obj) => [
        `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
      ].join("\n")).join("\n");
    }
    return arr.map((obj) => [
      `        <${key}:${key}>`,
      ...Object.entries(obj).map(([sk, sv]) => `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`),
      `        </${key}:${key}>`
    ].join("\n")).join("\n");
  };
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...ctx.urls?.map((e) => `    <url>
${Object.keys(e).map((k) => Array.isArray(e[k]) ? handleArray(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`).filter((l) => l !== false).join("\n")}
    </url>`) ?? [],
    "</urlset>"
  ], {
    xsl: options.moduleConfig.xsl ? options.relativeBaseUrlResolver(options.moduleConfig.xsl) : false,
    credits: options.moduleConfig.credits,
    version: options.buildTimeMeta.version
  });
}

async function setupCache(e, key) {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  const baseCacheKey = moduleConfig.runtimeCacheStorage === "default" ? `/cache/nuxt-simple-sitemap${buildTimeMeta.version}` : `/nuxt-simple-sitemap/${buildTimeMeta.version}`;
  prefixStorage(useStorage(), `${baseCacheKey}/sitemaps`);
  let xSitemapCacheHeader = "MISS";
  let xSitemapCacheExpires = 0;
  typeof getQuery$1(e).purge !== "undefined";
  let cachedSitemap = false;
  setHeader(e, "x-sitemap-cache", xSitemapCacheHeader);
  setHeader(e, "x-sitemap-cache-expires", xSitemapCacheExpires.toString());
  return {
    cachedSitemap,
    cache: async (sitemap) => {
    }
  };
}

const _PGfVdx = defineEventHandler(async (e) => {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  if (moduleConfig.sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 302 );
  }
  const { cachedSitemap, cache } = await setupCache(e, "sitemap", getQuery$1(e).purge);
  let sitemap = cachedSitemap;
  if (!cachedSitemap) {
    const nitro = useNitroApp();
    const callHook = async (ctx2) => {
      await nitro.hooks.callHook("sitemap:resolved", ctx2);
    };
    const canonicalQuery = getQuery$1(e).canonical;
    const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
    sitemap = await buildSitemap({
      moduleConfig,
      extraRoutes,
      buildTimeMeta,
      canonicalUrlResolver: createSitePathResolver(e, { canonical: isShowingCanonical || !true, absolute: true, withBase: true }),
      relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true }),
      getRouteRulesForPath,
      callHook,
      pages
    });
    const ctx = { sitemap, sitemapName: "sitemap" };
    await nitro.hooks.callHook("sitemap:output", ctx);
    sitemap = ctx.sitemap;
    await cache(sitemap);
  }
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  return sitemap;
});

const _lazy_01t5g5 = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_01t5g5, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _DJMFB2, lazy: false, middleware: true, method: undefined },
  { route: '/api/__sitemap__/debug', handler: _U7VQiB, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _XLTXZ9, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _PGfVdx, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_01t5g5, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (C) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template$1
});

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('/Users/thijslooijen/Documents/GitHub/Nuxt-skeleton/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}">${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : "";
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null ,
      NO_SCRIPTS ? null : _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      NO_SCRIPTS ? void 0 : renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) ,
      routeOptions.experimentalNoScripts ? void 0 : _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(`<style>${style}</style>`);
      }
    }
  }
  return Array.from(inlinedStyles).join("");
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const attrs = [
    'type="application/json"',
    `id="${opts.id}"`,
    `data-ssr="${!(opts.ssrContext.noSSR)}"`,
    opts.src ? `data-src="${opts.src}"` : ""
  ].filter(Boolean);
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  return `<script ${attrs.join(" ")}>${contents}<\/script><script>window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}<\/script>`;
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _virtual__headStatic
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: styles
});

const template = "<svg class=\"nuxt-spa-loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 37 25\" fill=\"none\" width=\"80\"><path d=\"M24.236 22.006h10.742L25.563 5.822l-8.979 14.31a4 4 0 0 1-3.388 1.874H2.978l11.631-20 5.897 10.567\"/></svg><style>.nuxt-spa-loading {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.nuxt-spa-loading>path {\n  fill: none;\n  stroke: #00DC82;\n  stroke-width: 4px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 128;\n  stroke-dashoffset: 128;\n  animation: nuxt-spa-loading-move 3s linear infinite;\n}\n@keyframes nuxt-spa-loading-move {\n  100% {\n    stroke-dashoffset: -128;\n  }\n}</style>";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template
});
//# sourceMappingURL=index.mjs.map
