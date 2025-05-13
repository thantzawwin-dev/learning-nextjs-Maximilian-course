import Link from "next/link";

import { useRouter } from "next/router";

function ClientPage() {
  const router = useRouter();
  console.log("router.query", router.query);
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientsprojectid]",
      query: { id: "max", clientsprojectid: "project-a" },
    });
  }
  return (
    <div>
      <h1>ClientPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientPage;
