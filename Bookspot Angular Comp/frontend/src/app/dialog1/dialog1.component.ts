import { Component, OnInit, Inject, Input } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { InternalService } from "../internal.service";
import { RouterserviceService } from "../routerservice.service";
@Component({
  selector: "app-dialog1",
  templateUrl: "./dialog1.component.html",
  styleUrls: ["./dialog1.component.css"],
})
export class Dialog1Component implements OnInit {
  flag: boolean;
  constructor(
    public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private internalService: InternalService,
    private routerService: RouterserviceService,

  ) {}

  ngOnInit() {
    let username = sessionStorage.getItem("key");
    if (sessionStorage.getItem("key") != null) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  comment(id) {
    this.internalService.setId(id);
    this.routerService.tobookDetails();
  }

}
