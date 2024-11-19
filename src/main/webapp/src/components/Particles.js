import React, {Component} from 'react'
import "./Particles.css"
// const Particles = ({  }) => {
//     return (
//         <div>
//             <center><h1>Particles List</h1></center>
//             <table class="pf-c-table pf-m-grid-md" role="grid" aria-label="Supersonic Subatomic Particles" id="table-basic">
//                 <caption>Supersonic Subatomic Particles</caption>
//                 <thead>
//                     <tr role="row">
//                         <th role="columnheader" scope="col">Name</th>
//                     </tr>
//                 </thead>
//                 { var particles = fetch('/api/particles')}
//                 {particles.map((particle) => (
//                     <tbody role="rowgroup">
//                         <tr role="row">
//                             <td role="cell" data-label="Particle name">{particle.name}</td>
//                         </tr>
//                     </tbody>
//                 ))}
//             </table>
//         </div>

//     )
// };

class Particles extends Component{

    state = {
        particles: []
    }

    componentDidMount() {
        fetch('/api/particles')
        .then(res => res.json())
        .then((data) => {
          this.setState({ particles: data })
        })
        .catch(console.log)
      }
    
    render (){
        return (
            <div>
                <center><h1>Particles List</h1></center>
                <div>
                <table id="table-basic">
                    <thead>
                        <tr >
                            <th >Name</th>
                        </tr>
                    </thead>
                    {this.state.particles.map((particle) => (
                        <tbody >
                            <tr >
                                <td >{particle.name}</td>
                            </tr>
                        </tbody>
                    
                    ))}
                </table>
                </div>
            </div>
        )
    }

}

export default Particles