import React, { createContext, useState, ReactNode, useContext } from 'react';

interface GlobalContextType {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  data:any;
  setData: (data: any) => void;
  petName:string,
  setPetName:(petName:string) => void;
  petData:any;
  setPetData: (data: any) => void;
  remainderModal:boolean,
  setRemainderModal:(remainderModal:boolean) => void;
  trackModal:boolean,
  setTrackModal:(trackModal:boolean) => void;
  date:Date
  setDate:(date:Date) => void;
  startTime:Date
  setStartTime:(date:Date) => void;
  endTime:Date
  setEndTime:(date:Date) => void;
  name:string,
  setName:(name:string)=>void;
  image:string,
  setImage:(image:string)=>void;



}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [data,setData] = useState([])
  const [petName,setPetName] = useState('')
  const [petData, setPetData] = useState([]);
  const [remainderModal, setRemainderModal] = useState(false)
  const [trackModal, setTrackModal] = useState(false)
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [name, setName] = useState('');
  const [image,setImage] = useState('')

  const contextValue = {
    username,
    setUsername,
    password,
    setPassword,data,setData,
    petName,setPetName,
    petData, setPetData,
    remainderModal, setRemainderModal,
    trackModal, setTrackModal,endTime, setEndTime,startTime, setStartTime,date, setDate,name, setName,
    image,setImage
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a MyProvider');
  }
  return context;
};