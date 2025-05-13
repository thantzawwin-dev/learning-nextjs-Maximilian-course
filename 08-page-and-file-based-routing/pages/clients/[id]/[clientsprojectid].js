import { useRouter } from "next/router";
function ClientsProjectPage() {
  const router = useRouter();

  console.log("router.query", router.query);
  return (
    <div>
      <h1>ClientsProjectPage</h1>
    </div>
  );
}

export default ClientsProjectPage;
