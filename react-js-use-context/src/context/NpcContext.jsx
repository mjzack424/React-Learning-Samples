import { createContext, useState } from "react";

export const NpcContext = createContext();

export function NpcProvider({ children }) {
    const [npc, setNpc] = useState(
        {
            name: "john",
            family: "zack",
            health: 100,
            speed: 45,
            level: 30,
            isAlive: true,
        }
    )

    const handleDie = () => {
        setNpc((oldData) => ({
            ...oldData,
            health: 0,
            isAlive: false,
        }))
    }


    const handleDamage = (damage) => {
        if (npc.health - damage <= 0) {
            handleDie();
        } else {
            setNpc((oldData) => ({
                ...oldData,
                health: oldData.health - damage,
            }));
        }
    };


    return (
        <NpcContext.Provider value={{ npc, handleDamage }}>
            {children}
        </NpcContext.Provider>
    )
}