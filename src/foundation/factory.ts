interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthDate: string) => number;
}

interface PersonOptions {
  name: string;
  birthDate: string;
}

export const buildMakePerson = ({ getAge, getUUID }: BuildMakerPersonOptions) => {
  return ({ name, birthDate }: PersonOptions) => {
    return {
      id: getUUID(),
      name,
      birthDate,
      age: getAge(birthDate),
    };
  };
};
