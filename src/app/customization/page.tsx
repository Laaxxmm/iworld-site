"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll, useInView, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ArrowRight, ArrowLeft, User, Smartphone, Layout, Box, Layers, Monitor, PenTool, Zap } from "lucide-react";
import Image from "next/image";

interface ColorOptionProps {
  color: string;
  label: string;
  onSelect: (color: string) => void;
  isSelected: boolean;
}

const ColorOption: React.FC<ColorOptionProps> = ({ color, label, onSelect, isSelected }) => {
  return (
    <motion.button
      className={`w-12 h-12 rounded-full border-2 ${isSelected ? "border-primary" : "border-transparent"} shadow-md hover:scale-110 transition-transform duration-300`}
      style={{ backgroundColor: color }}
      onClick={() => onSelect(color)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="sr-only">{label}</span>
    </motion.button>
  );
};

interface MaterialOptionProps {
  material: string;
  label: string;
  onSelect: (material: string) => void;
  isSelected: boolean;
}

const MaterialOption: React.FC<MaterialOptionProps> = ({ material, label, onSelect, isSelected }) => {
  return (
    <motion.button
      className={`px-4 py-2 rounded-full border-2 ${isSelected ? "border-primary text-primary" : "border-secondary text-secondary"} hover:border-primary hover:text-primary transition-colors duration-300`}
      onClick={() => onSelect(material)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

interface ModulePreviewProps {
  color: string;
  material: string;
}

const ModulePreview: React.FC<ModulePreviewProps> = ({ color, material }) => {
  return (
    <motion.div className="relative w-full h-64 rounded-2xl bg-muted shadow-2xl shadow-black/10 overflow-hidden">
      {/* Placeholder for 3D Module Preview */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.05)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold z-10">
        Module Preview (Color: {color}, Material: {material})
      </div>
    </motion.div>
  );
};

interface CustomizationToolProps { }

const CustomizationTool: React.FC<CustomizationToolProps> = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("Aluminum");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleMaterialSelect = (material: string) => {
    setSelectedMaterial(material);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-[clamp(2rem,5vw,3.5rem)] font-lexend mb-8">Customize Your IWorld Device</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Configuration Options */}
          <div>
            <h3 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-lexend mb-4">Color Options</h3>
            <div className="flex space-x-4 mb-6">
              <ColorOption color="#FFFFFF" label="White" onSelect={handleColorSelect} isSelected={selectedColor === "#FFFFFF"} />
              <ColorOption color="#000000" label="Black" onSelect={handleColorSelect} isSelected={selectedColor === "#000000"} />
              <ColorOption color="#00FFCC" label="Cyan" onSelect={handleColorSelect} isSelected={selectedColor === "#00FFCC"} />
              <ColorOption color="#3D5AFE" label="Blue" onSelect={handleColorSelect} isSelected={selectedColor === "#3D5AFE"} />
            </div>

            <h3 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-lexend mb-4">Material Selection</h3>
            <div className="flex space-x-4 mb-6">
              <MaterialOption material="Aluminum" label="Aluminum" onSelect={handleMaterialSelect} isSelected={selectedMaterial === "Aluminum"} />
              <MaterialOption material="Titanium" label="Titanium" onSelect={handleMaterialSelect} isSelected={selectedMaterial === "Titanium"} />
              <MaterialOption material="Carbon Fiber" label="Carbon Fiber" onSelect={handleMaterialSelect} isSelected={selectedMaterial === "Carbon Fiber"} />
            </div>
          </div>

          {/* Right: Module Preview */}
          <div>
            <ModulePreview color={selectedColor} material={selectedMaterial} />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <motion.button
            className="bg-primary text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Save Configuration
          </motion.button>
        </div>
      </div>
    </section>
  );
};

interface PageProps { }

const Page: React.FC<PageProps> = () => {

  return (
    <div className="bg-black text-white min-h-screen font-inter">
      <CustomizationTool />
    </div>
  );
};

export default Page;