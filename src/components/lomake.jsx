import React, {useState} from 'react';
import '../styles/lomake.css';
import uuidv4 from 'uuidv4';

const Lomake = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [timetomaster, setTimeT] = useState(0);
    const [timespent, setTimeS] = useState(0);
    const [source, setSource] = useState("");
    const [startlearningdate, setStartDate] = useState("2010-9-11");
    const [completiondate, setCompDate] = useState("2010-9-11");
    const [inprogress, setInprogress] = useState("");

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleTimeT = (e) => setTimeT(e.target.value);
    const handleSource = (e) => setSource(e.target.value);
    const handleTimeS = (e) => setTimeS(e.target.value);
    const handleStartD= (e) => setStartDate(e.target.value);
    const handleCompD = (e) => setCompDate(e.target.value);
    const handleInprogress = (e) => setInprogress(e.target.value);

    /*const handleAdd=()=>{
    /*setPeople([...people, {name:name}]);
    setName("");
    }*/

return (
    <div class="container" id="contact">
            <h1>Oppimispäiväkirja</h1>
            <fieldset>
            <input
              value={title}
              onchange={handleTitle}
              type="text"
              name="title"
              placeholder="Nimi"
            /></fieldset>
            <fieldset>
            <input
              type="text"
              value={source}
              onchange={handleSource}
              name="source"
              placeholder="Lähteet"
            /></fieldset>
            <fieldset>
                <textarea
                  value={description}
                  onchange={handleDescription}
                  name="description"
                  placeholder="Kuvaile tänne">
                </textarea>
                </fieldset>
            <div class="centerThis">
            <fieldset>
            <input
              type="number"
              value={timetomaster}
            onchange={handleTimeT}
              name="timetomaster"
              placeholder="Aika hanskaamiseen"
            />
            <input
              type="number"
              value={timespent}
            onchange={handleTimeS}
              name="timespent"
              placeholder="Käytetty aika"
            /></fieldset>
            <fieldset>
            <input
              type="date"
              value={startlearningdate}
            onchange={handleStartD}
              name="startdate"
              required="required"
            />
            <input
              type="date"
              value={completiondate}
            onchange={handleCompD}
              name="startdate"
              required="required"
            />
            </fieldset>
          </div>
            <fieldset class="forCheckbox">
            <label for="progress">
            <input type="checkbox" 
            value={inprogress}
            onchange={handleInprogress} />
            <span>Merkintä valmis</span></label>
            </fieldset>
            <fieldset>
            <button >Luo uusi</button>
            </fieldset>
      </div>
)

}

export default Lomake;