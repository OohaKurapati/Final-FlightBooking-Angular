import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../services/airline.service';
import { Router } from '@angular/router';
//import { Html2CanvasOptions } from 'jspdf';
import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';
//import HtmlCanvasElement from 'html2canvas';


@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {
  bookingHistory:any;
  PNR:any;

  constructor(private _airlineService:AirlineService,private router:Router) { }

  ngOnInit(): void {
    this._airlineService.getHistory(localStorage.getItem('userName')).subscribe(
      data => {
          this.bookingHistory = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  }
  cancelBooking(pnrNumber:any)
  {
    this._airlineService.cancelPNR(pnrNumber).subscribe(
      data => {

        console.log(data);
        this.ngOnInit();
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );

  }
  //array:any=[];
  //flie(){
    //for(let i=0; i<this.)

  //}
  //then:any;

  downloadPDF(){
    //var ticketcard = document.getElementById('ticketcard');  
    //var ticketcard = $('#print').get(0);
    //const el1: HTMLElement = ticketcard!;
    //html2canvas(el1).then((canvas: { height: number; width: number; toDataURL: (arg0: string) => any; })=> {  
       //Few necessary setting options  
      //var imgWidth = 208;   
      //var pageHeight = 295;    
      //var imgHeight = canvas.height * imgWidth / canvas.width;  
      //var heightLeft = imgHeight;  
  
      //const contentDataURL = canvas.toDataURL('image/png')  
      //let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      //var position = 0;  
      //pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      //pdf.save(this.PNR + '.pdf'); // Generated PDF   
    //});  
   }
  search()
  {
    if(this.PNR!=null && this.PNR!=undefined && this.PNR!="")
    {
      this._airlineService.searchPNR(this.PNR).subscribe(
        data => {
            this.bookingHistory = data;
            console.log(data);
        }, error => {
            console.log('httperror:');
            console.log(error);
        }
    );
    }
    else
    {
      this.ngOnInit()
    }

  }

}
function html2canvas(el1: HTMLElement) {
  throw new Error('Function not implemented.');
}

