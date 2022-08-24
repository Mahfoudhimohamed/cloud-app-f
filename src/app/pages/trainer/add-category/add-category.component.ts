import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category= {
    title:'',
    description:'',
    trainers: [
       
      {
          id:25
      }
  ]
  }
  constructor(private categoryService:CategoryService ,private toastr : ToastrService  ) { }

  ngOnInit(): void {
  }

 formSubmit(){
   if(this.category.title.trim() =='' || this.category.description == null){
     this.toastr.error('Title is required', '',{
       timeOut:2000
     });
     return;
   }



   this.categoryService.addCategory(this.category).subscribe((data:any)=>{
     this.category.title='';
     this.category.description='';
     Swal.fire("Success",'Category is addesd success','success')
   },
   (error)=>{
     console.log(error)
    Swal.fire("Error",'Server error','error')
   })
 }


}
