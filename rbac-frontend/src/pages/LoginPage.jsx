import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/store/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const { user, login, hydrated, init, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localErr, setLocalErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => { if (!hydrated) init(); }, [hydrated, init]);

  // If already logged in, bounce to their home
  useEffect(() => {
    if (hydrated && user?.role) {
      const base = user.role === "admin" ? "/admin" : user.role === "editor" ? "/editor" : "/viewer";
      navigate(base, { replace: true });
    }
  }, [hydrated, user, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLocalErr("");
    try {
      const u = await login(email, password);
      const base = u.role === "admin" ? "/admin" : u.role === "editor" ? "/editor" : "/viewer";
      navigate(base, { replace: true });
    } catch (e) {
      setLocalErr(e.message || "Login failed");
    }
  };

  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader><CardTitle>Log in</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label>Email</Label>
              <Input placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            {(localErr || error) && <div className="text-xs text-red-600">{localErr || error}</div>}
            <Button className="w-full" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
