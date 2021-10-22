import React, { Component } from 'react';

class Accordion extends Component {

    constructor(props){
        super(props);
        this.state={
            active: false,
            height: '0px',
            rotate: 'transform duration-700 ease'
        }
    }
    _contentSpace = useRef(null);
    get contentSpace() {
        return this._contentSpace;
    }
    set contentSpace(value) {
        this._contentSpace = value;
    }
    toggleAccordion() {
        const active=this.state.active;
    this.setState({
         active: !active,
         height: active ? '0px':`${contentSpace.current.scrollHeight}px`,
         rotate: active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180',
        })
    }
    render() {
        return (
            <div className="flex flex-col">
                <button
                    className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                    onClick={this.toggleAccordion}
                >
                    <p className="inline-block text-footnote light">{this.props.title}</p>
                    <i className={"fas fa-chevron-down mt-1 "+`${this.state.rotate} inline-block`}></i>
                </button>
                <div
                    ref={contentSpace()}
                    style={{ maxHeight: `${this.state.height}` }}
                    className="overflow-hidden transition-max-height duration-700 ease-in-out"
                >
                    <div className="pb-10">{this.props.content}</div>
                </div>
            </div>
        );
    }
}

export default Accordion;