import { createContext, useState } from "react";

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: {
    username: string;
    password: string;
    role: string;
    organisationId: string;
    teamId: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      username: string;
      password: string;
      role: string;
      organisationId: string;
      teamId: string;
    }>
  >;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

export default function UserContextProvider(props: UserContextProviderProps) {
  const { children } = props;

  const [user, setUser] = useState({
    username: "Kah Kit",
    password: "123456",
    role: "admin",
    organisationId: "1",
    teamId: "1",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
