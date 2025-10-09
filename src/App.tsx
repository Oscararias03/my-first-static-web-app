import { useState } from 'react';
import { PawPrint } from 'lucide-react';
import PetForm from './components/PetForm';
import PetList from './components/PetList';

interface Pet {
  id: string;
  name: string;
  type: string;
  age: number;
}

function App() {
  const [pets, setPets] = useState<Pet[]>([
    { id: '1', name: 'Luna', type: 'Perro', age: 3 },
    { id: '2', name: 'Michi', type: 'Gato', age: 5 },
    { id: '3', name: 'Rocky', type: 'Perro', age: 2 },
  ]);

  const handleAddPet = (newPet: Omit<Pet, 'id'>) => {
    const pet: Pet = {
      ...newPet,
      id: Date.now().toString(),
    };
    setPets([...pets, pet]);
  };

  const handleDeletePet = (id: string) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PawPrint size={40} className="text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">My Pet App</h1>
          </div>
          <p className="text-gray-600 text-lg">Gestiona y cuida de tus mascotas</p>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
          <PetForm onAddPet={handleAddPet} />
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Mis Mascotas</h2>
          <PetList pets={pets} onDeletePet={handleDeletePet} />
        </div>
      </div>
    </div>
  );
}

export default App;
