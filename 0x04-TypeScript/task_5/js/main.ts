type Brand<K, T> = K & { __brand: T };

// Interfaces
interface MajorCredits {
  credits: Brand<number, 'MajorCredits'>;
}

interface MinorCredits {
  credits: Brand<number, 'MinorCredits'>;
}

// Functions
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: (subject1.credits + subject2.credits) as MajorCredits['credits']
  };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: (subject1.credits + subject2.credits) as MinorCredits['credits']
  };
}