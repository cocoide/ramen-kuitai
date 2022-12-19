import toast from 'react-hot-toast';
import { signIn, signOut } from "next-auth/react";

const useAuth =()=>{
    
    const signInWithGoogle = async() => {
        // const toastId =toast.loading("Googleアカウントでログイン中...");
        await signIn('google', {
          callbackUrl: window.location.href,
        });
        //   toast.success("ログイン成功🎉",{
        //   id: toastId,
        // });
      };
      
      const Logout = async() => {
        await signOut({
          callbackUrl: "/"
        })
        //   toast('ログアウト完了', {
        //   icon: '✅',
        // })
      };
      return { signInWithGoogle, Logout}
};
export  {useAuth};