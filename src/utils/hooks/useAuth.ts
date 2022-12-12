import toast from 'react-hot-toast';
import { signIn, signOut, useSession } from "next-auth/react";
import { unstable_getServerSession } from 'next-auth';

const useAuth =()=>{
    
    // const {data}= useSession()
    // const {}=unstable_getServerSession();
    // const {user}=data;
    
    const signInWithGoogle = async() => {
        // toast.loading("Googleアカウントでログイン中...");
        await signIn('google', {
          callbackUrl: "/user/profile",
          // window.location.href,
        });
        toast.success("ログイン成功🎉");
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