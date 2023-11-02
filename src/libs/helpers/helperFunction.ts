export const nameInitials = (firstName: string, lastName: string): string => {
  const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const firstLetterLastName = lastName.charAt(0).toUpperCase();

  const formattedName = firstLetterLastName + '. ' + capitalizedFirstName;

  return formattedName;
};
