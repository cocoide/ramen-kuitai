import { getCurrentUser } from '../../libs/server/session';
import LoginButton from './componets/LoginButton';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
    const user = await getCurrentUser();
    if (user != null) {
        redirect(`/${user.id}`)
    };
    return (
        <div className="flex-center">
            <LoginButton />
        </div>
    )
};