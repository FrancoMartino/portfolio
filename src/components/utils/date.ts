export const calculateYearsPassed = (date: string | Date): number => {
    const d = new Date(date);
    const t = new Date();
    return (
      t.getFullYear() -
      d.getFullYear() -
      (t < new Date(t.getFullYear(), d.getMonth(), d.getDate()) ? 1 : 0)
    );
  };
  