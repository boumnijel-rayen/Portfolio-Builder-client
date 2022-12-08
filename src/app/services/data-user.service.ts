import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accomplishment } from '../interfaces/accomplishment';
import { Award } from '../interfaces/award';
import { Certification } from '../interfaces/certification';
import { Reference } from '../interfaces/reference';
import { SocialMedia } from '../interfaces/social-media';
import { Volunteering } from '../interfaces/volunteering';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  constructor(private http : HttpClient) { }

  createPortfolio(generalInfos : any, biography : any, socialMediaList : Array<SocialMedia>, accomplishmentsList : Array<Accomplishment>, awardsList : Array<Award>, certificationsList : Array<Certification>, volunteeringList : Array<Volunteering>, referencesList : Array<Reference>){
    
  }
}
