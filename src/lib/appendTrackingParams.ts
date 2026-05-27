const DEFAULT_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "ttclid",
] as const;

type AppendTrackingParamsOptions = {
  keys?: readonly string[];
};

function mergeTrackingParams(baseUrl: string, search: string, keys: readonly string[]) {
  const incoming = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const [path, existingQuery = ""] = baseUrl.split("?");
  const merged = new URLSearchParams(existingQuery);

  for (const key of keys) {
    const value = incoming.get(key);
    if (!value || merged.has(key)) continue;
    merged.set(key, value);
  }

  const query = merged.toString();
  return query ? `${path}?${query}` : path;
}

export function appendTrackingParams(baseUrl: string, search: string, options: AppendTrackingParamsOptions = {}) {
  const keys = options.keys ?? DEFAULT_KEYS;

  try {
    const base = new URL(baseUrl);
    const incoming = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);

    for (const key of keys) {
      const value = incoming.get(key);
      if (!value) continue;
      if (base.searchParams.has(key)) continue;
      base.searchParams.set(key, value);
    }

    return base.toString();
  } catch {
    return mergeTrackingParams(baseUrl, search, keys);
  }
}

