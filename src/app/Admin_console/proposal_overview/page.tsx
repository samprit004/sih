'use client';

import PNav from "@/components/admin_console/project_review/p_nav";
import Proposal from "@/components/admin_console/project_review/proposal";
import Preview from "@/components/admin_console/project_review/preview";
import { useEffect, useState } from "react";

export default function ProposalPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  // Extract the `id` directly
  const id = searchParams?.id;

  const [aiScore, setAiScore] = useState<string>("");
  const [aiResponse, setAiResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No ID provided in the query parameters.");
      setLoading(false);
      return;
    }

    const fetchProposal = async () => {
      try {
        const jsBody = { id };

        const response = await fetch("/api/get_proposal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsBody),
        });

        if (response.ok) {
          const data = await response.json();
          setAiScore(data.agent_score);
          setAiResponse(data.response);
        } else {
          setError("Proposal not found.");
        }
      } catch (error) {
        console.error("Error fetching proposal:", error);
        setError("An error occurred while fetching the proposal.");
      } finally {
        setLoading(false);
      }
    };

    fetchProposal();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <PNav />
      <div className="flex">
        <Proposal aiScore={aiScore} response={aiResponse} />
        <Preview />
      </div>
    </>
  );
}
