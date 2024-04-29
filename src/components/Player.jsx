import { useState } from 'react';

export default function Player( { initialName, symbol, isActive , onChangeName } ) {
    // second piece of statement
     const [ playerName,setPlayerName ] =   useState(initialName)
    const [isEditing, setIsEditing] = useState( false );
    
    function handleEditClick() {
        setIsEditing( ( editing ) => !editing );
        if ( isEditing ) {
        onChangeName( symbol, playerName )
        }
    }
    //changeevent listener
    function handleChange( event ) { 
     //target property will refer to the element that did emit the event
        setPlayerName(event.target.value)
    }
    //dynamic values
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';
    
    if ( isEditing ) {
        //input element it will provide with an event object 
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />
        );
       // btnCaption = 'Save';
    }
    
    
    return (
        <li className={ isActive ? 'active' : undefined }>
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit' }</button>
        </li>
    )
}