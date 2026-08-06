import { useContext } from "react"
import { NpcContext } from "../context/NpcContext"

const Npc = () => {
    const {npc,handleDamage} = useContext(NpcContext);
    return (
        <>
            <h3>
                NPC{" "}{npc.name}{" "}{npc.family}
            </h3>

            health:{" "}{npc.health}
            <br />
            speed:{" "}{npc.speed}
            <br />
            level:{" "}{npc.level}
            <br />
            isAlive:{" "}{npc.isAlive ? "yes": "☠️"}
            <br />
            <button onClick={()=>handleDamage(10)}>
                Damage 🤺
            </button>
        </>
    )
}

export default Npc;