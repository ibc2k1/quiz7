import Button from '@material-ui/core/Button';

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = " loading..."
  }

const MultiButton=(num)=>{
    var output=[];
    output.push(<Button variant="contained" color="primary"
    onClick={changeText}>sign in</Button>)
    return output;
}

export default MultiButton;