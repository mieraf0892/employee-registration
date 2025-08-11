// src/pages/LoginPage.tsx
import EmployeeLogin from "../components/EmployeeLogin";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <EmployeeLogin />
      </div>
    </main>
  );
}
