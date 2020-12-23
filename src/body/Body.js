import React,{Component} from 'react'
import './Body.css'
import Button from '@material-ui/core/Button';
import soundfile1 from '../song/correct.mp3'
import soundfile2 from '../song/win.mp3'
import soundfile3 from '../song/wrong.mp3'
import soundfile4 from '../song/loss.mp3'
import win from '../header/icons/win.png'
class Body extends Component 
{ 
   choices=[]
   indices=[]
   myTxt=""
   ind
   moot=[]
   audioCorrect
   audioWin
   audioWrong
   audioLoss
    constructor(){
        super();
        this.myTxt = require("../countries.txt")
                    this.myTxt1 = require("../capital.txt")
                    this.readTextFile(this.myTxt)
                    this.readTextFile(this.myTxt1)
                    this.ind=this.getRandomInt(145)
                    this.moot=Array(this.choices[this.ind].length-1).fill('_')  
        this.state =
                    {
                      indice:this.ind,
                      mot_juste:this.choices[this.ind].toUpperCase().split(""),
                      mot_a_deviner:this.moot,      
                      country:this.indices[this.ind],          
                      end:false,                   
                      essays :this.moot.length*2-2,
                      score : 0,
                      count:0,
                      loss:false,
                      
                    } 
                    this.audioCorrect= new Audio(soundfile1)
                    this.audioWin = new Audio(soundfile2)
                    this.audioWrong = new Audio(soundfile3)
                    this.audioLoss = new Audio(soundfile4)
    }
    getRandomInt(max) { //nombre aleatoire pour choisir le mot a deviner
      return Math.floor(Math.random() * Math.floor(max));
    }
    handleClick(e) {// letttre click    
        let i=0
        const letter = e.target.innerHTML
        let word=this.state.mot_a_deviner;
        this.setState({essays:this.state.essays-1})
        for(i=0;i<this.state.mot_juste.length;i++)
        {
            if(letter===this.state.mot_juste[i]&&word[i]==='_')
            {
                this.audioWin.play()
                word[i]=letter;
                this.setState({mot_a_deviner:word,count:this.state.count+1,score:this.state.score+3});
                if(this.state.count===this.state.mot_a_deviner.length-1) this.setState({end:true})
                break;
            }
            else{
              this.setState({score:this.state.score-1})
            }
        }
        i=0
        let bool =false
        while(i<word.length)
        {
          if(word[i]==='_') 
          {
            bool=true
            break;
          }
          i++;
        }
        if(this.state.essays===1 && bool ) 
        {
          this.setState({loss:true,end:true})
          this.audioLoss.play()
        }
    }
    handleClickReset(){
        let indd =this.getRandomInt(145);
        let moott=Array(this.choices[indd].length-1 ).fill('_') 
        this.setState({
                      indice:indd,
                      mot_juste:this.choices[indd].toUpperCase().split(""),
                      mot_a_deviner:moott,  
                      country:this.indices[indd],               
                      end:false,                   
                      essays :moott.length*2-2,
                      score : 0,
                      count:0,
                      loss:false,
        })  
    }
    readTextFile = file => {//read txt file
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status === 0) {
            var allText = rawFile.responseText;
            var tabbb=allText.split('\n')
            if(file === this.myTxt)
            {
              this.indices = tabbb
            }
            else
            {
              this.choices = tabbb
            }

          }
        }
      };
      rawFile.send(null);}
      restartClick(){
        let indd = this.state.indice
        let moott=Array(this.choices[indd].length-1 ).fill('_') 
        this.setState({
                      mot_a_deviner:moott,                
                      end:false,                   
                      essays :moott.length*2-2,
                      score : 0,
                      count:0,
                      loss:false,
        })

      }
  render(){
      return(
          <div className='buttons'>
             <h3 className='country'>what is the capital city of {this.state.country}</h3>
            <h1 className='mot'>{this.state.mot_a_deviner}</h1>
            <div className='sc' ><h2>Score :</h2><h1 className='z'>{this.state.score}</h1></div>
            <div className='essays'><h2>Essays :</h2> <h1 className='e'> {this.state.essays}</h1></div>
            {
              this.state.loss &&
               <div> <h2>Ouuuuups ! you have lost </h2></div>
            }
            {
              this.state.end && !this.state.loss &&
             <div> <img src={win} alt="wining babyyyyy !!" style={{height:'50px',width:'50 px' ,float:"inline-start",marginInline:'50px' }}></img> <h2>Congrats you have won</h2> </div>
            }
            { !this.state.end && <div className='b'>
            <Button ref="A" onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px' }} >A</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >Z</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >E</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >R</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >T</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >Y</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >U</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >I</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >O</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >P</Button>
            <br/>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >Q</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >S</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >D</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >F</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >G</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >H</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >J</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >K</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >L</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >M</Button>
            <br/>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >W</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >X</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >C</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >V</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >B</Button>
            <Button onClick={(e)=> this.handleClick(e)} style={{backgroundColor:'crimson', color:'white', marginLeft:'5px',marginRight:'5px',marginBottom:'5px'}} >N</Button>
      </div> }
      <div>
      <Button onClick={() => this.restartClick()} style={{backgroundColor:'white', color:'black' , marginLeft:'5px',marginRight:'5px',marginTop:'5px'}} >Restart</Button>
      <Button  onClick={() => this.handleClickReset()} style={{backgroundColor:'white',color:'BLACK', marginRight:'5px',marginLeft:'5px',marginTop:'5px'}}>Change</Button>
      </div>
      </div>    
      )
  }
}
export default Body