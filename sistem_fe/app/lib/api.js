const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const fileUrl = (p) => (p ? (p.startsWith("http") ? p : `${BASE}/${p}`) : "");

async function req(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, opts);
  if (!res.ok) throw new Error((await res.text()) || "Permintaan gagal");
  return res.status === 204 ? null : res.json();
}

export const api = {
  list: async (ep) => {
    const d = await req(ep);
    return Array.isArray(d) ? d : d.data || [];
  },
  // body: FormData (jika ada file) atau object biasa
  save: (ep, id, body) => {
    const isForm = body instanceof FormData;
    return req(id ? `${ep}/${id}` : ep, {
      method: id ? "PUT" : "POST",
      headers: isForm ? undefined : { "Content-Type": "application/json" },
      body: isForm ? body : JSON.stringify(body),
    });
  },
  remove: (ep, id) => req(`${ep}/${id}`, { method: "DELETE" }),
};