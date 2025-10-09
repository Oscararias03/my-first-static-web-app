import PetCard from './PetCard';

interface Pet {
  id: string;
  name: string;
  type: string;
  age: number;
}

interface PetListProps {
  pets: Pet[];
  onDeletePet: (id: string) => void;
}

function PetList({ pets, onDeletePet }: PetListProps) {
  if (pets.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No hay mascotas registradas aún.</p>
        <p className="text-gray-400 mt-2">¡Agrega tu primera mascota usando el formulario!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          type={pet.type}
          age={pet.age}
          onDelete={onDeletePet}
        />
      ))}
    </div>
  );
}

export default PetList;
