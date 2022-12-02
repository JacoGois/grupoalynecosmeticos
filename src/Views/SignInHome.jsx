import React from 'react'
import SignInForm from '../Components/SignInForm/SignInForm';
import { useSignInForm } from '../Components/SignInForm/useSignInForm';
import View from '../Components/View';
import { useFetchApi } from '../hooks/useFetchApi';

export const SignInHome = () => { 
  const { startFetch } = useFetchApi("http://179.185.45.146:8280/mge/service.sbr?serviceName=MobileLoginSP.login", "POST");
  
  const form = useSignInForm({
    onSubmit: (values) => {
      const password = values.password;
      const username = values.username;
      startFetch(password, username);
    }
  })

  return (
    <View>
      <SignInForm {...form} />
    </View>
  )
}
