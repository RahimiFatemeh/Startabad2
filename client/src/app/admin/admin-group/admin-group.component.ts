import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/_services/group.service';

@Component({
  selector: 'app-admin-group',
  templateUrl: './admin-group.component.html',
  styleUrls: ['./admin-group.component.css']
})
export class AdminGroupComponent implements OnInit {
  model : any = {}
  constructor(private groupService : GroupService) { }

  ngOnInit(): void {
  }

  addgroup()
  {
    this.groupService.addGroup(this.model).subscribe(response => {
      console.log(response)
    } , error => console.log(error)
     )
  }

}
