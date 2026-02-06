import { getServerSession } from "next-auth";

export default async function PatientDashboard() {
  const session = await getServerSession();

  if (!session) return <h1>Access Denied</h1>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome {session.user?.name}</h1>
    </div>
  );
} 
