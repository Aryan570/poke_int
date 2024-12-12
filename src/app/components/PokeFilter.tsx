// components/PokemonTypeFilter.tsx
import React from "react";

interface PokemonTypeFilterProps {
  availableTypes: string[];
  selectedTypes: string[];
  onTypeSelect: (types: string[]) => void;
}

export const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({
  availableTypes,
  selectedTypes,
  onTypeSelect,
}) => {
  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {availableTypes.map((type) => (
        <button
          key={type}
          onClick={() => toggleType(type)}
          className={`px-3 py-1 rounded ${
            selectedTypes.includes(type) ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

  