import React, { Component } from 'react';
import backdropImage from '../../assets/images/backdrop.jpg';
import cat from '../../assets/images/cat.jpg';
import pumpkin from '../../assets/images/pumpkin.jpg';
import london from '../../assets/images/london.jpg';
import octopus from '../../assets/images/octopus.jpg';
import Card from '../../components/Card/Card';
import Draggable from 'react-draggable';
import './Backdrop.css';

const titles = {
    first: {
      title: 'Кот Аминеко',
      style: 'card card-first',
      link: '/amineko'
    },
    second: {
      title: 'Тыквенный крем-суп',
      style: 'card card-second',
      link: '/pumpkin'
    },
    third: {
      title: 'Go to London!',
      style: 'card card-third',
      link: '/london'
    },
    fourth: {
      title: 'Первый урок в школе Pixel',
      style: 'card card-fourth',
      link: '/octopus'
    }
}


class Backdrop extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: -400, y: 200
            }
        }
    }

    handleDrag(e, ui) {
        const {x, y} = this.state.deltaPosition;
        this.setState({
        deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        }
        });
    }

    // For controlled component
    adjustXPos(e) {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
    }

    adjustYPos(e) {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
    }

    onControlledDrag(e, position) {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
    }

    onControlledDragStop(e, position) {
        this.onControlledDrag(e, position);
        this.onStop();
    }

    render () {
        //const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

        return (
            <section className="article">
                <div className="article__container">
                    <img className="article__image" src={backdropImage} alt="Доска" draggable="false" />
                    <Draggable bounds={{top: -60, left: -90, right: 805, bottom: 485}} cancel="a">
                        <div style={{position: 'absolute'}}>
                            <Card title={titles.first.title} style={titles.first.style} image={cat} link={titles.first.link} />
                        </div>
                    </Draggable>
                    <Draggable bounds={{top: -90, left: -510, right: 385, bottom: 455}} cancel="a">
                        <div style={{position: 'absolute'}}>
                            <Card title={titles.second.title} style={titles.second.style} image={pumpkin} link={titles.second.link} />
                        </div>
                    </Draggable>
                    <Draggable bounds={{top: -265, left: -755, right: 140, bottom: 280}} cancel="a">
                        <div style={{position: 'absolute'}}>
                            <Card title={titles.third.title} style={titles.third.style} image={london} link={titles.third.link} />
                        </div>
                    </Draggable>
                    <Draggable bounds={{top: -325, left: -245, right: 650, bottom: 220}} cancel="a">
                        <div style={{position: 'absolute'}}>
                            <Card title={titles.fourth.title} style={titles.fourth.style} image={octopus} link={titles.fourth.link} />
                        </div>
                    </Draggable>
                </div>
                <div className="article__description-block">

                </div>
            </section>
        )
    }
}

export default Backdrop;