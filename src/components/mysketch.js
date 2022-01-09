import React from "react"
import P5 from "p5"
import Everett from '../fonts/EverettTrial-Regular.otf'


class MySketch extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    Sketch = (p) => {
        let everett;
        let drawGrid;

        p.preload = () => {
            everett = p.loadFont(Everett);
        };
        
        p.setup = () => {
            p.createCanvas(600, 500);
            p.background('#b7a7cf');
            p.textFont(everett);
        };

        p.draw = () => {
            drawGrid();
            p.circle(250, 250, 100);
            p.circle(300, 300, 100);
        };

        drawGrid = () => {
            p.textSize(10);
            for (var i = 0; i < 25; i++) {
                for (var j = 0; j < 10; j++) {
                    p.line(i * 50, 0, i * 50, 500);
                    p.text(i * 50, (i * 50) + 2, 10);
                    p.line(0, j * 50, 600, j * 50);
                    p.text(j * 50, 2, (j * 50) + 10);
                }
            }
        }

    };

    componentDidMount() {  
        this.myP5 = new P5(this.Sketch, this.myRef.current);
    }
  
    render() {
        return < div ref ={this.myRef}></ div >;
    }

  }
  
  
  export default MySketch