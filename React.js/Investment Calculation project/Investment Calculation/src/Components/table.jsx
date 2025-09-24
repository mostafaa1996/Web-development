import headersOfTable from "../headersOfTable";
import {calculateInvestmentResults , formatter} from "../util/investment";

export default function TableCreation({ row, col , inputData}) {
  const annualData = calculateInvestmentResults(inputData);
  


  console.log(inputData) ;
  console.log(annualData);
  const headers = headersOfTable.map((header, index) => (
    <th key={index}>{header}</th>
  ));


  return (
    <table id="result" className="center">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>
         {annualData.map(
            (yearData)=>{
               return (<tr>
                   <td>{yearData.year}</td>
                   <td>{formatter.format(yearData.valueEndOfYear)}</td>
                   <td>{formatter.format(yearData.interest)}</td>
                   <td></td>
                   <td></td>
                </tr>);
            }
         )}
      </tbody>
    </table>
  );
}
