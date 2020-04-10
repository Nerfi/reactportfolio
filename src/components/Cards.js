import React from "react";
import {Card,CardTitle,CardText,CardActions,Button} from 'react-mdl';

const Cards = (props) => (
  <div>

     <Card  key={props.key} shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: props.backgroundImg }}>{props.name}</CardTitle>
          <CardText>
           {props.description}
         </CardText>
           <CardActions border>
            <Button colored>
               <a href="https//:github.com/mjachowdhury/myPortfolio">Github</a>
            </Button>

          <Button colored>Live Demo</Button>
       </CardActions>

      </Card>



  </div>
);


export default Cards;
