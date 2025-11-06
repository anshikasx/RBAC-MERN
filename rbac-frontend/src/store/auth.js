import { create } from "zustand";
import { api } from "@/api/axios";

export const useAuth = create((set, get) => ({
  user: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post("/auth/login", { email, password });
      set({ user: data.user, loading: false, error: null });
      return data.user;
    } catch (err) {
      const msg = err?.response?.data?.error || "Login failed";
      set({ error: msg, loading: false });
      throw new Error(msg);
    }
  },

  logout: async () => {
    try { await api.post("/auth/logout"); } catch {}
    set({ user: null, error: null });
  },
}));
