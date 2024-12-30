"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function FileDetailsPage() {
  const router = useRouter();
  const { fileId } = router.query; // Get fileId from the router query
  const [fileDetails, setFileDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!router.isReady || !fileId) return; // Wait until the router is ready and fileId is available

    // Simulate an API call to fetch file details
    const fetchFileDetails = async () => {
      try {
        setLoading(true);
        // Replace this mock data with an actual API call
        const mockFileDetails = {
          id: fileId,
          title: "Policy Draft",
          description: "This is a detailed draft for the new policy implementation.",
          status: "In Progress",
          workflow: ["Department A", "Department B", "Department C"],
          currentStep: "Department B",
        };
        setFileDetails(mockFileDetails);
        setLoading(false);
      } catch (err) {
        setError("Failed to load file details. Please try again.");
        setLoading(false);
      }
    };

    fetchFileDetails();
  }, [router.isReady, fileId]); // Ensure this effect only runs when router and fileId are ready

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>File Details</h1>
      {loading && <p>Loading file details...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && fileDetails && (
        <div style={{ marginTop: "20px" }}>
          <h2>{fileDetails.title}</h2>
          <p><strong>Description:</strong> {fileDetails.description}</p>
          <p><strong>Status:</strong> {fileDetails.status}</p>
          <p><strong>Current Step:</strong> {fileDetails.currentStep}</p>
          <h3>Workflow</h3>
          <ol>
            {fileDetails.workflow.map((step, index) => (
              <li
                key={index}
                style={{
                  color: step === fileDetails.currentStep ? "green" : "black",
                  fontWeight: step === fileDetails.currentStep ? "bold" : "normal",
                }}
              >
                {step}
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "20px" }}>
            <a
              href={`/file/${fileId}/workflow-edit`}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#0070f3",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Edit Workflow
            </a>
          </div>
        </div>
      )}
      {!loading && !error && !fileDetails && (
        <p>No details available for this file.</p>
      )}
    </div>
  );
}
