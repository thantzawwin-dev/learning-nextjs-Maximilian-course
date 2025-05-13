import React from "react";
import { useRouter } from "next/router";

function ProjectsOfAGivenClient() {
  const router = useRouter();

  console.log("router.query", router.query);
  return (
    <div>
      <h1>ProjectsOfAGivenClient</h1>
    </div>
  );
}

export default ProjectsOfAGivenClient;
