import React, { Component } from "react";

import notes from "./notes";
// Components
import NavbarPage from "./components/navbar/navbar";
import NotesHandle from "./components/notes/notes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes
    };
    this.handleAddNote = this.handleAddNote.bind(this)
    this.handleRemoveNote = this.handleRemoveNote.bind(this)
    this.handleFinishNote = this.handleFinishNote.bind(this)
  }

  handleAddNote(note){
      this.setState({
        notes:[...this.state.notes, note]
      })
     
  }

  handleRemoveNote(indice){
    if(window.confirm('Seguro que quiere Borrar esta nota?')){
      this.setState({
        notes: this.state.notes.filter((e,i)=>{
            indice = parseInt(indice)
            return i !== indice
        })
    })
    }
    
  }
  handleFinishNote(indice){
    indice = parseInt(indice)
    this.setState({notes:this.state.notes.map(function(dato, e)
      {if(e === indice && dato.estado){
        dato.estado= false
      }
      return dato;})})
    }
  

  render() {
    return (
      <div className="wrapper">
        <NavbarPage notes={this.state.notes} noteFinished={this.state.notes.filter((note)=> (!note.estado))} />
        <NotesHandle notes={this.state.notes} onAddNote={this.handleAddNote} onRemoveNote={this.handleRemoveNote} onFinishNote={this.handleFinishNote}/>
      </div>
    );
  }
}

export default App;
