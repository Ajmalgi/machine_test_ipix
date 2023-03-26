import { Component } from '@angular/core';
import { HomeService } from 'src/app/home-service/home.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent {
  why_work:any;
  Perks:any;
  education:any;
  constructor(private service:HomeService){}

  ngOnInit(){
    this.service.Job_opening().subscribe((res)=>{
      this.why_work = res
    })

    this.service.Perks().subscribe((res)=>{
      this.Perks = res
      
    })

    this.service.education().subscribe((res)=>{
      this.education = res.careers
      console.log(this.education)
    })
  }
}
