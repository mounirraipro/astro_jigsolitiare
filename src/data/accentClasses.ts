export const brandAccentClass = "accent-coral";

export const getCategoryAccentClass = (name: string) => {
  const key = name.toLowerCase();
  if (key === "animals") return "accent-red";
  if (key === "art") return "accent-clay";
  if (key === "cities") return "accent-violet";
  if (key === "food") return "accent-gold";
  if (key === "nature") return "accent-green";
  if (key === "space") return "accent-blue";
  if (key === "fantasy") return "accent-violet";
  return brandAccentClass;
};
