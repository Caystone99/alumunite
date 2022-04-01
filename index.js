let schoolInput = document.getElementById('schoolInfo');

let addBtn = document.getElementById('addInput');

let inputCount = 1;

const formInput =(count)=>{
    return `
<label for="schoolName">
                    Select a school you graduated from
                </label>
                <br/>
                <div class="formInput">
                    <input
                        type="text"
                        list="schoolList"
                        name='schoolName_${count}'
                        placeholder="Select Your School"
                    />
                    <datalist id="schoolList">
                        <option value="Faith Academy">Faith Academy</option>
                    </datalist>
                    <i class="fa fa-chevron-down formChev"></i>
                </div>

                <p>
                    Can't find your school? <a href='#'>Add your school to the list</a>
                </p>
                
                <div class="formRadio"> 
                    <span class="formRadioCheck">
                        <input type="radio" value="Yes" name='radioYes_${count}'/>
                    </span> 
                    <span class="formRadioText">
                        Still schooling here presently
                    </span>
                </div>
                
                <br/>
                
                <label for="gradYear">
                    Year Graduated
                </label>
                <div class="formInput">
                    <input
                        type="date"
                        name='dateGrad_${count}'
                    />
                    <i class="fa fa-calendar-alt formCal"></i>
                </div>
                <br/>
                <hr/>`
}
addBtn.addEventListener('click', ()=>{
    inputCount = inputCount + 1;
    console.log(inputCount)
    schoolInput.insertAdjacentHTML('afterend', formInput(inputCount))
})