import { Trash2 } from 'lucide-react';

interface PetCardProps {
  id: string;
  name: string;
  type: string;
  age: number;
  onDelete: (id: string) => void;
}

function PetCard({ id, name, type, age, onDelete }: PetCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <button
          onClick={() => onDelete(id)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Eliminar mascota"
        >
          <Trash2 size={20} />
        </button>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium">Tipo:</span> {type}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Edad:</span> {age} {age === 1 ? 'año' : 'años'}
        </p>
      </div>
    </div>
  );
}

export default PetCard;
