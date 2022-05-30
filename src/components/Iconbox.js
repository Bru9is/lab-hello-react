import './iconbox.css';

import declarative from '../Images/icon1.png';
import components from '../Images/icon2.png';
import singleWay from '../Images/icon3.png';
import jsx from '../Images/icon4.png';

function iconBox(props) {

    const titulo1 = 'Declarative'
    const titulo2 = 'Components'
    const titulo3 = 'Single-Way'
    const titulo4 = 'JSX'
    const text1 = 'React makes it painless to create interactive UIs.'
    const text2 = 'Build encapsulated components that manage their state.'
    const text3 = 'A set of immutable values are passed to the components'
    const text4 = 'Statiscally-typed. designed to run on modern browsers.'


    return (
      <div id = "boxbar">
          <div id = "box" >
          <img scr={declarative} alt= 'Declarative'/>
          <h2>
            {titulo1}
          </h2>
          <p>
            {text1}
          </p>
          </div>
          <div id = "box" >
          <img scr={components} alt= 'Components' />
          <h2>
            {titulo2}
          </h2>
          <p>
            {text2}
          </p>
          </div>
          <div id = "box" >
          <img scr={singleWay} alt= 'Single Way' />
          <h2>
            {titulo3}
          </h2>
          <p>
            {text3}
          </p>
          </div>
          <div id = "box" >
          <img scr={jsx} alt= 'JSX' />
          <h2>
            {titulo4}
          </h2>
          <p>
            {text4}
          </p>
          </div>
      </div>
      
    );
  }
   
  export default iconBox;