import React,{useContext} from 'react'
import cardContext from '../context/Context'
const FirstCard = () => {

    const {fighterPokemon ,  cards , cardz , isgameover} = useContext(cardContext)
    const img ="https://i.ibb.co/X5tsB7d/HOLD.gif"
    
  return (
    <>
    { isgameover === false && <main className='fightingcards'>
        <img draggable='false' className='image' src={fighterPokemon.image || img} alt='HOLD' />
        <div className='name'>{fighterPokemon.name}</div>
        <div className='power'>{fighterPokemon.power}</div>
    </main>}
    {isgameover === false &&
     <div>
      <h2>You</h2>
    </div>
}
    </>
    )
}

export default FirstCard