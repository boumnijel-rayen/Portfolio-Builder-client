import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent implements OnInit {

  myForm1 : any;
  myForm2 : any;
  myForm3 : any;
  @ViewChild('accomplishments') accomplishments: any;
  @ViewChild('accomplishment') accomplishment: any;
  @ViewChild('category') category: any;
  @ViewChild('proof') proof: any;
  myForm4 : any;
  @ViewChild('awards') awards: any;
  @ViewChild('title') title: any;
  @ViewChild('level') level: any;
  @ViewChild('date') date: any;
  @ViewChild('proof4') proof4: any;
  myForm5 : any;
  @ViewChild('certifications') certifications: any;
  @ViewChild('title5') title5: any;
  @ViewChild('linkD') linkD: any;
  @ViewChild('description') description: any;
  myForm6 : any;
  @ViewChild('volunteering') volunteering: any;
  @ViewChild('name6') name6: any;
  @ViewChild('description6') description6: any;
  myForm7 : any;
  @ViewChild('references') references: any;
  @ViewChild('jobTitle') jobTitle: any;
  @ViewChild('email7') email7: any;
  @ViewChild('phone') phone: any;

  @ViewChild('form1') form1: any;
  @ViewChild('form2') form2: any;
  @ViewChild('form3') form3: any;
  @ViewChild('form4') form4: any;
  @ViewChild('form5') form5: any;
  @ViewChild('form6') form6: any;
  @ViewChild('form7') form7: any;

  constructor(private formBuilder : FormBuilder) { 
    this.myForm1 = this.formBuilder.group({
      fullname : [],
      occupation : [],
      career : [],
      philosophy : []
    });
    this.myForm2 = this.formBuilder.group({
      email : [],
      website : [],
      biography : []
    });
    this.myForm3 = this.formBuilder.group({
      accomplishments : []
    });
    this.myForm4 = this.formBuilder.group({
      awards : []
    });
    this.myForm5 = this.formBuilder.group({
      certifications : []
    });
    this.myForm6 = this.formBuilder.group({
      volunteering : []
    });
    this.myForm7 = this.formBuilder.group({
      references : []
    });
  }

  ngOnInit(): void {
  }

  addAccomplishment() {
    var str =this.accomplishment.nativeElement.value+"  "+this.category.nativeElement.value+"  "+this.proof.nativeElement.value;
    this.accomplishment.nativeElement.value = "";
    this.category.nativeElement.value = "";
    this.proof.nativeElement.value = "";
    this.accomplishments.nativeElement.options.add(new Option(str,str));
  }

  addAward() {
    var str =this.title.nativeElement.value+"  "+this.level.nativeElement.value+"  "+this.date.nativeElement.value+"  "+this.proof4.nativeElement.value;
    this.title.nativeElement.value = "";
    this.level.nativeElement.value = "";
    this.date.nativeElement.value = "";
    this.proof4.nativeElement.value = "";
    this.awards.nativeElement.options.add(new Option(str,str));
  }

  addCertification() {
    var str =this.title5.nativeElement.value+"  "+this.description.nativeElement.value+"  "+this.linkD.nativeElement.value;
    this.title5.nativeElement.value = "";
    this.linkD.nativeElement.value = "";
    this.description.nativeElement.value = "";
    this.certifications.nativeElement.options.add(new Option(str,str));
  }

  addVolunteering() {
    var str =this.name6.nativeElement.value+"  "+this.description6.nativeElement.value;
    this.name6.nativeElement.value = "";
    this.description6.nativeElement.value = "";
    this.volunteering.nativeElement.options.add(new Option(str,str));
  }

  addReference() {
    var str =this.jobTitle.nativeElement.value+"  "+this.email7.nativeElement.value+"  "+this.phone.nativeElement.value;
    this.jobTitle.nativeElement.value = "";
    this.email7.nativeElement.value = "";
    this.phone.nativeElement.value = "";
    this.references.nativeElement.options.add(new Option(str,str));
  }

  nextForm1() {
    this.form2.nativeElement.style.display = "block";
    this.form1.nativeElement.style.display = "none";
  }

  nextForm2() {
    this.form2.nativeElement.style.display = "none";
    this.form3.nativeElement.style.display = "block";
  }

  backForm2() {
    this.form1.nativeElement.style.display = "block";
    this.form2.nativeElement.style.display = "none";
  }

  nextForm3() {
    this.form3.nativeElement.style.display = "none";
    this.form4.nativeElement.style.display = "block";
  }

  backForm3() {
    this.form2.nativeElement.style.display = "block";
    this.form3.nativeElement.style.display = "none";
  }

  nextForm4() {
    this.form4.nativeElement.style.display = "none";
    this.form5.nativeElement.style.display = "block";
  }

  backForm4() {
    this.form3.nativeElement.style.display = "block";
    this.form4.nativeElement.style.display = "none";
  }

  nextForm5() {
    this.form5.nativeElement.style.display = "none";
    this.form6.nativeElement.style.display = "block";
  }

  backForm5() {
    this.form4.nativeElement.style.display = "block";
    this.form5.nativeElement.style.display = "none";
  }

  nextForm6() {
    this.form6.nativeElement.style.display = "none";
    this.form7.nativeElement.style.display = "block";
  }

  backForm6() {
    this.form5.nativeElement.style.display = "block";
    this.form6.nativeElement.style.display = "none";
  }

  backForm7() {
    this.form6.nativeElement.style.display = "block";
    this.form7.nativeElement.style.display = "none";
  }

}
