import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  downloadLink: string;
  fileName: string;
  dateTime: string;
  username: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {downloadLink: 'In-progress', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'ac3018'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'ac3018'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'ac3018'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'ac3018'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'pp0001'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'pp0001'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'ds1234'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'ds1234'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'pq1234'},
  {downloadLink: 'Download', fileName: 'Revised_Rate_From_2023-03-29_To_2023-04-29', dateTime: '2023-03-29 01:02:03', username: 'pq1234'},
];

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements AfterViewInit {
  displayedColumns: string[] = ['downloadLink', 'fileName', 'dateTime', 'username'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
