import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  resSM:any
  resGI:any
  resBio:any
  resAcc:any
  resAward:any
  resCert:any
  resVol:any
  resRef:any
  constructor(private http : HttpClient) { }

  createPortfolio(generalInfos : any, biography : any, socialMediaList : Array<SocialMedia>, accomplishmentsList : Array<Accomplishment>, awardsList : Array<Award>, certificationsList : Array<Certification>, volunteeringList : Array<Volunteering>, referencesList : Array<Reference>,token : string, id_user : string){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    var savedSM : Array<any> = []

    let generalInfosAdd = {
      full_name : generalInfos.fullname,
      occupation : generalInfos.occupation,
      career_summary : generalInfos.career,
      philosophy_statement : generalInfos.philosophy
    }

    this.http.post('http://localhost:8000/portfolio/portfolio/add/', generalInfosAdd,{headers:headers}).subscribe(data => {
      this.resGI = data;
      }).add(()=>{
        let biographyAdd = {
          description : biography.biography,
          email : biography.email,
          website : biography.website
        }
        this.http.post('http://localhost:8000/portfolio/bio/add/',biographyAdd,{headers:headers}).subscribe(data => {
          this.resBio = data;
        }).add(()=>{
          this.http.put('http://localhost:8000/portfolio/portfolio/'+this.resGI.id+'/biography/'+this.resBio.id,{}, {headers:headers}).subscribe().add(()=>{
        
          socialMediaList.forEach(element => {
            let socialMedia = {
              socialMedia_name : element.name,
              socialMedia_link : element.link
            }
            this.http.post('http://localhost:8000/portfolio/media/add/', socialMedia,{headers:headers}).subscribe(data => {
               this.resSM = data;
            }).add(()=>{
              this.http.put('http://localhost:8000/portfolio/media/'+this.resSM.id+'/biography/'+this.resBio.id,{}, {headers:headers}).subscribe()
            })
          })

          accomplishmentsList.forEach(element => {
            let accomplishment = {
              name : element.accomplishment,
              category : element.category,
              accomplishment_justification : element.proof
            }
            this.http.post('http://localhost:8000/portfolio/Pacc/add/', accomplishment,{headers:headers}).subscribe(data => {
              this.resAcc = data;
            }).add(()=>{
              this.http.put('http://localhost:8000/portfolio/Pacc/'+this.resAcc.id+'/portfolio/'+this.resGI.id,{}, {headers:headers}).subscribe()
            })

          })

          awardsList.forEach(element => {
            let award = {
              title : element.title,
              date : element.date,
              recognition_level : element.level,
              award_justification : element.proof
            }
            this.http.post('http://localhost:8000/portfolio/award/add/', award,{headers:headers}).subscribe(data => {
              this.resAward = data;
            }).add(()=>{
              this.http.put('http://localhost:8000/portfolio/award/'+this.resAward.id+'/portfolio/'+this.resGI.id,{}, {headers:headers}).subscribe()
            })

          })

          certificationsList.forEach(element => {
            let certification = {
              title : element.title,
              description : element.description,
              document_link : element.linkD
            }
            this.http.post('http://localhost:8000/portfolio/certification/add/', certification,{headers:headers}).subscribe(data => {
              this.resCert = data;
            }).add(()=>{
              this.http.put('http://localhost:8000/portfolio/certification/'+this.resCert.id+'/portfolio/'+this.resGI.id,{}, {headers:headers}).subscribe()
            })

          })

          volunteeringList.forEach(element => {
            let volunteering = {
              name : element.name,
              description : element.description
            }
            this.http.post('http://localhost:8000/portfolio/cservice/add/', volunteering,{headers:headers}).subscribe(data => {
              this.resVol = data;
            }).add(()=>{
              this.http.put('http://localhost:8000/portfolio/cservice/'+this.resVol.id+'/portfolio/'+this.resGI.id,{}, {headers:headers}).subscribe()
            })

          })

          referencesList.forEach(element => {
            let reference = {
              title : element.title,
              job_title : element.jobTitle,
              email : element.email,
              phone_number : element.phone
            }
            this.http.post('http://localhost:8000/portfolio/reference/add/', reference,{headers:headers}).subscribe(data => {
              this.resRef = data;
            }).add(()=>{
              this.http.put('http://localhost:8000/portfolio/reference/'+this.resRef.id+'/portfolio/'+this.resGI.id,{}, {headers:headers}).subscribe()
            })

          })
          
        })
        this.http.put('http://localhost:8000/portfolio/user/'+id_user+'/portfolio/'+this.resGI.id,{}, {headers:headers}).subscribe()
      })
      })
  }

  getIdPortfolio(token : any, id_user : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/user/getuserbyid/'+id_user,{headers:headers})
  }

  getPortfolio(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/portfolio/getportfoliobyid/'+id,{headers:headers})
  }

  getBio(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/bio/getbiobyid/'+id,{headers:headers})
  }

  getSocialMedia(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/media/Bio/'+id,{headers:headers})
  }

  getAccomplishments(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/Pacc/Portfolio/'+id,{headers:headers})
  }

  getAwards(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/award/Portfolio/'+id,{headers:headers})
  }

  getCertifications(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/certification/Portfolio/'+id,{headers:headers})
  }

  getVolunteering(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/cservice/Portfolio/'+id,{headers:headers})
  }

  getReferences(token : any, id : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/reference/Portfolio/'+id,{headers:headers})
  }

  updatePortfolio(token : any, id : any, portfolio : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8000/portfolio/portfolio/modify/'+id,portfolio,{headers:headers})
  }

  updateBio(token : any, id : any, bio : any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.put('http://localhost:8000/portfolio/bio/modify/'+id,bio,{headers:headers})
  }
}
