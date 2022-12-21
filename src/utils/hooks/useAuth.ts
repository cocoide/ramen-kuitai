import toast from 'react-hot-toast';
import { signIn, signOut } from "next-auth/react";

const useAuth =()=>{
    
    const signInWithGoogle = async() => {
      toast.loading("Googleアカウントでログイン中...");
        await signIn('google', {
          callbackUrl: window.location.href,
        });
      };
      
      const Logout = async() => {
        await signOut({
          callbackUrl: "/"
        })
          toast('ログアウト完了', {
          icon: '✅',
        })
      };
      return { signInWithGoogle, Logout}
};
export  {useAuth};