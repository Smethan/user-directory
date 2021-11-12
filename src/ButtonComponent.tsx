import React, { Component } from 'react';

type IProps = {
    setIndex: (num: number) => void;
    index: number;
    length: number;
}
type IState = {}

class ButtonComponent extends Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this)
    }

    handlePrevious() {
        if (this.props.index > 0) {
            this.props.setIndex(this.props.index - 1);
        } else {
            return;
        }
    }

    handleNext() {
        if (this.props.index < this.props.length - 1) {
            this.props.setIndex(this.props.index + 1);
        } else {
            return
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handlePrevious}>Previous</button>
                <button onClick={this.handleNext}>Next</button>
            </div>
        )
    }
}

export default ButtonComponent