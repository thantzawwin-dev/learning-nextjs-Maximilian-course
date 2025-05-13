import { useRouter } from "next/router";

function PortfolioProjectPage(props) {
  const router = useRouter();
  const projectid = router.query.projectid;
  return (
    <div>
      <h1>Portfolio Project Page: {projectid}</h1>
    </div>
  );
}

export default PortfolioProjectPage;
