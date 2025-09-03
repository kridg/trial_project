import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../../supabaseClient';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                setSession(null)
            } else if (session) {
                setSession(session)
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [])
    const signIn = async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
    };
    const signOut = async () => {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        };

    return (
        <AuthContext.Provider value={{ session, signIn,signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)