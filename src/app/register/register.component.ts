import { Component, OnInit,OnChanges} from '@angular/core';
import {FormBuilder,FormGroup,FormControl,FormArray,Validators,NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
   contactForm:FormGroup;
   name;
   pandispaly:boolean=false;

   skillsarray:any[]=[];
  
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

   // For checkbox Loop
   skills=[
   {name: "JAVA" ,value:"JAVA"},
   {name: "PHP",value:"PHP"},
   {name: "MYSQL",value:"MYSQL"},
   {name: "JAVASCRIPT",value:"JAVASCRIPT"},
   {name: "HTML",value:"HTML"},
   {name: "CSS",value:"CSS"},
   {name: "HADOOP",value:"HADOOP"},
   {name: "ANGULAR",value:"ANGULAR"},
   {name: "BOOSTRAP",value:"BOOSTRAP"}
  ];

  responceResult=[
    {name: "JAVA" ,value:"JAVA"},
    {name: "PHP",value:"PHP"},
    {name: "BOOSTRAP",value:"BOOSTRAP"}
   ];

  //emails = [{email:"email1"},{email:"email2"},{email:"email3"},{email:'email4'}]


  constructor(private frmbuilder:FormBuilder) {
    this.contactForm=frmbuilder.group({  
      name:new FormControl('',[Validators.required,Validators.minLength(6)]),   
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    //email: new FormControl('', [Validators.required, Validators.email]),  // for angular 4 default  Validators.email property
      mobile:new FormControl('', [Validators.required,Validators.pattern("[0-9]*")]),  
      country:new FormControl('', [Validators.required]),  
      gender:new FormControl('male'),
    //skillscontrol: this.frmbuilder.array(['JAVA','HADOOP']),  // (For default checked Values)
      skillscontrol: this.frmbuilder.array([]), // For default All values unchecked
      birthday:new FormControl(),  
      subject:new FormControl('',[Validators.minLength(5),Validators.maxLength(15)]),  
      message:new FormControl('') ,
      pan:new FormControl(''),
      pannum:new FormControl('')      
      });     
    }

  ngOnInit() {
   
  }

  postData(data:NgForm)  
  {  
 //console.log(data.controls);  
   console.log(data);
  } 

  reset()
  { 
    //this.contactForm.controls['name'].setValue('');
    this.contactForm.reset();
  }


  // For Checkbox
  isChecked(skill) {
    return this.contactForm.controls.skillscontrol.value.includes(skill);
  }
  
  onChange(skill:string, isChecked: boolean) {
    const skillsFormArray = <FormArray>this.contactForm.controls.skillscontrol;
    if(isChecked) {
      skillsFormArray.push(new FormControl(skill));
    } else {
      let index = skillsFormArray.controls.findIndex(x => x.value == skill)
      skillsFormArray.removeAt(index);
    }
}
// For Checkbox End



minMax(control: FormControl) {
  return parseInt(control.value) > 5 && parseInt(control.value) <=20 ? null : {
    minMax: true
  }
}


  // not allow Characters Validation
 notallowcharsvalidate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  //not Allow Numbers Validation
  notallownumsvalidate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[a-z,A-Z]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  panvalid(panval){
//console.log(panval);
         if(panval=='yes'){
          this.pandispaly=true;
            }
        else{
          this.pandispaly=false;
            }
      }

}
