import {FaGithub} from 'react-icons/fa'
import styles from './styles.module.scss'
import { signIn, useSession } from 'next-auth/react'

export function SigninButton(){

    const { data: session } = useSession()

    return session? (
        <button className={styles.signinButton} type='button'>
            <FaGithub color="#04d361"/>
            Sign in with Github
        </button>
    ) : (
        <button onClick={()=> signIn('github') } className={styles.signinButton} type='button'>
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button >
    )
}