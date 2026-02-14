"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { BouquetFlower, BuilderStep } from "@/types";

interface BouquetContextType {
  selectedFlowers: string[];
  bouquetFlowers: BouquetFlower[];
  message: string;
  recipientName: string;
  senderName: string;
  currentStep: BuilderStep;
  mode: "color" | "mono";
  addFlower: (flowerId: string) => void;
  removeFlower: (flowerId: string) => void;
  setMessage: (message: string) => void;
  setRecipientName: (name: string) => void;
  setSenderName: (name: string) => void;
  setCurrentStep: (step: BuilderStep) => void;
  setMode: (mode: "color" | "mono") => void;
  arrangeBouquet: () => void;
  resetBouquet: () => void;
}

const BouquetContext = createContext<BouquetContextType | undefined>(undefined);

export function BouquetProvider({ children }: { children: ReactNode }) {
  const [selectedFlowers, setSelectedFlowers] = useState<string[]>([]);
  const [bouquetFlowers, setBouquetFlowers] = useState<BouquetFlower[]>([]);
  const [message, setMessage] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [currentStep, setCurrentStep] = useState<BuilderStep>("flowers");
  const [mode, setMode] = useState<"color" | "mono">("color");

  const addFlower = (flowerId: string) => {
    if (selectedFlowers.length < 10 && !selectedFlowers.includes(flowerId)) {
      setSelectedFlowers([...selectedFlowers, flowerId]);
    }
  };

  const removeFlower = (flowerId: string) => {
    setSelectedFlowers(selectedFlowers.filter((id) => id !== flowerId));
  };

  const arrangeBouquet = () => {
    const arranged: BouquetFlower[] = selectedFlowers.map((flowerId, index) => {
      const angle = (index / selectedFlowers.length) * 360;
      const radius = 80 + Math.random() * 40;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius * 0.6;
      const rotation = -30 + Math.random() * 60;

      return {
        flowerId,
        rotation,
        x: 150 + x,
        y: 150 + y,
      };
    });
    setBouquetFlowers(arranged);
  };

  const resetBouquet = () => {
    setSelectedFlowers([]);
    setBouquetFlowers([]);
    setMessage("");
    setRecipientName("");
    setSenderName("");
    setCurrentStep("flowers");
  };

  return (
    <BouquetContext.Provider
      value={{
        selectedFlowers,
        bouquetFlowers,
        message,
        recipientName,
        senderName,
        currentStep,
        mode,
        addFlower,
        removeFlower,
        setMessage,
        setRecipientName,
        setSenderName,
        setCurrentStep,
        setMode,
        arrangeBouquet,
        resetBouquet,
      }}
    >
      {children}
    </BouquetContext.Provider>
  );
}

export function useBouquet() {
  const context = useContext(BouquetContext);
  if (context === undefined) {
    throw new Error("useBouquet must be used within a BouquetProvider");
  }
  return context;
}
