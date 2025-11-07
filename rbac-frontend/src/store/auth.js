import { create } from "zustand";
import { api } from "@/api/axios";

export const useAuth = create((set, get) => ({
  user: null,
  loading: false,
  error: null,
  hydrated: false,

  init: async () => {
    const { hydrated } = get();
    if (hydrated) return;
    set({ loading: true, error: null });
    try {
      const { data } = await api.get("/auth/me");
      set({ user: data?.user || data || null, loading: false, hydrated: true });
    } catch {
      set({ user: null, loading: false, hydrated: true });
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post("/auth/login", { email, password });
      const user = data?.user;
      if (user) {
        set({ user, loading: false, hydrated: true });
        return user;
      }
      const me = await api.get("/auth/me");
      set({ user: me.data?.user || me.data || null, loading: false, hydrated: true });
      return me.data?.user || me.data || null;
    } catch (err) {
      const msg = err?.response?.data?.error || "Login failed";
      set({ error: msg, loading: false });
      throw new Error(msg);
    }
  },

  logout: async () => {
    try { await api.post("/auth/logout"); } catch {}
    set({ user: null, error: null, hydrated: true });
  },
}));
