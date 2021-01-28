import React, { useEffect, useState } from 'react'

function WizardForm(props) {
    console.log(props.wizard);

    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [house, setHouse] = useState('')

    useEffect(() => {
        console.log('Use effect in effect, props has chnaged');
        if (props.wizard.name) {
            setName(props.wizard.name);
            setOccupation(props.wizard.occupation)
            setHouse(props.wizard.house)
        }
    }, [ props ])

    return (
        <section>
            <h1>{props.title}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                const wizardObject = {
                    name: name,
                    occupation: occupation,
                    house: house
                }
                if (props.wizard.id) {
                    wizardObject.id = props.wizard.id
                }
                props.onSubmit(wizardObject)
                setName('')
                setOccupation('')
                setHouse('')
            }}>
                <label>
                    Name:
                    <input 
                    placeholder="e.g. Ron Weasley"
                    value={name}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setName(e.target.value)
                        } 
                    }
                />
                </label>
                
                <br/>
                <label >
                    Occupation: 
                    <input 
                    placeholder="e.g. Sorcerer"
                    value={occupation}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setOccupation(e.target.value)
                        }
                    }   
                    />
                </label>
                <br/>
                <label >
                    House: 
                    <input 
                    placeholder="e.g. Slythein"
                    value={house}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setHouse(e.target.value)
                        }
                    }   
                    />
                    <br/>
                    <input type="submit"/>
                </label>
                
            </form>
        </section>
    )
}

export default WizardForm;