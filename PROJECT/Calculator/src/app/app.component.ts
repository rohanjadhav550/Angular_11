import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result : any = '';
  private len : number = 0;
  private i : number = 0;
  private temp : any;
  private first : number = 0;
  private second : number = 0;
  private addSign : number = 0;
  private subSign : number = 0;
  private mulSign : number = 0;
  private dividSign : number = 0; 
  private tempResult : string = '';
  private firstNum : any = '';
  private secondNum : any = '';
  private indexStart : number = 0;
  private indexEnd : number = 0;
  private stateStart : number = 0;
  private leftPart : any;
  private rightPart : any;

// display the result in the display input
  displayClicked(e : MouseEvent){
    this.result = this.result + (e.target as HTMLInputElement).value;
  }
//clears allcontent of the display content
  cleanAll(){
    this.result = '';
    this.dividSign = 0;
    this.mulSign = 0;
    this.addSign = 0;
    this.subSign = 0;
    this.firstNum = '';
    this.secondNum = '';
    this.stateStart = 0;
  }
//calculations are carried out in this function
  calculate(){
    while(this.result.match('[+/*-]')!=null)
    {
      console.log(this.result);
      this.dividSign = 0;
      this.mulSign = 0;
      this.addSign = 0;
      this.subSign = 0;
      this.firstNum = '';
      this.secondNum = '';
      this.stateStart = 0;
      this.indexEnd = 0;
      this.indexStart = 0;
  // here we check weather the first character is not a sign if it is the result will show invalid
      if(this.result[0]=='+'||this.result[0]=='-'||this.result[0]=='*'|| this.result[0]=='/')
      {
        this.result='invalid';
      }
      else
      {
  // get to know what signs have been used      
        if(this.result.match('[/]'))
          this.dividSign = 1;
        else
          this.dividSign = 0;
        if(this.result.match('[*]'))
          this.mulSign = 1;
        else
          this.mulSign = 0;
        if(this.result.match('[+]'))
          this.addSign = 1;
        else
          this.addSign = 0;
        if(this.result.match('[-]'))
          this.subSign = 1;
        else
          this.subSign = 0;

  // once the signs known now try to get there index
        if(this.dividSign==1 || this.mulSign==1)
        {
          if(this.result.indexOf('/')<this.result.indexOf('*') && this.dividSign!=0 && this.mulSign!=0){
            this.addSign = 0;
            this.subSign = 0;
            this.mulSign = 0;
            this.dividSign = 0;
            this.indexStart = this.result.indexOf('/')-1;
            while(this.stateStart==0)
            {
              if(this.result[this.indexStart]=='+' || this.result[this.indexStart]=='-'|| this.result[this.indexStart]=='/'|| this.result[this.indexStart]=='*' || this.indexStart==-1)
              {
                this.indexStart++;
                this.stateStart=1;
              }
              else
              {
                this.firstNum = this.firstNum + this.result[this.indexStart];
                this.indexStart--;
              }
            }
            this.firstNum = this.firstNum.split('');
            this.firstNum = this.firstNum.reverse();
            this.firstNum = this.firstNum.join('');

            this.indexEnd = this.result.indexOf('/')+1;
            this.stateStart = 0;
            while(this.stateStart==0)
            {
              if(this.result[this.indexEnd]=='+' || this.result[this.indexEnd]=='-'|| this.result[this.indexEnd]=='/'|| this.result[this.indexEnd]=='*' || this.indexEnd==-1)
              {
                this.indexEnd--;
                this.stateStart=1;
              }
              else
              {
                this.secondNum = this.secondNum + this.result[this.indexEnd];
                this.indexEnd++;
              }
            }    
            this.firstNum = parseInt(this.firstNum);
            this.secondNum = parseInt(this.secondNum);

            this.firstNum = this.firstNum / this.secondNum;
            this.firstNum = this.firstNum.toString();
  //lets store right part of the result
  // check first is the indexEnd = length-1 of the result if so then so there is no right part of the calculation
            if(this.indexEnd!=this.result.length-1)
            {
  //convert string to array to perform pop
              this.leftPart = this.result.split('');
              let newIndex = 0;
              this.rightPart = [];
              for(let rightIndex=this.result.length-1;rightIndex>this.indexEnd;rightIndex--)
              {
                this.rightPart[newIndex] = this.leftPart.pop();
                newIndex++;
              }            
              while(this.leftPart.length>this.indexStart)
              {
                this.leftPart.pop();
              }
  //join left array to make it string
              this.leftPart = this.leftPart.join('');
  //place the result after joining the right array
              this.leftPart = this.leftPart+this.firstNum;
  //join right array to make it string and attach the left
              this.rightPart = this.rightPart.reverse();
              this.rightPart = this.rightPart.join('');
  //final result after division            
              this.result = this.leftPart+this.rightPart;                        
            }
          }
          else if(this.result.indexOf('*')<this.result.indexOf('/') && this.dividSign!=0 && this.mulSign!=0){
            this.addSign = 0;
            this.subSign = 0;
            this.mulSign = 0;
            this.dividSign = 0;
            this.indexStart = this.result.indexOf('*')-1;
            while(this.stateStart==0)
            {
              if(this.result[this.indexStart]=='+' || this.result[this.indexStart]=='-'|| this.result[this.indexStart]=='/'|| this.result[this.indexStart]=='*' || this.indexStart==-1)
              {
                this.indexStart++;
                this.stateStart=1;
              }
              else
              {
                this.firstNum = this.firstNum + this.result[this.indexStart];
                this.indexStart--;
              }
            }
            this.firstNum = this.firstNum.split('');
            this.firstNum = this.firstNum.reverse();
            this.firstNum = this.firstNum.join('');

            this.indexEnd = this.result.indexOf('*')+1;
            this.stateStart = 0;
            while(this.stateStart==0)
            {
              if(this.result[this.indexEnd]=='+' || this.result[this.indexEnd]=='-'|| this.result[this.indexEnd]=='/'|| this.result[this.indexEnd]=='*' || this.indexEnd==this.result.length-1)
              {
                this.indexEnd--;
                this.stateStart=1;
              }
              else
              {
                this.secondNum = this.secondNum + this.result[this.indexEnd];
                this.indexEnd++;
              }
            }    
            this.firstNum = parseInt(this.firstNum);
            this.secondNum = parseInt(this.secondNum);

            this.firstNum = this.firstNum * this.secondNum;
            this.firstNum = this.firstNum.toString();
  //lets store right part of the result
  // check first is the indexEnd = length-1 of the result if so then so there is no right part of the calculation
            if(this.indexEnd!=this.result.length-1)
            {
  //convert string to array to perform pop
              this.leftPart = this.result.split('');
              let newIndex = 0;
              this.rightPart = [];
              for(let rightIndex=this.result.length-1;rightIndex>this.indexEnd;rightIndex--)
              {
                this.rightPart[newIndex] = this.leftPart.pop();
                newIndex++;
              }            
              while(this.leftPart.length>this.indexStart)
              {
                this.leftPart.pop();
              }
  //join left array to make it string
              this.leftPart = this.leftPart.join('');
  //place the result after joining the right array
              this.leftPart = this.leftPart+this.firstNum;
  //join right array to make it string and attach the left
              this.rightPart = this.rightPart.reverse();
              this.rightPart = this.rightPart.join('');
  //final result after division            
              this.result = this.leftPart+this.rightPart;                        
            }
          }
          else if(this.dividSign==1 && this.mulSign==0)
          {
            this.addSign = 0;
            this.subSign = 0;
            this.mulSign = 0;
            this.dividSign = 0;
            this.indexStart = this.result.indexOf('/')-1;
            while(this.stateStart==0)
            {
              if(this.result[this.indexStart]=='+' || this.result[this.indexStart]=='-'|| this.result[this.indexStart]=='/'|| this.result[this.indexStart]=='*' || this.indexStart==-1)
              {
                this.indexStart++;
                this.stateStart=1;
              }
              else
              {
                this.firstNum = this.firstNum + this.result[this.indexStart];
                this.indexStart--;
              }
            }
            this.firstNum = this.firstNum.split('');
            this.firstNum = this.firstNum.reverse();
            this.firstNum = this.firstNum.join('');
            this.indexEnd = this.result.indexOf('/')+1;
            this.stateStart = 0;
            while(this.stateStart==0)
            {
              if(this.indexEnd==this.result.length-1)
              {

                this.secondNum = this.result[this.indexEnd];
                this.stateStart=1;
                this.indexEnd--;
              }
              else if(this.result[this.indexEnd]=='+' || this.result[this.indexEnd]=='-'|| this.result[this.indexEnd]=='/'|| this.result[this.indexEnd]=='*' || this.indexEnd==this.result.length-1)
              {
                this.indexEnd--;
                this.stateStart=1;
              }
              else
              {
                this.secondNum = this.secondNum + this.result[this.indexEnd];
                this.indexEnd++;
              }
            }    
            this.firstNum = parseInt(this.firstNum);
            this.secondNum = parseInt(this.secondNum);
            this.firstNum = this.firstNum / this.secondNum;
            this.firstNum = this.firstNum.toString();
  //lets store right part of the result
  // check first is the indexEnd = length-1 of the result if so then so there is no right part of the calculation
            if(this.indexEnd!=this.result.length-1)
            {
  //convert string to array to perform pop
              this.leftPart = this.result.split('');
              if(this.leftPart.length==3)
              {
                this.result = this.firstNum;
              }
              else
              {
                let newIndex = 0;
              this.rightPart = [];
              for(let rightIndex=this.result.length-1;rightIndex>this.indexEnd;rightIndex--)
              {
                this.rightPart[newIndex] = this.leftPart.pop();
                newIndex++;
              } 
              console.log(this.rightPart)           
              while(this.leftPart.length>this.indexStart)
              {
                this.leftPart.pop();
              }
  //join left array to make it string
              this.leftPart = this.leftPart.join('');
  //place the result after joining the right array
              this.leftPart = this.leftPart+this.firstNum;
  //join right array to make it string and attach the left
              this.rightPart = this.rightPart.reverse();
              this.rightPart = this.rightPart.join('');
  //final result after division            
              this.result = this.leftPart+this.rightPart; 
              }                       
            }
          }
          else if(this.dividSign==0 && this.mulSign==1)
          {
            this.addSign = 0;
            this.subSign = 0;
            this.mulSign = 0;
            this.dividSign = 0;
            this.indexStart = this.result.indexOf('*')-1;
            while(this.stateStart==0)
            {
              if(this.result[this.indexStart]=='+' || this.result[this.indexStart]=='-'|| this.result[this.indexStart]=='/'|| this.result[this.indexStart]=='*' || this.indexStart==-1)
              {
                this.indexStart++;
                this.stateStart=1;
              }
              else
              {
                this.firstNum = this.firstNum + this.result[this.indexStart];
                this.indexStart--;
              }
            }
            this.firstNum = this.firstNum.split('');
            this.firstNum = this.firstNum.reverse();
            this.firstNum = this.firstNum.join('');
            this.indexEnd = this.result.indexOf('*')+1;
            this.stateStart = 0;
            while(this.stateStart==0)
            {
              if(this.result[this.indexEnd]=='+' || this.result[this.indexEnd]=='-'|| this.result[this.indexEnd]=='/'|| this.result[this.indexEnd]=='*' || this.indexEnd==this.result.length-1)
              {
                this.indexEnd--;
                this.stateStart=1;
              }
              else
              {
                this.secondNum = this.secondNum + this.result[this.indexEnd];
                this.indexEnd++;
              }
            }  
            this.firstNum = parseInt(this.firstNum);
            this.secondNum = parseInt(this.secondNum);
            this.firstNum = this.firstNum * this.secondNum;
            this.firstNum = this.firstNum.toString();
  //lets store right part of the result
  // check first is the indexEnd = length-1 of the result if so then so there is no right part of the calculation
            if(this.indexEnd!=this.result.length-1)
            {
  //convert string to array to perform pop
              this.leftPart = this.result.split('');
              if(this.leftPart.length==3){
                this.result = this.firstNum;
              }
              else
              {
                let newIndex = 0;
                this.rightPart = [];
                for(let rightIndex=this.result.length-1;rightIndex>this.indexEnd;rightIndex--)
                {
                  this.rightPart[newIndex] = this.leftPart.pop();
                  newIndex++;
                }            
                while(this.leftPart.length>this.indexStart)
                {
                  this.leftPart.pop();
                }
    //join left array to make it string
                this.leftPart = this.leftPart.join('');
    //place the result after joining the right array
                this.leftPart = this.leftPart+this.firstNum;
    //join right array to make it string and attach the left
                this.rightPart = this.rightPart.reverse();
                this.rightPart = this.rightPart.join('');
    //final result after division            
                this.result = this.leftPart+this.rightPart;
              }                        
            }
          }
        }
        else if(this.addSign==1 || this.subSign==1)
        {
          if(this.result.indexOf('+')<this.result.indexOf('-') && this.addSign!=0 && this.subSign!=0){
            this.addSign = 0;
            this.subSign = 0;
            this.mulSign = 0;
            this.dividSign = 0;
            this.indexStart = this.result.indexOf('+')-1;
            while(this.stateStart==0)
            {
              if(this.result[this.indexStart]=='+' || this.result[this.indexStart]=='-'|| this.result[this.indexStart]=='/'|| this.result[this.indexStart]=='*' || this.indexStart==-1)
              {
                this.indexStart++;
                this.stateStart=1;
              }
              else
              {
                this.firstNum = this.firstNum + this.result[this.indexStart];
                this.indexStart--;
              }
            }
            this.firstNum = this.firstNum.split('');
            this.firstNum = this.firstNum.reverse();
            this.firstNum = this.firstNum.join('');

            this.indexEnd = this.result.indexOf('+')+1;
            this.stateStart = 0;
            while(this.stateStart==0)
            {
              if(this.result[this.indexEnd]=='+' || this.result[this.indexEnd]=='-'|| this.result[this.indexEnd]=='/'|| this.result[this.indexEnd]=='*' || this.indexEnd==-1)
              {
                this.indexEnd--;
                this.stateStart=1;
              }
              else
              {
                this.secondNum = this.secondNum + this.result[this.indexEnd];
                this.indexEnd++;
              }
            }    
            this.firstNum = parseInt(this.firstNum);
            this.secondNum = parseInt(this.secondNum);

            this.firstNum = this.firstNum + this.secondNum;
            this.firstNum = this.firstNum.toString();
  //lets store right part of the result
  // check first is the indexEnd = length-1 of the result if so then so there is no right part of the calculation
            if(this.indexEnd!=this.result.length-1)
            {
  //convert string to array to perform pop
              this.leftPart = this.result.split('');
              let newIndex = 0;
              this.rightPart = [];
              for(let rightIndex=this.result.length-1;rightIndex>this.indexEnd;rightIndex--)
              {
                this.rightPart[newIndex] = this.leftPart.pop();
                newIndex++;
              }            
              while(this.leftPart.length>this.indexStart)
              {
                this.leftPart.pop();
              }
  //join left array to make it string
              this.leftPart = this.leftPart.join('');
  //place the result after joining the right array
              this.leftPart = this.leftPart+this.firstNum;
  //join right array to make it string and attach the left
              this.rightPart = this.rightPart.reverse();
              this.rightPart = this.rightPart.join('');
  //final result after division            
              this.result = this.leftPart+this.rightPart;                        
            }
          }
          else if(this.result.indexOf('-')<this.result.indexOf('+') && this.addSign!=0 && this.subSign!=0){
            this.addSign = 0;
            this.subSign = 0;
            this.mulSign = 0;
            this.dividSign = 0;
            this.indexStart = this.result.indexOf('-')-1;
            while(this.stateStart==0)
            {
              if(this.result[this.indexStart]=='+' || this.result[this.indexStart]=='-'|| this.result[this.indexStart]=='/'|| this.result[this.indexStart]=='*' || this.indexStart==-1)
              {
                this.indexStart++;
                this.stateStart=1;
              }
              else
              {
                this.firstNum = this.firstNum + this.result[this.indexStart];
                this.indexStart--;
              }
            }
            this.firstNum = this.firstNum.split('');
            this.firstNum = this.firstNum.reverse();
            this.firstNum = this.firstNum.join('');

            this.indexEnd = this.result.indexOf('-')+1;
            this.stateStart = 0;
            while(this.stateStart==0)
            {
              if(this.result[this.indexEnd]=='+' || this.result[this.indexEnd]=='-'|| this.result[this.indexEnd]=='/'|| this.result[this.indexEnd]=='*' || this.indexEnd==-1)
              {
                this.indexEnd--;
                this.stateStart=1;
              }
              else
              {
                this.secondNum = this.secondNum + this.result[this.indexEnd];
                this.indexEnd++;
              }
            }    
            this.firstNum = parseInt(this.firstNum);
            this.secondNum = parseInt(this.secondNum);

            this.firstNum = this.firstNum - this.secondNum;
            this.firstNum = this.firstNum.toString();
  //lets store right part of the result
  // check first is the indexEnd = length-1 of the result if so then so there is no right part of the calculation
            if(this.indexEnd!=this.result.length-1)
            {
  //convert string to array to perform pop
              this.leftPart = this.result.split('');
              let newIndex = 0;
              this.rightPart = [];
              for(let rightIndex=this.result.length-1;rightIndex>this.indexEnd;rightIndex--)
              {
                this.rightPart[newIndex] = this.leftPart.pop();
                newIndex++;
              }            
              while(this.leftPart.length>this.indexStart)
              {
                this.leftPart.pop();
              }
  //join left array to make it string
              this.leftPart = this.leftPart.join('');
  //place the result after joining the right array
              this.leftPart = this.leftPart+this.firstNum;
  //join right array to make it string and attach the left
              this.rightPart = this.rightPart.reverse();
              this.rightPart = this.rightPart.join('');
  //final result after division            
              this.result = this.leftPart+this.rightPart;                        
            }
          }
          else if(this.addSign==1 && this.subSign==0)
          {
            this.addSign = 0;
            this.subSign = 0;
            this.mulSign = 0;
            this.dividSign = 0;
            this.indexStart = this.result.indexOf('+')-1;
            while(this.stateStart==0)
            {
              if(this.result[this.indexStart]=='+' || this.result[this.indexStart]=='-'|| this.result[this.indexStart]=='/'|| this.result[this.indexStart]=='*' || this.indexStart==-1)
              {
                this.indexStart++;
                this.stateStart=1;
              }
              else
              {
                this.firstNum = this.firstNum + this.result[this.indexStart];
                this.indexStart--;
              }
            }
            this.firstNum = this.firstNum.split('');
            this.firstNum = this.firstNum.reverse();
            this.firstNum = this.firstNum.join('');
            this.indexEnd = this.result.indexOf('+')+1;
            this.stateStart = 0;
            while(this.stateStart==0)
            {
              if(this.indexStart==0 && this.indexEnd==this.result.length){
                this.stateStart=1;
              }
              else if(this.result[this.indexEnd]=='+' || this.result[this.indexEnd]=='-'|| this.result[this.indexEnd]=='/'|| this.result[this.indexEnd]=='*' || this.indexEnd==-1)
              {
                this.indexEnd--;
                this.stateStart=1;
              }
              else
              {
                this.secondNum = this.secondNum + this.result[this.indexEnd];
                this.indexEnd++;
              }
            }    
            this.firstNum = parseInt(this.firstNum);
            this.secondNum = parseInt(this.secondNum);

            this.firstNum = this.firstNum + this.secondNum;
            this.firstNum = this.firstNum.toString();
  //lets store right part of the result
  // check first is the indexEnd = length-1 of the result if so then so there is no right part of the calculation
            if(this.indexEnd!=this.result.length-1)
            {
  //convert string to array to perform pop
              this.leftPart = this.result.split('');
              let newIndex = 0;
              this.rightPart = [];
              for(let rightIndex=this.result.length-1;rightIndex>this.indexEnd;rightIndex--)
              {
                this.rightPart[newIndex] = this.leftPart.pop();
                newIndex++;
              }            
              while(this.leftPart.length>this.indexStart)
              {
                this.leftPart.pop();
              }
  //join left array to make it string
              this.leftPart = this.leftPart.join('');
  //place the result after joining the right array
              this.leftPart = this.leftPart+this.firstNum;
  //join right array to make it string and attach the left
              this.rightPart = this.rightPart.reverse();
              this.rightPart = this.rightPart.join('');
  //final result after division            
              this.result = this.leftPart+this.rightPart;                        
            }
          }
          else if(this.addSign==0 && this.subSign==1)
          {
            this.addSign = 0;
            this.subSign = 0;
            this.mulSign = 0;
            this.dividSign = 0;
            this.indexStart = this.result.indexOf('-')-1;
            while(this.stateStart==0)
            {
              if(this.result[this.indexStart]=='+' || this.result[this.indexStart]=='-'|| this.result[this.indexStart]=='/'|| this.result[this.indexStart]=='*' || this.indexStart==-1)
              {
                this.indexStart++;
                this.stateStart=1;
              }
              else
              {
                this.firstNum = this.firstNum + this.result[this.indexStart];
                this.indexStart--;
              }
            }
            this.firstNum = this.firstNum.split('');
            this.firstNum = this.firstNum.reverse();
            this.firstNum = this.firstNum.join('');
            this.indexEnd = this.result.indexOf('-')+1;
            this.stateStart = 0;
            while(this.stateStart==0)
            {
              if(this.indexStart==0 && this.indexEnd==this.result.length){
                this.stateStart=1;
              }
              else if(this.result[this.indexEnd]=='+' || this.result[this.indexEnd]=='-'|| this.result[this.indexEnd]=='/'|| this.result[this.indexEnd]=='*' || this.indexEnd==-1)
              {
                this.indexEnd--;
                this.stateStart=1;
              }
              else
              {
                this.secondNum = this.secondNum + this.result[this.indexEnd];
                this.indexEnd++;
              }
            }    
            this.firstNum = parseInt(this.firstNum);
            this.secondNum = parseInt(this.secondNum);
            this.firstNum = this.firstNum - this.secondNum;
            this.firstNum = this.firstNum.toString();
  //lets store right part of the result
  // check first is the indexEnd = length-1 of the result if so then so there is no right part of the calculation
            if(this.indexEnd!=this.result.length-1)
            {
  //convert string to array to perform pop
              this.leftPart = this.result.split('');
              let newIndex = 0;
              this.rightPart = [];
              for(let rightIndex=this.result.length-1;rightIndex>this.indexEnd;rightIndex--)
              {
                this.rightPart[newIndex] = this.leftPart.pop();
                newIndex++;
              }            
              while(this.leftPart.length>this.indexStart)
              {
                this.leftPart.pop();
              }
  //join left array to make it string
              this.leftPart = this.leftPart.join('');
  //place the result after joining the right array
              this.leftPart = this.leftPart+this.firstNum;
  //join right array to make it string and attach the left
              this.rightPart = this.rightPart.reverse();
              this.rightPart = this.rightPart.join('');
  //final result after division            
              this.result = this.leftPart+this.rightPart;                        
            }
          }
        }      
      }
    }
  }
// this function to remove the content from the string last added
  removePrevious(){
    this.temp='';
    for(this.i=0;this.i<this.result.length-1;this.i++)
    {
      this.temp = this.temp + this.result[this.i];
    }

    this.result = this.temp;
  }
}
