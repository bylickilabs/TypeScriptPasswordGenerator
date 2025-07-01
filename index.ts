function generatePassword(length: number, useUpper = true, useLower = true, useDigits = true, useSpecial = true): string {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const special = '!@#$%^&*()_-+=[]{}|;:,.<>?';
  let chars = '';
  if (useUpper) chars += upper;
  if (useLower) chars += lower;
  if (useDigits) chars += digits;
  if (useSpecial) chars += special;

  if (!chars) throw new Error('Bitte mindestens einen Zeichentyp auswählen!');

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Simple CLI-Ausgabe
const len = Number(process.argv[2]) || 16;
console.log("Generated Password:", generatePassword(len));
