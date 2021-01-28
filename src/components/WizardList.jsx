import React from 'react'

function WizardList(props){
    return (
    <ul>
        {
        props.wizards.map(w => (<li key= {w.id} onClick={(e) => {
            console.log(w.name);
            props.chooseWizard(w);
        }}> {w.name}: {w.occupation} - {w.house}</li>))
        }
    </ul>
    )
}


export default WizardList;