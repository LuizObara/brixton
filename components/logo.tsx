'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";

import logoLight from '@/assets/Brixton Logotipo-01.png';
import logoDark from '@/assets/Brixton Logotipo-01 dark.png';

import logoMarca from '@/assets/Brixton Logomarca-01.png';

export default function Logo() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true); 
    }, []);

    if (!mounted) {
        return null; 
    }

    const isDarkMode = theme === "dark";

    return (
        <Link href="#inicio" className='relative w-40'>
            <Image
                src={isDarkMode ? logoDark : logoLight}
                alt="Logo Brixton"
                priority
                sizes="(min-width: 100%)"
                style={{ objectFit: 'contain' }}
                className='hidden lg:block'
            />
            <Image
                src={logoMarca}
                alt="Logo Brixton"
                priority
                sizes="(min-width: 100%)"
                style={{ objectFit: 'contain' }}
                className='block lg:hidden'
            />
        </Link>  
    );
}