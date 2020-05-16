import React, { Component } from "react";
import Node from "./Node/Node";
import { dijkstra, getNodesInShortestPathOrder } from "../algorithms/dijkstra";

import "./PathfindingVisualizer.css";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            mouseIsPressed: false,
        };
    }

    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({ grid });
    }

    render() {
        const { grid } = this.state;
        console.log(grid);

        return (
            <div className="grid">
                {grid.map((row, rowId) => {
                    return (
                        <div>
                            {row.map((node, nodeIdx) => (
                                <Node></Node>
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    }
}
