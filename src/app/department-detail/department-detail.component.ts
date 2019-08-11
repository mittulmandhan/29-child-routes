import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    // ParamMap Observable added
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'));
      this.departmentId = id;
    });
    }

    goPrevious() {
      const previousId = this.departmentId - 1;
      this.router.navigate(['/departments', previousId]);
    }

    goNext() {
      const nextId = this.departmentId + 1;
      this.router.navigate(['/departments', nextId]);
    }

    goToDepartments() {
      const selectedId = this.departmentId ? this.departmentId : null;
      this.router.navigate(['/departments', {id: selectedId}]);
    }

}
