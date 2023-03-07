
import './App_Accordion.css'
import AccordionData from '../data/AccordionData'
import { useState } from 'react';
import SingleContent from '../components/Accordion/SingleContent';

function App_Accordion() {
  const [content,setContent] = useState(AccordionData);
  return (
    <main>
        <div className="container">
          <h3>Tool dev 2023</h3>
          <section>
            {content.map((data)=>{
              return <SingleContent key={data.id} {...data}/>
            })}
          </section>
        </div>
    </main>
  );
}

export default App_Accordion;
