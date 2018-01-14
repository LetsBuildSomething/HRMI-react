import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as actions from './action';
import {bindActionCreators} from 'redux';

class VideoComponent extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
          number : 0
        };
        //this.onTitleChange = this.onTitleChange.bind(this);
        console.log(this.props.number);

        this.onClickSave = this.onClickSave.bind(this);
    }

    /*
    onTitleChange(event){
        var num = this.state.number;
        //var num = event.target.value;
        this.setState({number:event.target.value});
    }
    */
    
    
    onClickSave(){
        //this.props.dispatch(actions.doActionSample(this.state.number));
        this.props.changeNumber(this.state.number);
    }
    
    render() {

        return (
            <div>
                <h3>...STATE NUMBER...{this.state.number}</h3>
                <h3>...STORE NUMBER...{this.props.number}</h3>

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}/>
      
            </div>
        );
    }
}

VideoComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  //actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    console.log(state)
    return {
        number: state.video
    };
}

function mapDispatchToProps(dispatch){
    return {
        changeNumber: number => dispatch(actions.doActionSample(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoComponent);