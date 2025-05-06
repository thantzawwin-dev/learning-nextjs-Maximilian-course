import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5;
// This page will be revalidated every 5 seconds

// export const dynamic = "force-dynamic";
// This page will always be revalidated on every request

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: {
  //     tags: ["msg"],
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
