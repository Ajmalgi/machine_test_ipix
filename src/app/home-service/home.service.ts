import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  JobUrl = "https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=why-work-with-us"
  PerksUrl ="https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=perks-benefits"
  educationUrl = "https://admin-edubex.ipixsolutions.net/api/v1/career/list"
  careerUrl = "https://admin-edubex.ipixsolutions.net/api/v1/career/detail"
  Jobapply ="https://admin-edubex.ipixsolutions.net/api/v1/career/apply"
  constructor(private http:HttpClient) { }


  Job_opening():Observable<any>{
    return this.http.get(this.JobUrl)
  }

  Perks():Observable<any>{
    return this.http.get(this.PerksUrl)
  }

  education():Observable<any>{
    return this.http.get(this.educationUrl)
  }
  career_details(formData:any): Observable<any> {
    return this.http.post(this.careerUrl,formData)
  }
  
  Job_apply(formData:any):Observable<any>{
    return this.http.post(this.Jobapply,formData)
  }


}
