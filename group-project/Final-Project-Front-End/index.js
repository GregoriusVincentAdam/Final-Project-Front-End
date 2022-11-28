/*  
Nama Kelompok:  Denver
Nama Anggota :  Adam, Gregorius Vincent
                Luntungan, Hendra Ucok
                Lahengke, Gabriela
                Kalalo, Sherren Brenda
                Tangkeallo, Yazel Stepano
                Lobbu, Stephen Anthony Timothy
*/

import React, {Component} from "react";

export default class StateProps extends Component{
    constructor(props){
        super(props);
        this.state={
            makanan : "Migori"
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.makanan}</h1>
                <button onClick={()=>this.setState({makanan: "Nasi Goreng"})}> Change Your Fav Food </button>
            </div>
        )
    }
}

/*  
Nama Kelompok:  Denver
Nama Anggota :  Adam, Gregorius Vincent
                Luntungan, Hendra Ucok
                Lahengke, Gabriela
                Kalalo, Sherren Brenda
                Tangkeallo, Yazel Stepano
                Lobbu, Stephen Anthony Timothy
*/
