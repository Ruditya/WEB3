import React, {Component} from 'react'; 
import PortofolioComponent from '../modules/portofolio-component'




class PortofolioPage extends Component {
    state ={
        visible: false,
    }
   
    componentDidMount(){

    }
    

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
    render(){
        return (
            <PortofolioComponent
                initialData = {this.state}
                showModal = {this.showModal}
                handleCancel = {this.handleCancel}
                handleOk = {this.handleOk} 
            />
        );
    }
}

export default PortofolioPage;