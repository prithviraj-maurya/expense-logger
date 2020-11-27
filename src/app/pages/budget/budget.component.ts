import { Component, HostListener, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
declare var require: any;
require('highcharts/themes/dark-blue')(HighCharts);
import { Expense } from 'src/app/model/expense';
import { DataService } from 'src/app/services/data/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {

  expenses: Expense[] = [];
  distance;
  showPieChart = false;
  showLineChart = false;
  constructor(private dataService: DataService) {
    this.dataService.getExpensesBehaviour().subscribe((expenses: Expense[]) => {
      this.expenses = expenses;
    });
    this.getWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getWindowSize();
  }

  ngOnInit() { }

  ionViewDidEnter() {
    if (this.expenses && this.expenses.length > 0) {
      this.plotPieChart();
    }
    // this.plotLineChart();
  }

  showYearlyExpensePlot() {
    this.plotLineChart();
  }

  getWindowSize() {
    let windowSize = window.innerWidth;
    this.distance = -60;

    if (windowSize > 700) {
      this.distance -= 30;
    }
  }

  getPieData(expenses: Expense[]): Array<Object> {
    const categorySum = this.dataService.getCategorySum(expenses);
    console.log(this.expenses);
    console.log(categorySum);
    return this.dataService.createPieChartData(categorySum);
  }

  getLineChartData(expenses: Expense[]): Array<any> {
    let chartData = [];
    const allYears = this.dataService.getAllYearsFromExpenses(expenses);
    console.log("all expense years");
    console.log(allYears);
    this.dataService.getAllExpensesBehaviour().subscribe((expenses: Expense[]) => {
      console.log("all expenses");
      console.log(expenses);
      const categoryMapYearly: Map<string, Expense[]> = this.dataService.createCategoryMap(expenses);
      [...categoryMapYearly.keys()].forEach(key => {
        const expenses: Expense[] = categoryMapYearly.get(key);
        const data = [];
        allYears.forEach((year: string) => {
          let totalSum = 0;
          expenses.map((expense: Expense) => {
            if (moment(expense.createdOn).format('YYYY') === year) {
              totalSum += expense.amount;
            }
          });
          data.push(totalSum);
        });
        chartData.push(
          { name: key, data: data }
        );
      });
    });
    console.log("line chart data");
    console.log(chartData);
    this.showLineChart = true;
    return chartData;
  }

  plotPieChart() {
    let myChart = HighCharts.chart('piechart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Expenses as of ' + moment().format('MMMM Do')
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,  // labels in the chart for all sections  
            formatter: function () {
              return this.percentage.toFixed() + '%'
            },
            distance: this.distance
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Expense Categories',
        colorByPoint: true,
        type: undefined,
        // innerSize: '50%',
        data: this.getPieData(this.expenses),
      }]
    });
  }

  plotLineChart() {
    const installedYear = moment(new Date(this.dataService.getInstalledDate())).format('YYYY');
    let linechart = HighCharts.chart('linechart', {
      title: {
        text: 'Yearly Spend'
      },
      yAxis: {
        title: {
          text: 'Amount'
        }
      },
      xAxis: {
        accessibility: {
          rangeDescription: `Range: ${this.dataService.getInstalledDate()} to ${moment().format('MMMM')}`
        }
      },
      legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2015
        }
      },
      series: this.getLineChartData(this.expenses)
    });
    linechart.series[0].update({
      type: undefined,
      pointStart: parseInt(installedYear),
      pointInterval: 1,
      // data: data.data
    }, true);
  }
}
