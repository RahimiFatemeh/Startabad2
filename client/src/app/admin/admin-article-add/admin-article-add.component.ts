import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/_services/article.service';

@Component({
  selector: 'app-admin-article-add',
  templateUrl: './admin-article-add.component.html',
  styleUrls: ['./admin-article-add.component.css']
})
export class AdminArticleAddComponent implements OnInit {
  fileName = ''
  addArticleForm! : FormGroup

  constructor(
    private articleService: ArticleService , 
    private fb : FormBuilder ,
    private toastr : ToastrService
    ) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  addArticle()
  {  // addArticle()
    // {
    //   const formData = new FormData()
    //   formData.append('title', this.addArticleForm?.get('title')?.value)
    //   formData.append('author', this.addArticleForm?.get('author')?.value)
    //   formData.append('groupId', this.addArticleForm?.get('groupId')?.value)
    //   formData.append('body', this.addArticleForm?.get('body')?.value)
    //   formData.append('image', this.addArticleForm?.get('image')?.value)
    //   this.articleService.AddArticle(formData).subscribe(
    //     (res) => console.log(res),  
    //     (err) => console.log(err)
    //   )
    // }
    this.articleService.AddArticle(this.addArticleForm.value).subscribe(()=>{
      this.toastr.success("با موفقیت اضافه شد")
    })
  }   

  // addArticle()
  // {
  //   const formData = new FormData()
  //   formData.append('title', this.addArticleForm?.get('title')?.value)
  //   formData.append('author', this.addArticleForm?.get('author')?.value)
  //   formData.append('groupId', this.addArticleForm?.get('groupId')?.value)
  //   formData.append('body', this.addArticleForm?.get('body')?.value)
  //   formData.append('image', this.addArticleForm?.get('image')?.value)
  //   this.articleService.AddArticle(formData).subscribe(
  //     (res) => console.log(res),  
  //     (err) => console.log(err)
  //   )
  // }

  initializeForm(){
    this.addArticleForm = this.fb.group ({
      title : ['', Validators.required ],
      author : ['',[Validators.required , Validators.maxLength(10)]] ,
      groupId : ['', Validators.required] ,
      body : ['', Validators.required] ,
      image : ['']
    })
  }

  onImageChange(event:any) {

    if (event.target.files.length) {
      const file = event.target.files[0];
      this.addArticleForm?.get('image')?.setValue(file);
    }
  }
}
