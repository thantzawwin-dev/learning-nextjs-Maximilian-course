"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit({ action }) {
  const { pending: isPending } = useFormStatus();

  return <button disabled={isPending}>{isPending ? "Submitting..." : "Share Meal"}</button>;
}
