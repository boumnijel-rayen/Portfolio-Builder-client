import { Component, OnInit } from '@angular/core';
import { DataAdminService } from 'src/app/services/data-admin.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  token : string = localStorage.getItem('token_Admin') || '';
  id = localStorage.getItem('id_Admin');
  profiles : any;
  constructor(private dataAService : DataAdminService) { }

  ngOnInit(): void {
    this.getAllProfiles();
  }

  getAllProfiles(){
    this.dataAService.getAllProfiles(this.token).subscribe(
      (data) => {
        this.profiles = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProfile(id: number){
    this.dataAService.deleteProfile(id, this.token).subscribe(
      (data) => {
        this.getAllProfiles();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
