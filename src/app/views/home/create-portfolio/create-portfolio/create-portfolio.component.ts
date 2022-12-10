import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Accomplishment} from 'src/app/interfaces/accomplishment';
import { Award } from 'src/app/interfaces/award';
import { Certification } from 'src/app/interfaces/certification';
import { Reference } from 'src/app/interfaces/reference';
import { SocialMedia } from 'src/app/interfaces/social-media';
import { Volunteering } from 'src/app/interfaces/volunteering';
import { DataUserService } from 'src/app/services/data-user.service';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent implements OnInit {

  myForm1 : any;
  myForm2 : any;
  @ViewChild('socialMedia') socialMedia: any;
  @ViewChild('SM') SM: any;
  @ViewChild('link2') link2: any;
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
  @ViewChild('title7') title7: any;

  @ViewChild('form1') form1: any;
  @ViewChild('form2') form2: any;
  @ViewChild('form3') form3: any;
  @ViewChild('form4') form4: any;
  @ViewChild('form5') form5: any;
  @ViewChild('form6') form6: any;
  @ViewChild('form7') form7: any;
  @ViewChild('finishForm') finishForm: any;

  generalInfos: any;
  biography: any;
  socialMediaList: Array<SocialMedia> = [];
  accomplishmentsList: Array<Accomplishment> = [];
  awardsList: Array<Award> = [];
  certificationsList: Array<Certification> = [];
  volunteeringList: Array<Volunteering> = [];
  referencesList: Array<Reference> = [];

  token: any = localStorage.getItem('token_User');
  id_user: any = localStorage.getItem('id_User');

  constructor(private formBuilder : FormBuilder, private dataUserService : DataUserService, private router : Router) { 
    this.myForm1 = this.formBuilder.group({
      fullname : [],
      occupation : [],
      career : [],
      philosophy : []
    });
    this.myForm2 = this.formBuilder.group({
      email : [],
      website : [],
      biography : [],
      socialMedia : []
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
    var str =this.accomplishment.nativeElement.value+"<-->"+this.category.nativeElement.value+"<-->"+this.proof.nativeElement.value;
    this.accomplishment.nativeElement.value = "";
    this.category.nativeElement.value = "";
    this.proof.nativeElement.value = "";
    this.accomplishments.nativeElement.options.add(new Option(str,str));
  }

  addSocialMedia() {
    var str =this.SM.nativeElement.value+"<-->"+this.link2.nativeElement.value;
    this.SM.nativeElement.value = "";
    this.link2.nativeElement.value = "";
    this.socialMedia.nativeElement.options.add(new Option(str,str));
  }

  addAward() {
    var str =this.title.nativeElement.value+"<-->"+this.level.nativeElement.value+"<-->"+this.date.nativeElement.value+"<-->"+this.proof4.nativeElement.value;
    this.title.nativeElement.value = "";
    this.level.nativeElement.value = "";
    this.date.nativeElement.value = "";
    this.proof4.nativeElement.value = "";
    this.awards.nativeElement.options.add(new Option(str,str));
  }

  addCertification() {
    var str =this.title5.nativeElement.value+"<-->"+this.description.nativeElement.value+"<-->"+this.linkD.nativeElement.value;
    this.title5.nativeElement.value = "";
    this.linkD.nativeElement.value = "";
    this.description.nativeElement.value = "";
    this.certifications.nativeElement.options.add(new Option(str,str));
  }

  addVolunteering() {
    var str =this.name6.nativeElement.value+"<-->"+this.description6.nativeElement.value;
    this.name6.nativeElement.value = "";
    this.description6.nativeElement.value = "";
    this.volunteering.nativeElement.options.add(new Option(str,str));
  }

  addReference() {
    var str =this.jobTitle.nativeElement.value+"<-->"+this.email7.nativeElement.value+"<-->"+this.phone.nativeElement.value+"<-->"+this.title7.nativeElement.value;
    this.jobTitle.nativeElement.value = "";
    this.email7.nativeElement.value = "";
    this.phone.nativeElement.value = "";
    this.title7.nativeElement.value = "";
    this.references.nativeElement.options.add(new Option(str,str));
  }

  nextForm1() {
    this.form2.nativeElement.style.display = "block";
    this.form1.nativeElement.style.display = "none";
    this.generalInfos = this.myForm1.value;
  }

  nextForm2() {
    this.form2.nativeElement.style.display = "none";
    this.form3.nativeElement.style.display = "block";
    this.biography = this.myForm2.value;
    this.socialMediaList = [];
    for (let i = 0; i < this.socialMedia.nativeElement.options.length; i++) {
      var splitted = this.socialMedia.nativeElement.options[i].value.split("<-->");
      this.socialMediaList.push(new SocialMedia(splitted[0],splitted[1]));
    }
  }

  backForm2() {
    this.form1.nativeElement.style.display = "block";
    this.form2.nativeElement.style.display = "none";
  }

  nextForm3() {
    this.form3.nativeElement.style.display = "none";
    this.form4.nativeElement.style.display = "block";
    this.accomplishmentsList = [];
    for (let i = 0; i < this.accomplishments.nativeElement.options.length; i++) {
      var splitted = this.accomplishments.nativeElement.options[i].value.split("<-->");
      this.accomplishmentsList.push(new Accomplishment(splitted[0],splitted[1],splitted[2]));
    }
  }

  backForm3() {
    this.form2.nativeElement.style.display = "block";
    this.form3.nativeElement.style.display = "none";
  }

  nextForm4() {
    this.form4.nativeElement.style.display = "none";
    this.form5.nativeElement.style.display = "block";
    this.awardsList = [];
    for (let i = 0; i < this.awards.nativeElement.options.length; i++) {
      var splitted = this.awards.nativeElement.options[i].value.split("<-->");
      this.awardsList.push(new Award(splitted[0],splitted[1],splitted[2],splitted[3]));
    }
  }

  backForm4() {
    this.form3.nativeElement.style.display = "block";
    this.form4.nativeElement.style.display = "none";
  }

  nextForm5() {
    this.form5.nativeElement.style.display = "none";
    this.form6.nativeElement.style.display = "block";
    this.certificationsList = [];
    for (let i = 0; i < this.certifications.nativeElement.options.length; i++) {
      var splitted = this.certifications.nativeElement.options[i].value.split("<-->");
      this.certificationsList.push(new Certification(splitted[0],splitted[2],splitted[1]));
    }
  }

  backForm5() {
    this.form4.nativeElement.style.display = "block";
    this.form5.nativeElement.style.display = "none";
  }

  nextForm6() {
    this.form6.nativeElement.style.display = "none";
    this.form7.nativeElement.style.display = "block";
    this.volunteeringList = [];
    for (let i = 0; i < this.volunteering.nativeElement.options.length; i++) {
      var splitted = this.volunteering.nativeElement.options[i].value.split("<-->");
      this.volunteeringList.push(new Volunteering(splitted[0],splitted[1]));
    }
  }

  backForm6() {
    this.form5.nativeElement.style.display = "block";
    this.form6.nativeElement.style.display = "none";
  }

  backForm7() {
    this.form6.nativeElement.style.display = "block";
    this.form7.nativeElement.style.display = "none";
  }

  finish() {
    this.finishForm.nativeElement.style.display = "block";
    this.form7.nativeElement.style.display = "none";
    this.referencesList = [];
    for (let i = 0; i < this.references.nativeElement.options.length; i++) {
      var splitted = this.references.nativeElement.options[i].value.split("<-->");
      this.referencesList.push(new Reference(splitted[0],splitted[1],splitted[2],splitted[3]));
    }
    
    this.dataUserService.createPortfolio(this.generalInfos,this.biography,this.socialMediaList,this.accomplishmentsList,this.awardsList,this.certificationsList,this.volunteeringList,this.referencesList,this.token,this.id_user);
  }

  goToDashboard(){
    this.router.navigate(['/user'])
  }

}
