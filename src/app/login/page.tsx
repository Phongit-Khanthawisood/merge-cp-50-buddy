// import { auth } from "@/lib/firebase";

import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RegisterForm />
    </div>
  );
}
