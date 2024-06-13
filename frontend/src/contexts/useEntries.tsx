import { createContext, ReactNode, useContext, useState } from "react";

type EntriesType = {
  sun: { task: string, timeIn: string, timeOut: string },
  mon: { task: string, timeIn: string, timeOut: string },
  tue: { task: string, timeIn: string, timeOut: string },
  wed: { task: string, timeIn: string, timeOut: string },
  thu: { task: string, timeIn: string, timeOut: string },
  fri: { task: string, timeIn: string, timeOut: string },
  sat: { task: string, timeIn: string, timeOut: string },
}

type EntriesContextType = {
  entries: EntriesType | null;
  setEntries: React.Dispatch<React.SetStateAction<EntriesType | null>>
}

const EntriesContext = createContext<EntriesContextType | undefined>(undefined)


export const EntriesContextProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<EntriesType | null>(null)

  return (
    <EntriesContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntriesContext.Provider>
  )
}

export const useEntries = () => (
  useContext(EntriesContext)
)