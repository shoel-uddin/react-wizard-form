import { useState } from 'react';
import './App.css';
import WizardForm from './components/WizardForm';
import WizardList from './components/WizardList';
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [wizards, setWizards]= useState([]);
  const [wizardEdit, setWizardEdit]= useState({})


  const chooseWizard = (wizard) => {
    console.log(`App sees ${wizard.name}`);
    setWizardEdit(wizard)
  }
  const onSubmit = (wizard) => {
    console.log('============================');
    console.log("New Wizard");
    console.log(wizard);
    if (wizard.id){
      // const existingWizard = wizard.find(w => w.id === wizard.id)
      const updatedWizards = wizards.map(w => {
        if (w.id === wizard.id) {
          return wizard
        } else {
          return w;
        }
      })
      setWizards(updatedWizards)
    }else {
      wizard.id = uuidv4()

    const newWizardArray = [
      ...wizards,
      wizard
    ]
    setWizards(newWizardArray)
    // setWizards([
    //   ...wizards,
    //   wizard
    // ])
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <WizardForm 
            title="Add New Wizard"
            onSubmit= {onSubmit}
            wizard= {wizardEdit}
          />

          <WizardList 
            wizards={wizards}
            chooseWizard={chooseWizard}
          />

        </div>
        
      </header>
    </div>
  );
}

export default App;
