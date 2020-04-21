import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-finance-main",
  templateUrl: "./finance-main.component.html",
  styleUrls: ["./finance-main.component.css"],
})
export class FinanceMainComponent implements OnInit {
  updateDate = "12/04/2020";
  data: any;
  mounthExpense: any;
  dataTableTitle = "Dépenses Avril 2020";
  constructor(private router: Router, private route: ActivatedRoute) {
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#42A5F5",
          borderColor: "#1E88E5",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "#9CCC65",
          borderColor: "#7CB342",
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    this.initMounthExpenses();
  }

  ngOnInit(): void {}

  initMounthExpenses() {
    this.mounthExpense = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
  }

  onExpensesDetails() {
    this.router.navigate(["expenses"], { relativeTo: this.route });
  }
}
