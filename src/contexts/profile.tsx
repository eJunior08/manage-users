import React, {createContext, Dispatch, SetStateAction, useState} from 'react';

interface ProfileContextProp {
  profileUri: string;
  setProfileUri: Dispatch<SetStateAction<string>>;
}

const ProfileContext = createContext<ProfileContextProp>(
  {} as ProfileContextProp,
);

export const ProfileProvider: React.FC = ({children}) => {
  const [profileUri, setProfileUri] = useState<string>('');

  return (
    <ProfileContext.Provider value={{profileUri, setProfileUri}}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
