import { Component } from '@angular/core';
import { HomeService } from 'src/app/home-service/home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
   formdata =new FormData()
   career_data:any;
   resume:any;
   cover:any;
   formData = new FormData();
   onresumeChange(event:any){
    this.resume = event.target.files[0]
    }
   oncoverChange(event:any){
    this.cover = event.target.files[0]
    }
  constructor(private service:HomeService){}

 
  ngOnInit(){
     this.formdata.append('id','17')
    this.service.career_details(this.formdata).subscribe((res)=>{
      this.career_data = res
      console.log(this.career_data)
    })
  }

  Job_apply = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    location: new FormControl(''),
    resume: new FormControl('', [Validators.required]),
    cover_letter: new FormControl('', [Validators.required]),
    linkedin: new FormControl(''),
    website: new FormControl('', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*[/]?')])
  })
  
  onSubmit(){
    
  
 
    this.formData.append('first_name', this.Job_apply.get('first_name')?.value??'');
    this.formData.append('last_name', this.Job_apply.get('last_name')?.value??'');
    this.formData.append('email', this.Job_apply.get('email')?.value??"");
    this.formData.append('phone', this.Job_apply.get('phone')?.value??"");
    this.formData.append('location', this.Job_apply.get('location')?.value??'');
    this.formData.append('linkedin', this.Job_apply.get('linkedin')?.value??'');
    this.formData.append('website', this.Job_apply.get('website')?.value??'');
    this.formData.append('resume', this.resume);
    this.formData.append('cover_letter', this.cover);

    this.service.Job_apply(this.formData).subscribe(response => {
      console.log(response);
    });
  }
  
  }

 
