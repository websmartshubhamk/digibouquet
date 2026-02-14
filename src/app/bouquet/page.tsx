"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Link from "next/link";
import { useBouquet } from "@/context/BouquetContext";
import FlowerPicker from "@/components/FlowerPicker";
import BouquetPreview from "@/components/BouquetPreview";
import MessageForm from "@/components/MessageForm";

function BouquetBuilderContent() {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");

  const {
    currentStep,
    setCurrentStep,
    selectedFlowers,
    setMode,
    arrangeBouquet,
    resetBouquet,
    message,
    recipientName,
    senderName,
    mode,
  } = useBouquet();

  useEffect(() => {
    if (modeParam === "mono" || modeParam === "color") {
      setMode(modeParam);
    }
  }, [modeParam, setMode]);

  const canProceed = () => {
    switch (currentStep) {
      case "flowers":
        return selectedFlowers.length >= 6;
      case "arrange":
        return true;
      case "message":
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    switch (currentStep) {
      case "flowers":
        arrangeBouquet();
        setCurrentStep("arrange");
        break;
      case "arrange":
        setCurrentStep("message");
        break;
      case "message":
        setCurrentStep("preview");
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "arrange":
        setCurrentStep("flowers");
        break;
      case "message":
        setCurrentStep("arrange");
        break;
      case "preview":
        setCurrentStep("message");
        break;
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "digibouquet",
      text: `${senderName ? `From ${senderName}: ` : ""}${message || "A digital bouquet for you!"}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
            digibouquet
          </Link>
          <p className="text-xs tracking-wider text-gray-500 mt-2 uppercase">
            {mode === "mono" ? "black & white mode" : "color mode"}
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {["flowers", "arrange", "message", "preview"].map((step, index) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentStep === step ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="mb-12">
          {currentStep === "flowers" && <FlowerPicker />}

          {currentStep === "arrange" && (
            <div className="text-center">
              <p className="text-sm tracking-wider uppercase mb-8">
                Your bouquet
              </p>
              <BouquetPreview />
              <p className="text-xs text-gray-500 mt-4">
                Hover over flowers to see them bloom
              </p>
            </div>
          )}

          {currentStep === "message" && (
            <div>
              <p className="text-center text-sm tracking-wider uppercase mb-8">
                Add a personal message
              </p>
              <MessageForm />
            </div>
          )}

          {currentStep === "preview" && (
            <div className="text-center">
              <BouquetPreview />

              {recipientName && (
                <p className="mt-8 text-lg">
                  To: <span className="font-bold">{recipientName}</span>
                </p>
              )}

              {message && (
                <p className="mt-4 text-gray-600 italic max-w-sm mx-auto">
                  &ldquo;{message}&rdquo;
                </p>
              )}

              {senderName && (
                <p className="mt-4 text-sm">
                  From: <span className="font-bold">{senderName}</span>
                </p>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          {currentStep !== "flowers" && (
            <button onClick={handleBack} className="btn-primary">
              Back
            </button>
          )}

          {currentStep !== "preview" ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="btn-primary"
            >
              Next
            </button>
          ) : (
            <div className="flex gap-4">
              <button onClick={handleShare} className="btn-primary">
                Share
              </button>
              <button
                onClick={() => {
                  resetBouquet();
                  setCurrentStep("flowers");
                }}
                className="btn-primary"
              >
                New Bouquet
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function BouquetBuilder() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BouquetBuilderContent />
    </Suspense>
  );
}
