import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


class Home extends React.Component {
    render(){
        return(
            <div>
            <p>This is home</p>
            <Button variant="contained">Hello World</Button>
            </div>
        )
    }
}
export default Home