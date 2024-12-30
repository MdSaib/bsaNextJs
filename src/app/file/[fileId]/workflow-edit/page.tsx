"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function EditWorkflowPage() {
  const router = useRouter();
  const { fileId } = router.query;

  const [workflow, setWorkflow] = useState([]);
  const [newStep, setNewStep] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady || !fileId) return;

    const fetchWorkflow = async () => {
      try {
        setIsLoading(true);
        const mockWorkflow = ["Department A", "Department B", "Department C"];
        setWorkflow(mockWorkflow);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load workflow. Please try again.");
        setIsLoading(false);
      }
    };

    fetchWorkflow();
  }, [router.isReady, fileId]);

  const handleAddStep = () => {
    if (!newStep.trim()) {
      setError("Workflow step cannot be empty.");
      return;
    }
    if (workflow.some((step) => step.toLowerCase() === newStep.toLowerCase())) {
      setError("This step already exists in the workflow.");
      return;
    }
    setWorkflow([...workflow, newStep.trim()]);
    setNewStep("");
    setError("");
  };

  const handleSaveWorkflow = async () => {
    try {
      setIsSaving(true);
      setSuccessMessage("");
      setError("");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setSuccessMessage("Workflow updated successfully!");
    } catch (err) {
      setError("Failed to save workflow. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleRemoveStep = (index) => {
    const updatedWorkflow = workflow.filter((_, i) => i !== index);
    setWorkflow(updatedWorkflow);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Edit Workflow</h1>
      <p style={{ textAlign: "center" }}>
        Modify the workflow for File ID: {fileId}
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {isLoading ? (
        <p>Loading workflow...</p>
      ) : (
        <>
          {workflow.length === 0 && (
            <p>No steps in the workflow. Add a new step to get started!</p>
          )}
          <ul>
            {workflow.map((step, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {step}
                <button
                  onClick={() => handleRemoveStep(index)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    padding: "5px 10px",
                    marginLeft: "10px",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px" }}>
            <input
              type="text"
              value={newStep}
              onChange={(e) => setNewStep(e.target.value)}
              placeholder="Add a new step"
              style={{
                width: "calc(100% - 120px)",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleAddStep}
              disabled={isSaving}
              style={{
                background: isSaving ? "#ccc" : "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: isSaving ? "not-allowed" : "pointer",
                padding: "10px 20px",
                marginLeft: "10px",
              }}
            >
              Add Step
            </button>
          </div>
          <button
            onClick={handleSaveWorkflow}
            disabled={isSaving}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "10px",
              backgroundColor: isSaving ? "#ccc" : "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: isSaving ? "not-allowed" : "pointer",
            }}
          >
            {isSaving ? "Saving..." : "Save Workflow"}
          </button>
        </>
      )}
    </div>
  );
}
