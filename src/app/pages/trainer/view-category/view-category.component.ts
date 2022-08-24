import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  categories= null;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe((data:any)=>{
      this.categories = data;
      console.log(this.categories)

    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data', 'error')
    })
  }

}
