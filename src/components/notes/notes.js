import React, { Component } from 'react';

import { MDBCard, MDBBadge, MDBBtn, MDBRow,MDBCol,MDBIcon, MDBInput} from 'mdbreact'



class Notes extends Component {
    constructor(){
        super()
        this.state={
            titulo:'',
            descripcion:'',
            prioridad:'',
            estado:true
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
        this.finishNote = this.finishNote.bind(this)
    }

    handleInput(e){
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
     
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddNote(this.state)
    }

    deleteNote(indice){
        this.props.onRemoveNote(indice.target.value)
    }
    finishNote(indice){
        this.props.onFinishNote(indice.target.value)
    }

    render() {
       
        const notes = this.props.notes.map( (note, indice) => {
            return (<MDBCard className='m-2 p-3' key={indice} narrow>
                        <div className='container'>
                            <div>
                                <h2 className="h2-responsive">{note.titulo}</h2>
                                <p className='text-muted'>{note.descripcion}</p>
                            </div>
                            <div>
                                <span>Prioridad: <MDBBadge  color={note.prioridad==='alta'?'danger':'primary'} >{note.prioridad}</MDBBadge></span>
                                <span className='mx-2'>Estado: <MDBBadge  color={note.estado ?'success':'danger'}> {note.estado? 'Activo':'Finalizado'} </MDBBadge></span>
                            </div>
                            {note.estado?<MDBBtn value={indice} onClick={this.finishNote} className='mt-3 btn-block' color='success'>Terminar</MDBBtn>:null}
                            <MDBBtn className='mt-3 btn-block' value={indice}  onClick={this.deleteNote} color="danger">Borrar</MDBBtn>
                        </div>  
                    </MDBCard>
        )})

        return (
            <MDBRow>
                <MDBCol size='4'>
                    <form className='p-5 mt-3'  onSubmit={this.handleSubmit}>
                        <p className="h5 text-center mb-4">Write to us</p>
                        <label >Prioridad</label>
                        <select className="browser-default custom-select" name='prioridad' onChange={this.handleInput}>
                            <option value="baja">Baja</option>
                            <option value="media">Media</option>
                            <option value="alta">Alta</option>
                        </select>
                        <div className="grey-text">
                        <MDBInput
                        onChange={this.handleInput}
                        name='titulo'
                            label="Nombre de la tarea"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        />
                        <MDBInput
                        onChange={this.handleInput}
                        name='descripcion'
                            type="textarea"
                            rows="2"
                            label="Your message"
                            icon="pencil-alt"
                        />
                        </div>
                        <div className="text-center">
                        <MDBBtn type='submit'  color="secondary">
                            Send <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
                <MDBCol size='8'>
                    <div className='w-100 d-flex flex-wrap mt-5'>
                        {notes}
                    </div>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default Notes;
