import React, { Component } from 'react'
import './navbar.css';
export class Navbar extends Component {
  render() {
    const{
      visualizeDijkstra,
    }=this.props;
    return (
        <div className='navbar'>
            <div className="Nodes1">
            <div className='StartingNode'>Starting Node</div>
            <div className='TargetNode'>Target Node</div>
            </div>
            <div>
            <button className='first' onClick={() => visualizeDijkstra()}>Visualize Dijkstra's Algorithm</button>
            </div>
            <div>
            <a href="https://sillu24.github.io/Visualizer/"><button className='first'>Reset Visualizer</button></a>
            </div>
            <div className="Nodes2">
            <div className='UnvisitedNode'>Unvisited Node</div>
            <div className='VisitedNode'>Visited Nodes</div>
            <div className='ShortestNode'>Shortest-path Node</div>
            </div>
        </div>
    )
  }
}

export default Navbar